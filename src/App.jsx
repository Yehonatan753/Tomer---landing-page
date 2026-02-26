import React, { useEffect } from 'react';
import './index.css';

function App() {
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, { threshold: 0.15, rootMargin: '0px 0px -40px 0px' });
    
    document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
    
    return () => observer.disconnect();
  }, []);

  return (
    <>


    <!-- ג•ג•ג• HERO ג•ג•ג• -->
    <section className="hero">
        <img src='data:image/png;base64,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' alt='׳×׳•׳׳¨ ׳₪׳¨׳™׳“׳׳' className='hero-logo' />
        <span className="badge">נ”¬ Body MetRiX Proג„¢ ג€” ׳׳¢׳¨׳›׳× ׳׳“׳™׳“׳” ׳׳§׳¦׳•׳¢׳™׳×</span>
        <h1>׳’׳׳” ׳‘׳“׳™׳•׳§ <span>׳׳™׳₪׳” ׳׳×׳” ׳¢׳•׳׳“</span><br />׳×׳•׳ 5 ׳“׳§׳•׳× ׳‘׳׳‘׳“</h1>
        <p className="hero-sub">׳׳“׳™׳“׳× ׳”׳¨׳›׳‘ ׳’׳•׳£ ׳׳§׳¦׳•׳¢׳™׳× ׳¢׳ ׳“׳•׳— ׳׳•׳×׳׳ ׳׳™׳©׳™׳×: ׳׳—׳•׳–׳™ ׳©׳•׳׳, ׳׳¡׳× ׳©׳¨׳™׳¨, ׳”׳™׳§׳₪׳™׳, ׳”׳©׳•׳•׳׳” ׳׳¡׳₪׳¨׳•׳× ג€“ ׳•׳”׳׳׳¦׳•׳×. ׳‘׳׳™ ׳ ׳™׳—׳•׳©׳™׳.</p>
        <a href="#pricing" className="hero-cta">׳©׳¨׳™׳™׳ ׳׳× ׳”׳׳§׳•׳ ׳©׳׳ ג†</a>
        <div className="hero-stats">
            <div className="hero-stat"><div className="num">22</div><div className="label">׳©׳ ׳•׳× ׳ ׳™׳¡׳™׳•׳</div></div>
            <div className="hero-stat"><div className="num">5</div><div className="label">׳“׳§׳•׳× ׳׳׳“׳™׳“׳”</div></div>
            <div className="hero-stat"><div className="num">ג‚×130</div><div className="label">׳׳₪׳’׳™׳©׳”</div></div>
        </div>
        <div className="scroll-hint">ג–¼ ׳’׳׳•׳ ׳׳׳˜׳” ׳׳₪׳¨׳˜׳™׳</div>
    </section>

    <!-- ג•ג•ג• STORY: "׳”׳׳©׳§׳ ׳׳©׳§׳¨" (mirrors Email 2) ג•ג•ג• -->
    <section className="story">
        <div className="container">
            <div className="story-inner reveal">
                <h2>׳”׳׳©׳§׳ <span>׳׳ ׳׳¡׳₪׳¨</span> ׳׳× ׳›׳ ׳”׳¡׳™׳₪׳•׳¨</h2>
                <p className="lead">
                    "׳¢׳׳™׳×׳™ 4 ׳§׳™׳׳•, ׳”׳›׳ ׳”׳׳." / "׳׳ ׳™ ׳‘׳׳•׳×׳• ׳׳©׳§׳, ׳›׳ ׳¨׳׳” ׳©׳•׳ ׳“׳‘׳¨ ׳׳ ׳”׳©׳×׳ ׳”."<br />
                    ׳¨׳•׳‘ ׳”׳׳ ׳©׳™׳ ׳©׳•׳₪׳˜׳™׳ ׳׳× ׳¢׳¦׳׳ ׳׳₪׳™ ׳”׳׳©׳§׳. ׳׳‘׳ ׳‘׳₪׳•׳¢׳? <strong style={{ color: "var(--accent-light)" }}>׳”׳¡׳™׳₪׳•׳¨ ׳”׳¨׳‘׳” ׳™׳•׳×׳¨ ׳׳•׳¨׳›׳‘.</strong>
                </p>
                <div className="story-cards">
                    <div className="story-card">
                        <div className="emoji">ג–ן¸</div>
                        <div className="myth">ג ׳׳” ׳”׳׳©׳§׳ ׳׳•׳׳¨</div>
                        <div className="truth">"׳¢׳׳™׳× 3 ׳§׳™׳׳•"</div>
                    </div>
                    <div className="story-card">
                        <div className="emoji">נ“</div>
                        <div className="myth" style={{ color: "var(--green)" }}>ג… ׳׳” ׳”׳“׳•׳— ׳׳’׳׳”</div>
                        <div className="truth">"׳¢׳׳™׳× 4 ׳§"׳’ ׳©׳¨׳™׳¨, ׳™׳¨׳“׳× 1 ׳§"׳’ ׳©׳•׳׳"</div>
                    </div>
                    <div className="story-card">
                        <div className="emoji">נ˜°</div>
                        <div className="myth">ג ׳׳” ׳©׳׳×׳” ׳׳¨׳’׳™׳©</div>
                        <div className="truth">"׳ ׳¨׳׳” ׳׳™ ׳©׳׳ ׳”׳×׳§׳“׳׳×׳™"</div>
                    </div>
                    <div className="story-card">
                        <div className="emoji">נ¯</div>
                        <div className="myth" style={{ color: "var(--green)" }}>ג… ׳׳” ׳©׳‘׳׳׳× ׳§׳•׳¨׳”</div>
                        <div className="truth">"׳׳—׳•׳–׳™ ׳”׳©׳•׳׳ ׳™׳¨׳“׳• ׳‘-2.3%"</div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- ג•ג•ג• HOW IT WORKS ג•ג•ג• -->
    <section className="process">
        <div className="container">
            <h2 className="reveal">׳׳™׳ ׳–׳” ׳¢׳•׳‘׳“?</h2>
            <div className="timeline">
                <div className="timeline-step">
                    <div className="step-num">1</div>
                    <div className="step-content">
                        <h3>׳”׳’׳¢׳” ׳׳§׳׳™׳ ׳™׳§׳”</h3>
                        <p>׳§׳•׳‘׳¢׳™׳ ׳׳•׳¢׳“ ׳©׳ ׳•׳— ׳׳. ׳”׳”׳’׳¢׳” ׳׳•׳§׳—׳× ׳“׳§׳” ג€“ ׳‘׳׳™ ׳”׳›׳ ׳•׳× ׳׳™׳•׳—׳“׳•׳×.</p>
                        <div className="time">ג±ן¸ 0 ׳“׳§׳•׳×</div>
                    </div>
                </div>
                <div className="timeline-step">
                    <div className="step-num">2</div>
                    <div className="step-content">
                        <h3>׳׳“׳™׳“׳× ׳”׳¨׳›׳‘ ׳’׳•׳£</h3>
                        <p>׳©׳§׳™׳׳”, ׳׳“׳™׳“׳× ׳׳—׳•׳–׳™ ׳©׳•׳׳ ׳‘׳§׳׳™׳₪׳¨ ׳“׳™׳’׳™׳˜׳׳™, ׳”׳¢׳¨׳›׳× ׳׳¡׳× ׳’׳•׳£ ׳¨׳–׳” (LBM), ׳•׳׳“׳™׳“׳× ׳”׳™׳§׳₪׳™׳.</p>
                        <div className="time">ג±ן¸ 3-4 ׳“׳§׳•׳×</div>
                    </div>
                </div>
                <div className="timeline-step">
                    <div className="step-num">3</div>
                    <div className="step-content">
                        <h3>׳“׳•׳— Body MetRiX Pro</h3>
                        <p>׳›׳ ׳”׳׳¡׳₪׳¨׳™׳ ׳¢׳•׳‘׳¨׳™׳ ׳¢׳™׳‘׳•׳“ ׳׳§׳¦׳•׳¢׳™ ג€“ ׳’׳¨׳₪׳™׳, ׳”׳©׳•׳•׳׳” ׳׳¡׳₪׳¨׳•׳×, ׳׳¢׳§׳‘ ׳׳“׳™׳“׳•׳× ׳§׳•׳“׳׳•׳×.</p>
                        <div className="time">ג±ן¸ ׳׳™׳™׳“׳™</div>
                    </div>
                </div>
                <div className="timeline-step">
                    <div className="step-num">4</div>
                    <div className="step-content">
                        <h3>׳©׳™׳—׳” ׳׳™׳©׳™׳× ׳¢׳ ׳”׳׳׳¦׳׳™׳</h3>
                        <p>10 ׳“׳§׳•׳× ׳©׳‘׳”׳ ׳×׳•׳׳¨ ׳¢׳•׳‘׳¨ ׳׳™׳×׳ ׳¢׳ ׳”׳“׳•׳— ג€“ ׳׳” ׳”׳׳¡׳₪׳¨׳™׳ ׳׳•׳׳¨׳™׳, ׳•׳׳” ׳”׳¦׳¢׳“ ׳”׳‘׳.</p>
                        <div className="time">ג±ן¸ 10 ׳“׳§׳•׳×</div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- ג•ג•ג• FEATURES ג•ג•ג• -->
    <section className="features">
        <div className="container">
            <h2 className="reveal">׳׳” ׳׳§׳‘׳׳™׳ ׳‘׳›׳ ׳׳“׳™׳“׳”?</h2>
            <p className="sub reveal">׳“׳•׳— ׳׳§׳¦׳•׳¢׳™ ׳׳׳ ׳©׳ ׳‘׳ ׳” ׳¢׳ ׳‘׳¡׳™׳¡ 22 ׳©׳ ׳•׳× ׳ ׳™׳¡׳™׳•׳ ׳§׳׳™׳ ׳™</p>
            <div className="feature-grid">
                <div className="feature-card reveal">
                    <div className="feature-icon">נ“</div>
                    <h3>׳׳—׳•׳–׳™ ׳©׳•׳׳ ׳׳“׳•׳™׳§׳™׳</h3>
                    <p>׳׳“׳™׳“׳” ׳‘׳׳׳¦׳¢׳•׳× ׳§׳׳™׳₪׳¨ ׳“׳™׳’׳™׳˜׳׳™ ׳׳₪׳™ ׳׳–׳•׳¨׳™׳ ׳¡׳₪׳¦׳™׳₪׳™׳™׳ ׳‘׳’׳•׳£ ג€“ ׳׳ ׳”׳¢׳¨׳›׳” ׳’׳ ׳¨׳™׳×</p>
                </div>
                <div className="feature-card reveal">
                    <div className="feature-icon">נ’×</div>
                    <h3>׳”׳¢׳¨׳›׳× ׳׳¡׳× ׳’׳•׳£ ׳¨׳–׳”</h3>
                    <p>LBM ג€“ ׳׳¡׳× ׳”׳©׳¨׳™׳¨ ׳©׳׳ ׳‘׳™׳—׳¡ ׳׳׳©׳§׳ ׳”׳›׳•׳׳. ׳”׳׳™׳ ׳“׳™׳§׳˜׳•׳¨ ׳”׳׳׳™׳×׳™ ׳׳©׳™׳ ׳•׳™</p>
                </div>
                <div className="feature-card reveal">
                    <div className="feature-icon">נ“</div>
                    <h3>׳׳“׳™׳“׳× ׳”׳™׳§׳₪׳™׳ ׳׳׳׳”</h3>
                    <p>׳”׳™׳§׳₪׳™ ׳‘׳˜׳, ׳™׳¨׳›׳™׳™׳, ׳–׳¨׳•׳¢׳•׳× ׳•׳¢׳•׳“ ג€“ ׳׳” ׳©׳”׳׳©׳§׳ ׳׳ ׳¨׳•׳׳”, ׳”׳”׳™׳§׳₪׳™׳ ׳׳’׳׳™׳</p>
                </div>
                <div className="feature-card reveal">
                    <div className="feature-icon">נ“</div>
                    <h3>׳”׳©׳•׳•׳׳” ׳׳¡׳₪׳¨׳•׳×</h3>
                    <p>׳׳™׳₪׳” ׳׳×׳” ׳¢׳•׳׳“ ׳‘׳™׳—׳¡ ׳׳ ׳•׳¨׳׳•׳× ׳”׳׳§׳¦׳•׳¢׳™׳•׳× ׳‘׳’׳™׳׳? ׳”׳×׳©׳•׳‘׳” ׳‘׳“׳•׳—</p>
                </div>
                <div className="feature-card reveal">
                    <div className="feature-icon">נ“ˆ</div>
                    <h3>׳׳¢׳§׳‘ ׳׳׳•׳¨׳ ׳–׳׳</h3>
                    <p>׳›׳ ׳׳“׳™׳“׳” ׳׳•׳©׳•׳•׳™׳× ׳׳§׳•׳“׳׳× ג€“ ׳’׳¨׳₪׳™׳ ׳‘׳¨׳•׳¨׳™׳ ׳©׳׳¨׳׳™׳ ׳‘׳“׳™׳•׳§ ׳׳” ׳”׳©׳×׳ ׳”</p>
                </div>
                <div className="feature-card reveal">
                    <div className="feature-icon">נ—÷ן¸</div>
                    <h3>׳”׳׳׳¦׳•׳× ׳׳™׳©׳™׳•׳×</h3>
                    <p>׳׳ ׳¨׳§ ׳׳¡׳₪׳¨׳™׳ ג€“ ׳”׳ ׳—׳™׳•׳× ׳׳•׳×׳׳׳•׳× ׳׳׳˜׳¨׳•׳× ׳©׳׳, ׳׳‘׳•׳¡׳¡׳•׳× ׳ ׳×׳•׳ ׳™׳</p>
                </div>
            </div>
        </div>
    </section>

    <!-- ג•ג•ג• SOCIAL PROOF (mirrors Email 4) ג•ג•ג• -->
    <section className="social-proof">
        <div className="container">
            <h2 className="reveal">׳׳” ׳§׳•׳¨׳” ׳›׳©׳—׳•׳–׳¨׳™׳</h2>
            <div className="proof-card reveal">
                <div className="proof-quote">
                    ׳׳§׳•׳— ׳—׳–׳¨ ׳׳׳™׳™ ׳׳—׳¨׳™ ׳©׳ ׳” ׳•׳—׳¦׳™. ׳”׳•׳ ׳”׳™׳” <strong>׳‘׳˜׳•׳— ׳©׳”׳•׳ "׳”׳¨׳¡ ׳”׳›׳"</strong> ג€“ ׳•׳™׳¦׳ ׳׳”׳׳“׳™׳“׳” ׳‘׳”׳׳.
                    ׳’׳™׳׳” ׳©׳”׳•׳ <strong>׳©׳׳¨ ׳¢׳ 80% ׳׳”׳©׳¨׳™׳¨ ׳©׳‘׳ ׳”</strong> ׳‘׳×׳”׳׳™׳ ׳©׳׳ ׳•. ׳”-6 ׳§׳™׳׳• ׳©׳¢׳׳”?
                    ׳¨׳•׳‘׳ ׳׳™׳ ׳•׳©׳•׳׳ ׳©׳ ׳™׳×׳ ׳׳”׳•׳¨׳™׳“ ׳×׳•׳ ׳—׳•׳“׳©׳™׳™׳. ׳‘׳׳™ ׳”׳“׳•׳—, ׳”׳•׳ ׳”׳™׳” ׳ ׳©׳‘׳¢ ׳©׳”׳•׳ <strong>׳—׳–׳¨ ׳׳ ׳§׳•׳“׳× ׳”׳”׳×׳—׳׳”.</strong>
                </div>
                <div className="proof-result">
                    <div className="proof-stat"><div className="val">80%</div><div className="lbl">׳©׳׳™׳¨׳” ׳¢׳ ׳©׳¨׳™׳¨</div></div>
                    <div className="proof-stat"><div className="val">-2.3%</div><div className="lbl">׳©׳•׳׳ ׳‘׳—׳•׳“׳©׳™׳™׳</div></div>
                    <div className="proof-stat"><div className="val">5 ׳“׳§׳³</div><div className="lbl">׳–׳׳ ׳”׳׳“׳™׳“׳”</div></div>
                </div>
                <div className="proof-author">ג€” ׳×׳•׳׳¨ ׳₪׳¨׳™׳“׳׳, ׳׳×׳•׳ ׳”׳ ׳™׳¡׳™׳•׳ ׳”׳§׳׳™׳ ׳™</div>
            </div>
        </div>
    </section>

    <!-- ג•ג•ג• PRICING ג•ג•ג• -->
    <section className="pricing" id="pricing">
        <div className="container">
            <h2 className="reveal">׳—׳‘׳™׳׳•׳× ׳׳“׳™׳“׳•׳× ׳׳¢׳§׳‘</h2>
            <p className="sub reveal">׳™׳“ ׳¢׳ ׳”׳“׳•׳₪׳§ ג€“ ׳‘׳׳™ ׳”׳×׳—׳™׳™׳‘׳•׳× ׳›׳‘׳“׳”</p>

            <div className="pricing-grid reveal">
                <!-- Basic -->
                <div className="pricing-card">
                    <h3>׳‘׳¡׳™׳¡׳™׳×</h3>
                    <div className="sessions">4 ׳׳“׳™׳“׳•׳× | 2-4 ׳—׳•׳“׳©׳™׳</div>
                    <div className="pricing-price">ג‚×520</div>
                    <div className="pricing-per">ג‚×130 ׳׳₪׳’׳™׳©׳”</div>
                    <ul className="pricing-features">
                        <li><span className="check">ג…</span> 4 ׳׳“׳™׳“׳•׳× ׳”׳¨׳›׳‘ ׳’׳•׳£</li>
                        <li><span className="check">ג…</span> ׳“׳•׳— Body MetRiX Pro</li>
                        <li><span className="check">ג…</span> ׳”׳©׳•׳•׳׳” ׳׳¡׳₪׳¨׳•׳×</li>
                        <li><span className="check">ג…</span> ׳©׳™׳—׳” ׳׳™׳©׳™׳× ׳¢׳ ׳”׳“׳•׳—</li>
                    </ul>
                    <button className="pricing-cta" onClick={() => alert('׳›׳׳ ׳™׳”׳™׳” ׳§׳™׳©׳•׳¨ ׳׳¡׳׳™׳§׳” / ׳§׳‘׳™׳¢׳× ׳×׳•׳¨')}>׳©׳¨׳™׳™׳ ׳׳§׳•׳ ג†</button>
                </div>

                <!-- Featured -->
                <div className="pricing-card featured">
                    <div className="pricing-badge">נ”¥ ׳”׳₪׳•׳₪׳•׳׳¨׳™׳×</div>
                    <h3>׳׳•׳¨׳—׳‘׳×</h3>
                    <div className="sessions">8 ׳׳“׳™׳“׳•׳× | 5-8 ׳—׳•׳“׳©׳™׳</div>
                    <div className="pricing-price">ג‚×940</div>
                    <div className="pricing-per">ג‚×117 ׳׳₪׳’׳™׳©׳”</div>
                    <ul className="pricing-features">
                        <li><span className="check">ג…</span> 8 ׳׳“׳™׳“׳•׳× ׳”׳¨׳›׳‘ ׳’׳•׳£</li>
                        <li><span className="check">ג…</span> ׳“׳•׳— Body MetRiX Pro</li>
                        <li><span className="check">ג…</span> ׳”׳©׳•׳•׳׳” ׳׳¡׳₪׳¨׳•׳×</li>
                        <li><span className="check">ג…</span> ׳©׳™׳—׳” ׳׳™׳©׳™׳× ׳¢׳ ׳”׳“׳•׳—</li>
                        <li><span className="check">ג…</span> ׳׳¢׳§׳‘ ׳׳’׳׳•׳× ׳׳¨׳•׳ ׳˜׳•׳•׳—</li>
                    </ul>
                    <button className="pricing-cta" onClick={() => alert('׳›׳׳ ׳™׳”׳™׳” ׳§׳™׳©׳•׳¨ ׳׳¡׳׳™׳§׳” / ׳§׳‘׳™׳¢׳× ׳×׳•׳¨')}>׳©׳¨׳™׳™׳ ׳׳§׳•׳ ג†</button>
                </div>

                <!-- Premium -->
                <div className="pricing-card">
                    <h3>׳׳׳׳”</h3>
                    <div className="sessions">12 ׳׳“׳™׳“׳•׳× | ׳¢׳“ ׳©׳ ׳”</div>
                    <div className="pricing-price">ג‚×1,320</div>
                    <div className="pricing-per">ג‚×110 ׳׳₪׳’׳™׳©׳”</div>
                    <ul className="pricing-features">
                        <li><span className="check">ג…</span> 12 ׳׳“׳™׳“׳•׳× ׳”׳¨׳›׳‘ ׳’׳•׳£</li>
                        <li><span className="check">ג…</span> ׳“׳•׳— Body MetRiX Pro</li>
                        <li><span className="check">ג…</span> ׳”׳©׳•׳•׳׳” ׳׳¡׳₪׳¨׳•׳×</li>
                        <li><span className="check">ג…</span> ׳©׳™׳—׳” ׳׳™׳©׳™׳× ׳¢׳ ׳”׳“׳•׳—</li>
                        <li><span className="check">ג…</span> ׳׳¢׳§׳‘ ׳©׳ ׳×׳™ ׳׳׳</li>
                    </ul>
                    <button className="pricing-cta outline" onClick={() => alert('׳›׳׳ ׳™׳”׳™׳” ׳§׳™׳©׳•׳¨ ׳׳¡׳׳™׳§׳” / ׳§׳‘׳™׳¢׳× ׳×׳•׳¨')}>׳©׳¨׳™׳™׳ ׳׳§׳•׳ ג†</button>
                </div>
            </div>
            <p style={{ textAlign: "center", color: "var(--muted)", fontSize: "0.8rem", marginTop: "20px" }}>נ”’ ׳›׳ ׳”׳׳—׳™׳¨׳™׳ ׳›׳•׳׳ ׳׳¢"׳ | ׳׳₪׳’׳© ׳›׳ 3-6 ׳©׳‘׳•׳¢׳•׳× | ~5 ׳“׳§׳•׳× ׳›׳ ׳₪׳’׳™׳©׳”</p>
        </div>
    </section>

    <!-- ג•ג•ג• NEXT STEP (gradual ascent hint) ג•ג•ג• -->
    <section className="next-step">
        <div className="container reveal">
            <h2>׳•׳›׳©׳×׳”׳™׳” ׳׳•׳›׳ ׳׳©׳׳‘ ׳”׳‘׳?</h2>
            <p>׳”׳׳“׳™׳“׳” ׳”׳™׳ ׳¨׳§ ׳”׳”׳×׳—׳׳”. ׳׳ ׳”׳“׳•׳— ׳™׳’׳׳” ׳©׳׳×׳” ׳¨׳•׳¦׳” ׳׳—׳–׳•׳¨ ׳׳₪׳¢׳•׳׳” ג€“ ׳™׳© ׳”׳׳©׳ ׳˜׳‘׳¢׳™:</p>
            <div className="ascent-flow">
                <div className="ascent-item active">נ“ ׳׳“׳™׳“׳•׳× ׳׳¢׳§׳‘</div>
                <div className="ascent-arrow">ג†</div>
                <div className="ascent-item">נ ׳׳™׳•׳•׳™ ׳׳•׳ ׳׳™׳™׳</div>
                <div className="ascent-arrow">ג†</div>
                <div className="ascent-item">נ‹ן¸ ׳׳™׳•׳•׳™ ׳₪׳¨׳•׳ ׳˜׳׳™</div>
            </div>
            <p className="note">׳‘׳׳™ ׳׳—׳¥. ׳‘׳׳™ ׳”׳×׳—׳™׳™׳‘׳•׳×. ׳”׳›׳ ׳׳×׳§׳“׳ ׳‘׳§׳¦׳‘ ׳©׳׳.</p>
        </div>
    </section>

    <!-- ג•ג•ג• ABOUT ג•ג•ג• -->
    <section className="about">
        <div className="container">
            <h2 className="reveal">׳×׳•׳׳¨ ׳₪׳¨׳™׳“׳׳</h2>
            <p className="bio reveal">
                ׳×׳–׳•׳ ׳׳™ ׳§׳׳™׳ ׳™ ׳•׳¡׳₪׳•׳¨׳˜׳™׳‘׳™ ׳¢׳ <strong style={{ color: "var(--accent-light)" }}>22 ׳©׳ ׳•׳× ׳ ׳™׳¡׳™׳•׳</strong> ׳‘׳׳™׳•׳•׳™ ׳׳׳•׳× ׳׳×׳׳׳ ׳™׳
                ׳׳”׳©׳’׳× ׳™׳¢׳“׳™ ׳”׳‘׳¨׳™׳׳•׳×, ׳”׳›׳•׳©׳¨ ׳•׳”׳׳¡׳×׳˜׳™׳§׳” ׳©׳׳”׳. ׳׳₪׳×׳— ׳׳¢׳¨׳›׳×
                <strong style={{ color: "var(--accent-light)" }}>Body MetRiX Pro</strong>
                ׳•׳™׳•׳¦׳¨ ׳”׳§׳•׳¨׳¡ "׳¡׳•׳“׳•׳× ׳”׳×׳–׳•׳ ׳׳™ ׳”׳›׳׳•׳¡׳™׳" ׳׳׳ ׳©׳™ ׳׳§׳¦׳•׳¢.
            </p>
            <div className="credentials reveal">
                <div className="credential">נ“ M.Sc RD</div>
                <div className="credential">נ’× ׳×׳–׳•׳ ׳׳™ ׳¡׳₪׳•׳¨׳˜׳™׳‘׳™</div>
                <div className="credential">נ“ ׳׳₪׳×׳— Body MetRiX Pro</div>
                <div className="credential">נ₪ ׳׳¨׳¦׳” ׳׳§׳¦׳•׳¢׳™</div>
            </div>
        </div>
    </section>

    <!-- ג•ג•ג• FINAL CTA ג•ג•ג• -->
    <section className="final-cta">
        <div className="container reveal">
            <h2>׳׳•׳›׳ ׳׳“׳¢׳× ׳׳™׳₪׳” ׳׳×׳” ׳‘׳׳׳× ׳¢׳•׳׳“?</h2>
            <p>520 ג‚× | 4 ׳׳“׳™׳“׳•׳× | ׳“׳•׳— ׳׳§׳¦׳•׳¢׳™ ׳׳׳ | ׳©׳™׳—׳” ׳׳™׳©׳™׳×</p>
            <a href="#pricing" className="hero-cta">׳©׳¨׳™׳™׳ ׳׳× ׳”׳׳§׳•׳ ׳©׳׳ ׳¢׳›׳©׳™׳• ג†</a>
        </div>
    </section>

    <!-- ג•ג•ג• FOOTER ג•ג•ג• -->
    <footer>
        <div className="container">
            <p>ֲ© 2026 ׳×׳•׳׳¨ ׳₪׳¨׳™׳“׳׳ ג€“ ׳›׳ ׳”׳–׳›׳•׳™׳•׳× ׳©׳׳•׳¨׳•׳×</p>
        </div>
    </footer>

    <!-- ג•ג•ג• SCROLL REVEAL JS ג•ג•ג• -->
    
    </>
  );
}

export default App;
