const { chromium } = require('playwright');
(async () => {
  const b = await chromium.launch();
  const p = await b.newPage({ viewport:{width:1920,height:1080}, deviceScaleFactor:1 });
  await p.goto('file://'+process.cwd()+'/templates.html'); await p.waitForTimeout(800);
  for (const id of ['hook','number','chart','quote','chapter','thumb']) {
    await p.evaluate(id=>{document.querySelectorAll('.f').forEach(e=>e.classList.remove('on'));document.getElementById(id).classList.add('on')},id);
    await p.evaluate(()=>document.fonts.ready);
    const el = await p.$('#'+id); await el.screenshot({ path: `out-${id}.png` });
  }
  await b.close();
})();
