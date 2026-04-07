import { chromium } from 'playwright';
import fs from 'fs';
import path from 'path';

(async () => {
  // Use a local file URL but we must disable web security in chromium to allow cross-origin captureStream
  // Or we can just use the running vite server if we copy the video there? 
  // Wait, let's just launch chromium with --disable-web-security !
  const browser = await chromium.launch({ 
    headless: true,
    args: [
      '--disable-web-security',
      '--allow-file-access-from-files'
    ]
  });
  const page = await browser.newPage();

  const htmlContent = `
    <!DOCTYPE html>
    <html>
      <body>
        <video id="vid" src="file:///Users/vivekdesai/Downloads/SFL%201/SFL%20Pvt%20Ltd%20Promo%20Video%20with%20Music%20(2).mp4" style="width: 1920px; height: 1080px;"></video>
      </body>
    </html>
  `;
  const htmlPath = path.resolve('tmp_video.html');
  fs.writeFileSync(htmlPath, htmlContent);

  await page.goto(`file://${htmlPath}`);

  await page.exposeFunction('saveChunk', (base64Chunk) => {
      const buffer = Buffer.from(base64Chunk, 'base64');
      fs.appendFileSync('public/quality-bg.webm', buffer);
  });

  const result = await page.evaluate(async () => {
    const vid = document.getElementById('vid');
    await new Promise(r => { vid.onloadedmetadata = r; if(vid.readyState >= 1) r(); });
    
    vid.currentTime = 33;
    vid.muted = true;
    await new Promise(r => { vid.onseeked = r; });
    
    await vid.play();
    await new Promise(r => setTimeout(r, 200));

    // captureStream should work now because of --disable-web-security
    const stream = vid.captureStream();
    const recorder = new MediaRecorder(stream, { mimeType: 'video/webm;codecs=vp8', videoBitsPerSecond: 6000000 });
    
    recorder.ondataavailable = async (e) => {
      if (e.data.size > 0) {
        const buffer = await e.data.arrayBuffer();
        const base64 = btoa(new Uint8Array(buffer).reduce((data, byte) => data + String.fromCharCode(byte), ''));
        window.saveChunk(base64);
      }
    };
    
    recorder.start(500); // 500ms chunks
    await new Promise(r => setTimeout(r, 12000)); // record 12 seconds
    recorder.stop();
    await new Promise(r => setTimeout(r, 1000)); // Wait for last chunk
    return "done";
  });

  console.log('Recording finished:', result);
  await browser.close();
  fs.unlinkSync(htmlPath);
})();
