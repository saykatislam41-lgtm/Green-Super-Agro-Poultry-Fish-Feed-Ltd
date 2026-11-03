/**
 * Cloudflare Worker for Green Super Agro Poultry & Fish Feeds Ltd.
 * Single-file implementation containing complete embedded HTML, CSS, JavaScript, and Worker Fetch API.
 */

const HTML_CONTENT = `<!doctype html>
<html lang="bn">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width,initial-scale=1">
<title>Green Super Agro Poultry & Fish Feeds Ltd.</title>
<link rel="icon" href="data:image/png;base64,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/+8/4/L8tffcHP257b4fWsqN2wK8f0zU3/oSrbvkF961eh6iN/8Y0iJgwoToxv20T9aY1l/T7559+jX7z9dfrmx+8g2uvvZpbHl7Bym0b2TDQz0A1Z5QcKk5b7l/jvf/u+47r1+/f5b3310//rV7++sfoz59wAX/2zFfi8hpxu8c2v//b4V/f9H2+/YsbuWPp8z838/d62QvO5A+e8gK6u7uJx+/590O5vj54V9//Vvd74fP1y59/q9748z/ww59/m7uWPc4Tq5ewdmADo27AOMHlHqM+Yt5bT8Y46kM//dG11/Ldf/+j/vefP67Xb/oZ1918NVffcRN/XP4wa9YvZ7g6jHOeEtsf6sXN9//Ff/u2d//28T/o1//n+frixSfxJ19/G2XbxH57+Hq//w/f+rveetMvufKxX+L/8qV36fPPfzrvfeY5WKu40Pfy8N+1u/343w1//xP/Tj9z7XdZ+fgq7lh09s539+V/14uefgl/du6luA6R7T8e1Wv86+b812+u0qve9359aN167lvxKD+66d9ZseoxVq/bwMDwKM7mOOMoxgq6zefm5x/6k56/1u957hL/X361vNn7z9d0D/S3z139H+X5/2+e669v/4k+a+nTeOGLL9FnnHYa8zpnkeo3G10s6N8gRj4q49Uar9a896D76gO895W/b2l6l2t9z4qH+PYt3+eB1fdx70N3s2n4CYaqGwnx746K33+9i/f+c91f6y/c8gvd+3/8u9z3+P2s2LCCe1csZvmaZawb3MSwqxF4f41iP/+kI++jN9q8j7wI5Y6k4Oq0g9W0/36b8e2V/r+787P6gW/8K/9z2df4t6u+yrV3/4Jly9ewasNahoaGqdfGqdVreK8ROf6N5j8Vvf+7//O/v/kL3fv3y57+19/x/T/840/V4/e/VB9bvZL7lv+J1Zv6WL1pNWsGN7B5fAP+4zWf5V+x6v17/W0113f8+t3Vd2/jF//9Vf7lh/9aX/3A/771+t8/+67HlzzM46uWsXLjWjZsWse6jYMMDY0w7jLq1hF1Z8Mfbkznr+2sVjV+fN/nve/a64f/9859f51veH+v9T+265+v8X9l++f13674N/1/P/gNly6dxeu/9k6qZQdxe6nFv/U46L1q2p8lCev+118r127m3uUPcd/Khy0W2i+2f3g0d41iB7y+/d4fv+e/n7j/H6857vXn//l0xSt0xct59e+/2Gff9J5e4e7eY42/1z750Adf/9n/9z09vG4dDy5bygNLlzDQ18/G8e2uT89Y22/3t+/0N7h4/2O8f+/q9f7zW3a/24fvf/5zW+fX1l9/9633/K+rvvL3f3ntF/m+y67g2e99GW1j/3c38+d1lT5w2Zd4aPXTrNy0ivXDY6wf3sC6oWHG6vWd6uL33z86895bT+y4lP1v1Wq7y+f3N73z+V7r3z/Xv+0Wv9Z3+Xn+O2v+uW71f3v9x/0/t+999+/pL+y5rN88u/X8c/r/+0/u9g9uud93X3T1t3+Vn1z2Bf37b1zNl9+x0m8aXvN311x90S6/7p9vvdJ7/j3722a/bvd8j+16/F+2f/94+z6x9v/Hq65bZ/713vutTvf6Wq036N30P0X/6yFv+/D/3vP9+a7/jG5/1t+X2uN+1f/r25v+5937wFv/1/O11jF56rKvf5lfs+x33ffZz/9a06/v+tHnv+2Lz++6z9f7/mF/W/3f9N/Lbb6xWw1e9x8v9Z99/91u12+n6+N/3v+N+9/91vf5+u2vf0ev+d2V/6wL279x//5z1f463+x/W9u7vHj/3H92/9//33//0/q3f/+5/1pT89//4Gfd+53X/72r/vf7H//233f++93v2v711r+/Sff++vf0e3/u+/7+ff6869ve5+e+2//6/r559+369/v9/291n/4p3v9qj4d2f83/V87/0/zW2/ze3733lff9v978r7/9/Vd95+fXvP3H48z9/3/8D5L0l4pBv/EIAAAAASUVORK5CYII=">

<style>
/* Reset and Font Base */
* { box-sizing: border-box; margin: 0; padding: 0; }
body { font-family: 'SolaimanLipi', 'Kalpurush', 'Hind Siliguri', system-ui, -apple-system, sans-serif; background: #f4f7f6; color: #2d3748; line-height: 1.6; }

/* Palette Variables */
:root {
  --primary: #075b3b;
  --primary-dark: #043d27;
  --accent: #25d366;
  --warning: #e53e3e;
  --bg-card: #ffffff;
  --text-dark: #1a202c;
  --text-muted: #718096;
}

/* Common Layout Containers */
.w { max-width: 1200px; margin: 0 auto; padding: 0 16px; }
.pg { display: none; padding: 40px 0; }
.pg.on { display: block; }

/* Header & Navigation */
header { background: #ffffff; border-bottom: 2px solid #e2e8f0; position: sticky; top: 0; z-index: 1000; box-shadow: 0 2px 4px rgba(0,0,0,0.05); }
.header-inner { display: flex; align-items: center; justify-content: space-between; height: 70px; }
.logo-container { display: flex; align-items: center; gap: 12px; cursor: pointer; }
.logo-container img { width: 48px; height: 48px; object-fit: contain; }
.logo-text { font-size: 1.25rem; font-weight: 800; color: var(--primary); line-height: 1.1; }
.logo-text small { display: block; font-size: 0.7rem; color: #4a5568; letter-spacing: 0.5px; }

nav { display: flex; gap: 20px; }
nav a { font-weight: 600; color: #4a5568; text-decoration: none; cursor: pointer; transition: color 0.2s; font-size: 1rem; }
nav a:hover { color: var(--primary); }

/* Buttons */
button, .btn { background: var(--primary); color: #ffffff; border: none; padding: 10px 20px; border-radius: 6px; font-weight: 700; cursor: pointer; transition: background 0.2s; font-size: 0.95rem; display: inline-block; text-align: center; }
button:hover, .btn:hover { background: var(--primary-dark); }
.btn.l { background: transparent; color: var(--primary); border: 2px solid var(--primary); }
.btn.l:hover { background: var(--primary); color: #ffffff; }

/* Hero Section */
.hero { background: linear-gradient(135deg, #075b3b 0%, #0d8a5a 100%); color: #ffffff; padding: 60px 0 80px 0; position: relative; }
.hg { display: grid; grid-template-columns: 1.2fr 0.8fr; gap: 40px; align-items: center; }
.tag { background: rgba(255,255,255,0.2); padding: 4px 12px; border-radius: 20px; font-size: 0.85rem; font-weight: 600; display: inline-block; margin-bottom: 12px; }
.hero h1 { font-size: 2.5rem; line-height: 1.2; margin-bottom: 12px; }
.hero h1 em { font-style: normal; color: #81e6d9; }
.sub { font-size: 1.2rem; margin-bottom: 16px; opacity: 0.9; }
.hero p { opacity: 0.85; font-size: 1rem; margin-bottom: 24px; }
.stack { display: grid; grid-template-columns: 1fr 1fr; gap: 16px; }
.stack div { background: rgba(255,255,255,0.1); padding: 16px; border-radius: 8px; text-align: center; backdrop-filter: blur(4px); }
.stack b { display: block; font-size: 1.8rem; color: #81e6d9; }

.wave { position: absolute; bottom: 0; left: 0; width: 100%; height: 50px; }

/* Stats & Marquee */
.stats { display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 16px; margin-top: -30px; position: relative; z-index: 10; }
.stat { background: #ffffff; padding: 20px; border-radius: 8px; text-align: center; box-shadow: 0 4px 6px rgba(0,0,0,0.05); }
.stat b { font-size: 2rem; color: var(--primary); display: block; }
.stat span { color: var(--text-muted); font-size: 0.9rem; }

.mq { background: #edf2f7; padding: 10px; border-radius: 6px; overflow: hidden; white-space: nowrap; }
.mq div { display: inline-block; animation: marquee 25s linear infinite; }
.mq span { margin-right: 40px; font-weight: 600; color: #2d3748; }
@keyframes marquee { 0% { transform: translateX(100%); } 100% { transform: translateX(-100%); } }

/* Sections & Cards */
.sec { margin-top: 50px; }
.ct { text-align: center; margin-bottom: 30px; }
.kk { color: var(--primary); font-weight: 700; text-transform: uppercase; font-size: 0.85rem; letter-spacing: 1px; }
.ct h2 { font-size: 2rem; color: var(--text-dark); margin-top: 4px; }

.grid { display: grid; gap: 24px; }
.g2 { grid-template-columns: repeat(auto-fit, minmax(320px, 1fr)); }
.g4 { grid-template-columns: repeat(auto-fit, minmax(220px, 1fr)); }
.why { grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); }

.card { background: var(--bg-card); padding: 24px; border-radius: 8px; box-shadow: 0 2px 4px rgba(0,0,0,0.04); border: 1px solid #e2e8f0; }
.card .ico { font-size: 2.5rem; margin-bottom: 12px; }
.card h3 { font-size: 1.25rem; color: var(--primary); margin-bottom: 8px; }
.card p { color: #4a5568; font-size: 0.95rem; }

.pc { text-align: center; padding: 0; overflow: hidden; }
.pc .top { background: #e6fffa; padding: 30px; font-size: 3.5rem; }
.pc .in { padding: 20px; }

.ns { display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 16px; }

/* Call to Action Banner */
.cta { background: var(--primary); color: #ffffff; padding: 40px; border-radius: 12px; margin-top: 50px; display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 20px; }
.cta h2 { font-size: 1.8rem; margin-bottom: 8px; }
.cta p { opacity: 0.9; }

/* Information Boxes & Notifications */
.box { background: #ffffff; padding: 30px; border-radius: 8px; border: 1px solid #cbd5e0; box-shadow: 0 4px 6px rgba(0,0,0,0.02); }
.note { background: #ebf8ff; border-left: 4px solid #3182ce; padding: 12px 16px; border-radius: 4px; margin: 12px 0; font-size: 0.95rem; }
.note.warn { background: #fff5f5; border-color: #e53e3e; color: #9b2c2c; }

.dist { display: flex; flex-wrap: wrap; gap: 8px; margin-top: 12px; }
.dist span { background: #e2e8f0; padding: 4px 10px; border-radius: 4px; font-size: 0.85rem; font-weight: 600; color: #4a5568; }

/* Forms */
form { display: grid; gap: 16px; }
.r { display: grid; grid-template-columns: 1fr 1fr; gap: 16px; }
label { display: block; font-weight: 600; margin-bottom: 6px; font-size: 0.9rem; }
input, select, textarea { width: 100%; padding: 10px 14px; border: 1px solid #cbd5e0; border-radius: 6px; font-size: 0.95rem; font-family: inherit; }
input:focus, select:focus, textarea:focus { outline: none; border-color: var(--primary); box-shadow: 0 0 0 3px rgba(7,91,59,0.15); }
textarea { height: 100px; resize: vertical; }

.ok { background: #c6f6d5; border: 1px solid #38a169; color: #22543d; padding: 16px; border-radius: 6px; margin-top: 16px; }
.ok .id { font-weight: 800; font-size: 1.1rem; }

/* Floating Action Buttons */
.fab { position: fixed; bottom: 20px; right: 20px; display: flex; flex-direction: column; gap: 12px; z-index: 999; }
.fab a { width: 50px; height: 50px; border-radius: 50%; display: flex; align-items: center; justify-content: center; color: #ffffff; text-decoration: none; font-size: 1.5rem; box-shadow: 0 4px 10px rgba(0,0,0,0.2); }

/* Footer */
footer { background: #1a202c; color: #a0aec0; padding: 30px 0; margin-top: 60px; font-size: 0.9rem; border-top: 1px solid #2d3748; }

/* Responsive adjustments */
@media (max-width: 768px) {
  .hg { grid-template-columns: 1fr; text-align: center; }
  .r { grid-template-columns: 1fr; }
  header .header-inner { flex-direction: column; height: auto; padding: 10px 0; gap: 10px; }
  nav { flex-wrap: wrap; justify-content: center; gap: 10px; }
  .cta { flex-direction: column; text-align: center; }
}
</style>
</head>
<body>

<header>
  <div class="w header-inner">
    <div class="logo-container" onclick="go('home')">
      <img src="data:image/png;base64,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/+8/4/L8tffcHP257b4fWsqN2wK8f0zU3/oSrbvkF961eh6iN/8Y0iJgwoToxv20T9aY1l/T7559+jX7z9dfrmx+8g2uvvZpbHl7Bym0b2TDQz0A1Z5QcKk5b7l/jvf/u+47r1+/f5b3310//rV7++sfoz59wAX/2zFfi8hpxu8c2v//b4V/f9H2+/YsbuWPp8z838/d62QvO5A+e8gK6u7uJx+/590O5vj54V9//Vvd74fP1y59/q9748z/ww59/m7uWPc4Tq5ewdmADo27AOMHlHqM+Yt5bT8Y46kM//dG11/Ldf/+j/vefP67Xb/oZ1918NVffcRN/XP4wa9YvZ7g6jHOeEtsf6sXN9//Ff/u2d//28T/o1//n+frixSfxJ19/G2XbxH57+Hq//w/f+rveetMvufKxX+L/8qV36fPPfzrvfeY5WKu40Pfy8N+1u/343w1//xP/Tj9z7XdZ+fgq7lh09s539+V/14uefgl/du6luA6R7T8e1Wv86+b812+u0qve9359aN167lvxKD+66d9ZseoxVq/bwMDwKM7mOOMoxgq6zefm5x/6k56/1u957hL/X361vNn7z9d0D/S3z139H+X5/2+e669v/4k+a+nTeOGLL9FnnHYa8zpnkeo3G10s6N8gRj4q49Uar9a896D76gO895W/b2l6l2t9z4qH+PYt3+eB1fdx70N3s2n4CYaqGwnx746K33+9i/f+c91f6y/c8gvd+3/8u9z3+P2s2LCCe1csZvmaZawb3MSwqxF4f41iP/+kI++jN9q8j7wI5Y6k4Oq0g9W0/36b8e2V/r+787P6gW/8K/9z2df4t6u+yrV3/4Jly9ewasNahoaGqdfGqdVreK8ROf6N5j8Vvf+7//O/v/kL3fv3y57+19/x/T/840/V4/e/VB9bvZL7lv+J1Zv6WL1pNWsGN7B5fAP+4zWf5V+x6v17/W0113f8+t3Vd2/jF//9Vf7lh/9aX/3A/771+t8/+67HlzzM46uWsXLjWjZsWse6jYMMDY0w7jLq1hF1Z8Mfbkznr+2sVjV+fN/nve/a64f/9859f51veH+v9T+265+v8X9l++f13674N/1/P/gNly6dxeu/9k6qZQdxe6nFv/U46L1q2p8lCev+118r127m3uUPcd/Khy0W2i+2f3g0d41iB7y+/d4fv+e/n7j/H6857vXn//l0xSt0xct59e+/2Gff9J5e4e7eY42/1z750Adf/9n/9z09vG4dDy5bygNLlzDQ18/G8e2uT89Y22/3t+/0N7h4/2O8f+/q9f7zW3a/24fvf/5zW+fX1l9/9633/K+rvvL3f3ntF/m+y67g2e99GW1j/3c38+d1lT5w2Zd4aPXTrNy0ivXDY6wf3sC6oWHG6vWd6uL33z86895bT+y4lP1v1Wq7y+f3N73z+V7r3z/Xv+0Wv9Z3+Xn+O2v+uW71f3v9x/0/t+999+/pL+y5rN88u/X8c/r/+0/u9g9uud93X3T1t3+Vn1z2Bf37b1zNl9+x0m8aXvN311x90S6/7p9vvdJ7/j3722a/bvd8j+16/F+2f/94+z6x9v/Hq65bZ/713vutTvf6Wq036N30P0X/6yFv+/D/3vP9+a7/jG5/1t+X2uN+1f/r25v+5937wFv/1/O11jF56rKvf5lfs+x33ffZz/9a06/v+tHnv+2Lz++6z9f7/mF/W/3f9N/Lbb6xWw1e9x8v9Z99/91u12+n6+N/3v+N+9/91vf5+u2vf0ev+d2V/6wL279x//5z1f463+x/W9u7vHj/3H92/9//33//0/q3f/+5/1pT89//4Gfd+53X/72r/vf7H//233f++93v2v711r+/Sff++vf0e3/u+/7+ff6869ve5+e+2//6/r559+369/v9/291n/4p3v9qj4d2f83/V87/0/zW2/ze3733lff9v978r7/9/Vd95+fXvP3H48z9/3/8D5L0l4pBv/EIAAAAASUVORK5CYII=" alt="Green Super Agro Logo">
      <div class="logo-text">GREEN SUPER AGRO<small>POULTRY & FISH FEEDS LTD.</small></div>
    </div>
    <nav>
      <a onclick="go('home')">হোম</a>
      <a onclick="go('about')">আমাদের সম্পর্কে</a>
      <a onclick="go('products')">পণ্যসমূহ</a>
      <a onclick="go('depot')">ডিপো ও ডিলার</a>
      <a onclick="go('calc')">ক্যালকুলেটর</a>
      <a onclick="go('order')">অনলাইন অর্ডার</a>
      <a onclick="go('contact')">যোগাযোগ</a>
    </nav>
    <button onclick="go('order')">অর্ডার করুন</button>
  </div>
</header>

<!-- HOME PAGE -->
<div id="home" class="pg on">
  <section class="hero">
    <div class="w hg">
      <div>
        <span class="tag">প্রোফাইল টেস্ট সংস্করণ</span>
        <h1>মাছ, পোল্ট্রি ও গবাদিপশুর <em>উৎকৃষ্ট ও সুষম খাদ্য</em></h1>
        <div class="sub">গ্রীন সুপার এগ্রো – আপনার খামারের বিশ্বস্ত সঙ্গী</div>
        <p>আধুনিক প্রযুক্তি, সঠিক পুষ্টিমান ও গুণগত কাঁচামাল দিয়ে তৈরি আমাদের প্রতিটি ফিড। খুলনা মাস্টার ডিপো থেকে দ্রুততম সময়ে সারাদেশে সরবরাহ।</p>
        <div style="display:flex;gap:10px;flex-wrap:wrap;margin-top:20px">
          <button onclick="go('order')">অনলাইন অর্ডার করুন</button>
          <button class="btn l" onclick="go('depot')">ডিলার ও ডিপো তালিকা</button>
        </div>
      </div>
      <div class="stack">
        <div><b>১০০%</b>মানসম্পন্ন পুষ্টি</div>
        <div><b>৬৪</b>জেলায় সরবরাহ</div>
        <div><b>২৪/৭</b>কাস্টমার সাপোর্ট</div>
        <div><b>১০০+</b>সন্তুষ্ট খামারি</div>
      </div>
    </div>
    <svg class="wave" viewBox="0 0 1440 60" preserveAspectRatio="none"><path fill="#ffffff" d="M0,32L80,42.7C160,53,320,75,480,74.7C640,75,800,53,960,42.7C1120,32,1280,32,1360,32L1440,32L1440,100L1360,100C1280,100,1120,100,960,100C800,100,640,100,480,100C320,100,160,100,80,100L0,100Z"></path></svg>
  </section>

  <div class="w">
    <div class="stats">
      <div class="stat"><b>১০০%</b><span>প্রাকৃতিক ও নিরাপদ</span></div>
      <div class="stat"><b>৪+</b><span>ফিড ক্যাটাগরি</span></div>
      <div class="stat"><b>৮</b><span>বিভাগে ডিলার সুযোগ</span></div>
      <div class="stat"><b>২৪h</b><span>দ্রুত ডেলিভারি সাপোর্ট</span></div>
    </div>

    <div class="mq" style="margin-top:24px">
      <div>
        <span>🌾 গ্রীন সুপার এগ্রো ডিলার নিয়োগ চলছে!</span>
        <span>🐟 ফ্লোটিং ও সিংকিং ফিশ ফিডে বিশেষ ছাড়!</span>
        <span>🐓 ব্রয়লার, লেয়ার ও সোনালী পোল্ট্রি ফিড উপলব্ধ।</span>
        <span>🐄 খামারের দুধ ও মাংস বৃদ্ধিতে ক্যাটেল ফিড।</span>
        <span>🌾 গ্রীন সুপার এগ্রো ডিলার নিয়োগ চলছে!</span>
        <span>🐟 ফ্লোটিং ও সিংকিং ফিশ ফিডে বিশেষ ছাড়!</span>
      </div>
    </div>

    <section class="sec">
      <div class="ct">
        <div class="kk">কেন গ্রীন সুপার এগ্রো?</div>
        <h2>খামারির সমৃদ্ধিই আমাদের লক্ষ্য</h2>
        <p>সঠিক খাদ্য নির্বাচন খামারের লাভের মূল চাবিকাঠি। আমরা নিশ্চিত করি সেরা পুষ্টি ও মান।</p>
      </div>
      <div class="grid why">
        <div class="card">
          <div class="ico">🧪</div>
          <h3>সঠিক প্রোটিন ও পুষ্টি</h3>
          <p>প্রতিটি ফিড পরীক্ষিত পুষ্টিমান ও প্রোটিন পার্সেন্টেজ সমৃদ্ধ।</p>
        </div>
        <div class="card">
          <div class="ico">⚡</div>
          <h3>দ্রুত বৃদ্ধি ও সুস্থতা</h3>
          <p>সহজে হজমযোগ্য এবং মাছ ও পোল্ট্রির দ্রুত দৈহিক বৃদ্ধি নিশ্চিত করে।</p>
        </div>
        <div class="card">
          <div class="ico">🚚</div>
          <h3>সময়মতো ডেলিভারি</h3>
          <p>খুলনা মাস্টার ডিপো থেকে জেলা ও উপজেলা পর্যায়ে নিয়মিত সরবরাহ।</p>
        </div>
      </div>
    </section>

    <section class="sec">
      <div class="ct">
        <div class="kk">আমাদের ক্যাটাগরি</div>
        <h2>উন্নত মানের সকল ফিড</h2>
      </div>
      <div class="grid g4">
        <div class="card pc">
          <div class="top">🐟</div>
          <div class="in">
            <h3>মাছের খাদ্য</h3>
            <p>ফ্লোটিং, সিংকিং, কার্প, নার্সারি ও পাঙ্গাস ফিড।</p>
            <button class="btn l" onclick="go('products')" style="width:100%;margin-top:8px">বিস্তারিত</button>
          </div>
        </div>
        <div class="card pc">
          <div class="top">🐓</div>
          <div class="in">
            <h3>পোল্ট্রি খাদ্য</h3>
            <p>স্টার্টার, গ্রোয়ার, ফিনিশার ও লেয়ার ফিড।</p>
            <button class="btn l" onclick="go('products')" style="width:100%;margin-top:8px">বিস্তারিত</button>
          </div>
        </div>
        <div class="card pc">
          <div class="top">🐄</div>
          <div class="in">
            <h3>গবাদিপশুর খাদ্য</h3>
            <p>দুগ্ধজাত গাভী ও মোটাতাজাকরণ ক্যাটেল ফিড।</p>
            <button class="btn l" onclick="go('products')" style="width:100%;margin-top:8px">বিস্তারিত</button>
          </div>
        </div>
        <div class="card pc">
          <div class="top">🦐</div>
          <div class="in">
            <h3>চিংড়ি খাদ্য</h3>
            <p>গলদা ও বাগদা চিংড়ির জন্য বিশেষায়িত ফিড।</p>
            <button class="btn l" onclick="go('products')" style="width:100%;margin-top:8px">বিস্তারিত</button>
          </div>
        </div>
      </div>
    </section>

    <section class="sec">
      <div class="ct">
        <div class="kk">ডিলার সুবিধা</div>
        <h2>সহজে ডিলারশিপ নিন ৩ ধাপে</h2>
      </div>
      <div class="ns">
        <div class="card">
          <h3>আবেদন করুন</h3>
          <p>অনলাইন ফর্ম বা ফোনে যোগাযোগ করে প্রাথমিক আবেদন জমা দিন।</p>
        </div>
        <div class="card">
          <h3>মাস্টার ডিপো যাচাই</h3>
          <p>খুলনা আঞ্চলিক মাস্টার ডিপো থেকে এলাকা ও শর্তাবলী যাচাই।</p>
        </div>
        <div class="card">
          <h3>পণ্য সরবরাহ শুরু</h3>
          <p>চুক্তি সম্পাদন ও প্রথম অর্ডার নিশ্চিত করে ব্যবসা শুরু করুন।</p>
        </div>
      </div>
    </section>

    <div class="cta">
      <div>
        <h2>আপনার এলাকায় ডিলারশিপ নিতে চান?</h2>
        <p>গ্রীন সুপার এগ্রো পরিবারের অংশ হন এবং আপনার অঞ্চলে খামারিদের সেরা খাদ্য সরবরাহ করুন।</p>
      </div>
      <div>
        <button onclick="go('depot')">ডিলারশিপ আবেদন</button>
        <button class="btn l" onclick="go('contact')">কল করুন</button>
      </div>
    </div>
  </div>
</div>

<!-- ABOUT PAGE -->
<div id="about" class="pg">
  <div class="w">
    <h1>আমাদের সম্পর্কে</h1>
    <div class="sub">কোম্পানি প্রোফাইল ও আমাদের অঙ্গীকার</div>
    <div class="grid g2" style="margin-top:20px">
      <div class="card">
        <h2>Green Super Agro Poultry & Fish Feeds Ltd.</h2>
        <p>গ্রীন সুপার এগ্রো একটি আধুনিক ও মানসম্পন্ন পোল্ট্রি, ফিশ, ক্যাটেল ও শ্রিম্প ফিড প্রস্তুতকারক ও বাজারজাতকারী প্রতিষ্ঠান। আমরা খামারিদের লাভজনক খামার পরিচালনায় গুণগত মানসম্পন্ন খাদ্য সরবরাহ করতে প্রতিশ্রুতিবদ্ধ।</p>
        <div class="note"><b>আমাদের লক্ষ্য:</b> পুষ্টিকর খাদ্য সরবরাহের মাধ্যমে বাংলাদেশের কৃষি ও খামার খাতকে আরও সমৃদ্ধ করা।</div>
        <div class="note"><b>আমাদের ভিশন:</b> প্রতিটি উপজেলায় বিশ্বস্ত ডিলার নেটওয়ার্কের মাধ্যমে খামারির দ্বারে উন্নত ফিড পৌঁছানো।</div>
      </div>
      <div class="box">
        <h3>আমাদের মূল সুবিধাসমূহ</h3>
        <ul style="margin-left:20px;margin-top:10px;line-height:1.8">
          <li>অত্যাধুনিক প্রযুক্তিতে প্রস্তুত সুষম খাদ্য</li>
          <li>সঠিক হজমক্ষমতা ও এফসিআর (FCR) নিয়ন্ত্রণ</li>
          <li>দক্ষ পুষ্টিবিদ দ্বারা ফর্মুলেশন</li>
          <li>খুলনা মাস্টার ডিপোর অধীনে খুলনা বিভাগের শক্তিশালী কভারেজ</li>
          <li>সারাদেশে ডিলার ও খামারি সাপোর্ট</li>
        </ul>
      </div>
    </div>
  </div>
</div>

<!-- PRODUCTS PAGE -->
<div id="products" class="pg">
  <div class="w">
    <h1>পণ্যসমূহ (Feed Products)</h1>
    <p>আমাদের উন্নতমানের ফিড তালিকা ও বিবরণ:</p>
    <div class="grid g2" style="margin-top:16px">
      <div class="card">
        <h3>১. মৎস্য খাদ্য (Fish Feed)</h3>
        <p>কার্প, পাঙ্গাস, তেলাপিয়া, কৈ ও শিং মাছের জন্য ফ্লোটিং ও সিংকিং ফিড।</p>
        <ul style="margin-left:20px;margin-top:8px">
          <li><b>স্টার্টার / নার্সারি:</b> প্রোটিন ৩৫%-৪০%</li>
          <li><b>গ্রোয়ার:</b> প্রোটিন ২৮%-৩২%</li>
          <li><b>ফিনিশার:</b> প্রোটিন ২৬%-২৮%</li>
        </ul>
        <div class="note">বৈশিষ্ট্য: পানিতে দ্রুত গলে যায় না, মাছের দ্রুত বৃদ্ধি নিশ্চিত করে।</div>
      </div>
      <div class="card">
        <h3>২. পোল্ট্রি খাদ্য (Poultry Feed)</h3>
        <p>ব্রয়লার, লেয়ার, সোনালী ও দেশি মুরগির ফিড।</p>
        <ul style="margin-left:20px;margin-top:8px">
          <li><b>ব্রয়লার স্টার্টার ও ফিনিশার</b></li>
          <li><b>সোনালী স্টার্টার ও গ্রোয়ার</b></li>
          <li><b>লেয়ার লেয়ার-১ ও লেয়ার-২</b></li>
        </ul>
        <div class="note">বৈশিষ্ট্য: রোগ প্রতিরোধ ক্ষমতা বৃদ্ধি করে এবং ডিম/মাংস উৎপাদন বাড়ায়।</div>
      </div>
      <div class="card">
        <h3>৩. গবাদিপশুর খাদ্য (Cattle Feed)</h3>
        <p>দুগ্ধজাত গাভী ও ষাঁড় মোটাতাজাকরণ ফিড।</p>
        <ul style="margin-left:20px;margin-top:8px">
          <li><b>মিল্ক প্লাস:</b> দুধের পরিমাণ ও ফ্যাট বাড়ায়</li>
          <li><b>বুল গ্রোয়ার:</b> দ্রুত মাংস বৃদ্ধিতে সহায়ক</li>
        </ul>
      </div>
      <div class="card">
        <h3>৪. চিংড়ি খাদ্য (Shrimp Feed)</h3>
        <p>গলদা ও বাগদা চিংড়ির উচ্চ প্রোটিনসমৃদ্ধ খাদ্য।</p>
        <ul style="margin-left:20px;margin-top:8px">
          <li>উচ্চমানের প্রোটিন ও মিনারেল সমৃদ্ধ</li>
          <li>পানির তলদেশে দীর্ঘস্থায়ী ও সুস্বাদু</li>
        </ul>
      </div>
    </div>
  </div>
</div>

<!-- DEPOT & DEALER PAGE -->
<div id="depot" class="pg">
  <div class="w">
    <h1>খুলনা মাস্টার ডিপো ও ডিলারশিপ</h1>
    <div class="sub">Khulna Master Depot & Dealer Network</div>
    <div class="note warn"><b>বিশেষ নোটিশ:</b> খুলনা বিভাগসহ ৬৪ জেলায় নতুন ডিলার নিয়োগ চলছে। আগ্রহীরা অবিলম্বে আবেদন করুন।</div>
    <div class="grid g2" style="margin-top:16px">
      <div class="card">
        <h3>খুলনা মাস্টার ডিপো তথ্য</h3>
        <p><b>ঠিকানা:</b> খুলনা আঞ্চলিক মাস্টার ডিপো, যশোর-খুলনা হাইওয়ে, খুলনা।</p>
        <p><b>দায়িত্বপ্রাপ্ত কর্মকর্তা:</b> সানবীন ইসলাম আরাফাত (অর্গানাইজিং সেক্রেটারি / লজিস্টিকস ইনচার্জ)</p>
        <p><b>যোগাযোগ:</b> +৮৮০১৯২৩০NzEyNA / +৮৮০২৪Nzg4NTA0MzQ</p>
        <p><b>ইমেইল:</b> saykatislam507@gmail.com</p>
      </div>
      <div class="card">
        <h3>খুলনা বিভাগের আওতাধীন জেলাসমূহ</h3>
        <div class="dist">
          <span>যশোর</span><span>খুলনা</span><span>সাতক্ষীরা</span><span>বাগেরহাট</span><span>ঝিনাইদহ</span>
          <span>মাগুরা</span><span>নড়াইল</span><span>কুষ্টিয়া</span><span>চুয়াডাঙ্গা</span><span>মেহেরপুর</span>
        </div>
        <p style="margin-top:10px">এছাড়াও ঢাকা, চট্টগ্রাম, রাজশাহী, রংপুর, বরিশাল, সিলেট ও ময়মনসিংহ বিভাগের সকল জেলায় সরবরাহ সুবিধা রয়েছে।</p>
      </div>
    </div>

    <div class="box" style="margin-top:20px">
      <h2>ডিলারশিপ আবেদন ফর্ম</h2>
      <form id="dealerForm" onsubmit="submitDealer(event)">
        <div class="r">
          <div><label>আবেদনকারীর নাম *</label><input required id="d_name" placeholder="আপনার নাম"></div>
          <div><label>মোবাইল নম্বর *</label><input required id="d_phone" placeholder="০1XXXXXXXXX"></div>
        </div>
        <div class="r">
          <div><label>জেলা *</label><input required id="d_dist" placeholder="যেমন: যশোর"></div>
          <div><label>উপজেলা / থানা *</label><input required id="d_sub" placeholder="যেমন: সদর"></div>
        </div>
        <div><label>প্রতিষ্ঠানের নাম (যদি থাকে)</label><input id="d_shop" placeholder="মেসার্স ... ট্রেডার্স"></div>
        <div><label>অভিজ্ঞতা ও মন্তব্য</label><textarea id="d_msg" placeholder="ব্যবসার বিবরণ বা আপনার মন্তব্য..."></textarea></div>
        <button type="submit">আবেদন জমা দিন</button>
      </form>
      <div id="d_res"></div>
    </div>
  </div>
</div>

<!-- CALCULATOR PAGE -->
<div id="calc" class="pg">
  <div class="w">
    <h1>খামার ফিড ও খরচ ক্যালকুলেটর</h1>
    <p>আপনার পুকুর বা খামারের ফিড প্রয়োজন ও আনুমানিক খরচ হিসাব করুন:</p>
    <div class="grid g2" style="margin-top:16px">
      <form id="calcForm" onsubmit="calcFeed(event)">
        <h3>হিসাব করুন</h3>
        <div>
          <label>খামারের ধরন</label>
          <select id="c_type">
            <option value="fish">মাছের খামার (Fish)</option>
            <option value="poultry">পোল্ট্রি (Poultry)</option>
            <option value="cattle">গবাদিপশু (Cattle)</option>
          </select>
        </div>
        <div><label>সংখ্যা / পরিমাণ (মাছ/মুরগি/গরুর সংখ্যা)</label><input type="number" id="c_count" required value="1000"></div>
        <div><label>গড় ওজন (গ্রাম এ - যেমন ৫০g বা ১৫০০g)</label><input type="number" id="c_weight" required value="200"></div>
        <div><label>ফিড মূল্য (টাকা / কেজি - আনুমানিক)</label><input type="number" id="c_price" required value="65"></div>
        <button type="submit">হিসাব করুন</button>
      </form>

      <div class="box">
        <h3>হিসাবের ফলাফল</h3>
        <div id="c_out">
          <p>বামপাশের ফর্মে তথ্য দিয়ে 'হিসাব করুন' বাটনে ক্লিক করুন।</p>
        </div>
      </div>
    </div>
  </div>
</div>

<!-- ONLINE ORDER PAGE -->
<div id="order" class="pg">
  <div class="w">
    <h1>অনলাইন ফিড অর্ডার (Test Version)</h1>
    <p>ডিলার ও খামারিদের জন্য অনলাইন অর্ডার সুবিধা:</p>
    <form id="orderForm" onsubmit="submitOrder(event)">
      <div class="r">
        <div><label>ক্রেতার নাম *</label><input required id="o_name" placeholder="নাম"></div>
        <div><label>মোবাইল নম্বর *</label><input required id="o_phone" placeholder="০1XXXXXXXXX"></div>
      </div>
      <div class="r">
        <div><label>জেলা *</label><input required id="o_dist" placeholder="জেলা"></div>
        <div><label>ডেলিভারি ঠিকানা *</label><input required id="o_addr" placeholder="পূর্ণাঙ্গ ঠিকানা"></div>
      </div>
      <div class="r">
        <div>
          <label>ফিডের ধরন *</label>
          <select id="o_feed">
            <option>মাছের ফ্লোটিং ফিড</option>
            <option>মাছের সিংকিং ফিড</option>
            <option>ব্রয়লার পোল্ট্রি ফিড</option>
            <option>সোনালী পোল্ট্রি ফিড</option>
            <option>লেয়ার পোল্ট্রি ফিড</option>
            <option>ক্যাটেল / গাভী ফিড</option>
            <option>চিংড়ি ফিড</option>
          </select>
        </div>
        <div><label>পরিমাণ (বস্তা - ৫০ কেজি/বস্তা) *</label><input type="number" min="1" required id="o_qty" value="10"></div>
      </div>
      <div><label>বিশেষ নির্দেশনাবলী (যদি থাকে)</label><textarea id="o_note" placeholder="ডেলিভারি সংক্রান্ত নির্দেশনা..."></textarea></div>
      <button type="submit">অর্ডার নিশ্চিত করুন (Test Submit)</button>
    </form>
    <div id="o_res"></div>
  </div>
</div>

<!-- CONTACT PAGE -->
<div id="contact" class="pg">
  <div class="w">
    <h1>যোগাযোগ করুন</h1>
    <div class="grid g2" style="margin-top:16px">
      <div class="card">
        <h2>হেড অফিস ও কর্পোরেট ঠিকানা</h2>
        <p><b>Green Super Agro Poultry & Fish Feeds Ltd.</b></p>
        <p>দিলু রোড / দিলারা টাওয়ার, ৮/সি, ৭৭ বীর উত্তম সিআর দত্ত রোড, হাতিরপুল, ঢাকা-১২১৫।</p>
        <hr style="margin:12px 0;border:0;border-top:1px solid #e2e8f0">
        <p><b>খুলনা আঞ্চলিক মাস্টার ডিপো:</b><br>যশোর-খুলনা মহাসড়ক, খুলনা।</p>
        <p><b>ফোন:</b> +৮৮০১৯২৩০NzEyNA, +৮৮০২৪Nzg4NTA0MzQ</p>
        <p><b>ইমেইল:</b> saykatislam507@gmail.com</p>
        <p><b>ওয়েবসাইট:</b> https://greensuperagro.saykatislam41.workers.dev/</p>
      </div>
      <div class="card">
        <h2>জরুরি প্রশ্ন (FAQ)</h2>
        <details style="margin-bottom:10px">
          <summary style="font-weight:600;cursor:pointer">কিভাবে ডিলারশিপ নেওয়া যাবে?</summary>
          <p style="margin-top:6px">ডিপো ফর্মে আবেদন করুন অথবা সরাসরি আমাদের খুলনা ডিপো ইনচার্জের সাথে ফোনে যোগাযোগ করুন।</p>
        </details>
        <details style="margin-bottom:10px">
          <summary style="font-weight:600;cursor:pointer">সর্বনিম্ন কত বস্তা অর্ডার করা যায়?</summary>
          <p style="margin-top:6px">খামারিদের জন্য সর্বনিম্ন ১০ বস্তা এবং ডিলারদের জন্য ট্রাক লোড সরবরাহ প্রযোজ্য।</p>
        </details>
        <details style="margin-bottom:10px">
          <summary style="font-weight:600;cursor:pointer">ডেলিভারি সময় কতদিন?</summary>
          <p style="margin-top:6px">খুলনা বিভাগে ২৪-৪৮ ঘণ্টার মধ্যে এবং দেশের অন্যান্য অঞ্চলে ২-৩ দিনের মধ্যে।</p>
        </details>
      </div>
    </div>
  </div>
</div>

<!-- FLOATING ACTION BUTTONS -->
<div class="fab">
  <a style="background:#25d366" href="https://wa.me/8801923072124" target="_blank" title="WhatsApp">💬</a>
  <a style="background:#075b3b" href="tel:+8801923072124" title="Call">📞</a>
</div>

<!-- FOOTER -->
<footer>
  <div class="w" style="display:flex;justify-content:space-between;flex-wrap:wrap;gap:10px">
    <div>© ২০২৬ Green Super Agro Poultry & Fish Feeds Ltd. সর্বস্বত্ব সংরক্ষিত।</div>
    <div>খুলনা মাস্টার ডিপো আঞ্চলিক নেটওয়ার্ক | টেস্ট ভার্সন</div>
  </div>
</footer>

<script>
function go(id){
  document.querySelectorAll('.pg').forEach(p => p.classList.remove('on'));
  const el = document.getElementById(id);
  if(el){
    el.classList.add('on');
    window.scrollTo(0, 0);
  }
}

function submitDealer(e){
  e.preventDefault();
  const name = document.getElementById('d_name').value;
  const phone = document.getElementById('d_phone').value;
  const dist = document.getElementById('d_dist').value;
  const id = 'GSA-D-' + Math.floor(1000 + Math.random() * 9000);
  document.getElementById('d_res').innerHTML = \`<div class="ok">✅ আপনার ডিলারশিপ আবেদন সফলভাবে জমা হয়েছে!<br><span class="id">ট্র্যাকিং আইডি: \${id}</span><br>আবেদনকারী: \${name} (\${dist})<br>আমাদের খুলনা মাস্টার ডিপো থেকে শীঘ্রই \${phone} নম্বরে যোগাযোগ করা হবে।</div>\`;
  document.getElementById('dealerForm').reset();
}

function submitOrder(e){
  e.preventDefault();
  const name = document.getElementById('o_name').value;
  const feed = document.getElementById('o_feed').value;
  const qty = document.getElementById('o_qty').value;
  const id = 'GSA-ORD-' + Math.floor(10000 + Math.random() * 90000);
  document.getElementById('o_res').innerHTML = \`<div class="ok">🎉 অর্ডার সফলভাবে প্লেস হয়েছে (টেস্টভার্সন)!<br><span class="id">অর্ডার আইডি: \${id}</span><br>পণ্য: \${feed} (\${qty} বস্তা)<br>ক্রেতা: \${name}<br>ধন্যবাদ! আমাদের প্রতিনিধি আপনার সাথে দ্রুত যোগাযোগ করবে।</div>\`;
  document.getElementById('orderForm').reset();
}

function calcFeed(e){
  e.preventDefault();
  const type = document.getElementById('c_type').value;
  const count = parseFloat(document.getElementById('c_count').value) || 0;
  const weight = parseFloat(document.getElementById('c_weight').value) || 0;
  const price = parseFloat(document.getElementById('c_price').value) || 0;
  let dailyKg = 0;
  if(type === 'fish') dailyKg = (count * (weight / 1000)) * 0.03;
  else if(type === 'poultry') dailyKg = (count * weight) / 1000;
  else dailyKg = count * 8;
  const dailyCost = dailyKg * price;
  const bags = Math.ceil(dailyKg * 30 / 50);
  document.getElementById('c_out').innerHTML = \`<div class="note"><b>দৈনিক খাদ্য প্রয়োজন:</b> \${dailyKg.toFixed(2)} কেজি<br><b>দৈনিক খাদ্য খরচ:</b> ৳\${dailyCost.toFixed(2)} টাকা<br><b>মাসিক খাদ্য প্রয়োজন (আনুমানিক):</b> \${(dailyKg * 30).toFixed(0)} কেজি (\${bags} বস্তা)<br><b>মাসিক আনুমানিক খরচ:</b> ৳\${(dailyCost * 30).toFixed(0)} টাকা</div>\`;
}
</script>
</body>
</html>`;

export default {
  async fetch(request, env, ctx) {
    const url = new URL(request.url);

    if (request.method === "GET" || request.method === "HEAD") {
      return new Response(HTML_CONTENT, {
        status: 200,
        headers: {
          "Content-Type": "text/html; charset=utf-8",
          "Cache-Control": "public, max-age=3600",
          "X-Frame-Options": "DENY",
          "X-Content-Type-Options": "nosniff",
          "Referrer-Policy": "strict-origin-when-cross-origin"
        }
      });
    }

    return new Response("Method Not Allowed", {
      status: 405,
      headers: {
        "Content-Type": "text/plain; charset=utf-8",
        "Allow": "GET, HEAD"
      }
    });
  }
};