const { chromium } = require('playwright');
(async () => {
  const b = await chromium.launch();
  const p = await b.newPage({ viewport:{width:1920,height:1080}, deviceScaleFactor:1 });
  await p.goto('file://'+process.cwd()+'/templates.html'); await p.waitForTimeout(800);
  await p.evaluate(()=>{document.getElementById('chart').classList.add('on')}); await p.evaluate(()=>document.fonts.ready);
  await p.screenshot({path:'out-chart.png'});
  const N=150; // 5 s at 30 fps: 4 s draw + 1 s hold
  for(let i=0;i<N;i++){ const t=Math.min(1,i/120); const e=1-Math.pow(1-t,3);
    await p.evaluate(e=>setProg(e),e); await p.screenshot({path:`anim/f${String(i).padStart(4,'0')}.png`}); }
  await b.close();
})();
