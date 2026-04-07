import { chromium } from 'playwright';
import fs from 'fs';
import path from 'path';

(async () => {
  const browser = await chromium.launch({ headless: true });
  const page = await browser.newPage();

  const htmlContent = `
    <!DOCTYPE html>
    <html>
      <body style="margin:0; background:black">
        <video id="vid" src="file:///Users/vivekdesai/Downloads/SFL%201/SFL%20Pvt%20Ltd%20Promo%20Video%20with%20Music%20(2).mp4" style="width: 100vw; height: 100vh; object-fit: cover;"></video>
      </body>
    </html>
  `;
  const htmlPath = path.resolve('tmp_video.html');
  fs.writeFileSync(htmlPath, htmlContent);

  await page.goto(`file://${htmlPath}`);
  
  const video = page.locator('#vid');
  await video.evaluate((vid) => {
    return new Promise(resolve => {
      vid.onloadedmetadata = resolve;
      if (vid.readyState >= 1) resolve(null);
    });
  });

  const timestamps = [5, 10, 15, 20, 25, 30, 40, 50, 60, 70, 80, 90, 100, 110];
  for (const t of timestamps) {
    try {
      await video.evaluate((vid, time) => {
        return new Promise((resolve) => {
          vid.onseeked = () => resolve(null);
          vid.currentTime = time;
        });
      }, t);
      // Give it a tiny bit of time to render the frame
      await page.waitForTimeout(200);
      const screenshotPath = path.resolve(`public/video_frames/thumb_${t}s.jpg`);
      fs.mkdirSync(path.dirname(screenshotPath), { recursive: true });
      await page.screenshot({ path: screenshotPath, type: 'jpeg', quality: 90 });
      console.log(`Saved frame at ${t}s to ${screenshotPath}`);
    } catch(e) {
      console.error(`Error at ${t}s:`, e);
    }
  }

  await browser.close();
})();
