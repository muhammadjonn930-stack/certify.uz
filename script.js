:root {
    --bg-main: #090d16;
    --glass-bg: rgba(17, 25, 40, 0.85);
    --glass-border: rgba(255, 255, 255, 0.12);
    --text-main: #f8fafc;
    --text-muted: #94a3b8;
    --accent: #3b82f6;
    --accent-glow: rgba(59, 130, 246, 0.45);
    --card-hover: rgba(30, 41, 59, 0.9);
    --input-bg: rgba(15, 23, 42, 0.85);
    --shadow: 0 20px 50px rgba(0, 0, 0, 0.5);
}

[data-theme="light"] {
    --bg-main: #f1f5f9;
    --glass-bg: rgba(255, 255, 255, 0.9);
    --glass-border: rgba(15, 23, 42, 0.12);
    --text-main: #0f172a;
    --text-muted: #475569;
    --accent: #2563eb;
    --accent-glow: rgba(37, 99, 235, 0.25);
    --card-hover: rgba(241, 245, 249, 0.95);
    --input-bg: rgba(255, 255, 255, 0.95);
    --shadow: 0 15px 35px rgba(15, 23, 42, 0.12);
}

.no-select {
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
}

* { margin: 0; padding: 0; box-sizing: border-box; font-family: 'Plus Jakarta Sans', sans-serif; }
body { background-color: var(--bg-main); color: var(--text-main); min-height: 100vh; overflow-x: hidden; }
.hidden { display: none !important; }

/* Alfraganus universitetiga mos keluvchi zamonaviy talabalar va ta'lim muhiti foni */
.bg-overlay { position: fixed; inset: 0; z-index: -1; background-size: cover; background-position: center; background-attachment: fixed; }
.bg-overlay::after { content: ""; position: absolute; inset: 0; background: linear-gradient(135deg, rgba(9, 13, 22, 0.88), rgba(9, 13, 22, 0.75)); }
[data-theme="light"] .bg-overlay::after { background: linear-gradient(135deg, rgba(241, 245, 249, 0.9), rgba(226, 232, 240, 0.8)); }

.reg-bg { background-image: url('https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=1920&q=80'); }
.home-bg { background-image: url('https://images.unsplash.com/photo-1507842217343-583bb7270b66?auto=format&fit=crop&w=1920&q=80'); }
.bg-onatili { background-image: url('https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?auto=format&fit=crop&w=1920&q=80'); }
.bg-math { background-image: url('https://images.unsplash.com/photo-1635070041078-e363dbe005cb?auto=format&fit=crop&w=1920&q=80'); }
.bg-history { background-image: url('https://images.unsplash.com/photo-1596484552834-6a58f850e0a1?auto=format&fit=crop&w=1920&q=80'); }
.bg-english { background-image: url('https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?auto=format&fit=crop&w=1920&q=80'); }
.bg-russian { background-image: url('https://images.unsplash.com/photo-1513326738677-b964603b136d?auto=format&fit=crop&w=1920&q=80'); }
.bg-biology { background-image: url('https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?auto=format&fit=crop&w=1920&q=80'); }
.bg-chemistry { background-image: url('https://images.unsplash.com/photo-1603126857599-f6e157fa2fe6?auto=format&fit=crop&w=1920&q=80'); }

@keyframes fadeUp { from { opacity: 0; transform: translateY(20px); } to { opacity: 1; transform: translateY(0); } }
@keyframes slideLeft { from { opacity: 0; transform: translateX(-20px); } to { opacity: 1; transform: translateX(0); } }
@keyframes zoomIn { from { opacity: 0; transform: scale(0.97); } to { opacity: 1; transform: scale(1); } }

.animate-fade-up { animation: fadeUp 0.5s ease forwards; }
.animate-slide-left { animation: slideLeft 0.5s ease forwards; }
.animate-zoom-in { animation: zoomIn 0.4s ease forwards; }

/* HEADER - Mobil ekranlarda cho'zilib ketishining oldi olindi */
.glass-header { 
    position: sticky; 
    top: 0; 
    z-index: 100; 
    display: flex; 
    align-items: center; 
    justify-content: space-between; 
    padding: 10px 20px; 
    background: var(--glass-bg); 
    backdrop-filter: blur(16px); 
    border-bottom: 1px solid var(--glass-border); 
    width: 100%;
}
.logo-box { display: flex; align-items: center; gap: 10px; cursor: pointer; }
.logo-icon { width: 38px; height: 38px; border-radius: 10px; background: linear-gradient(135deg, #3b82f6, #8b5cf6); display: flex; align-items: center; justify-content: center; color: #fff; font-size: 18px; }
.logo-icon.large { width: 56px; height: 56px; font-size: 26px; margin: 0 auto 12px; }
.logo-text { display: flex; flex-direction: column; }
.brand-main { font-weight: 800; font-size: 17px; }
.brand-main .accent { color: #3b82f6; }
.brand-sub { font-size: 10px; color: var(--text-muted); }
.header-spacer { flex: 1; }
.header-right { display: flex; align-items: center; gap: 8px; }

.lang-selector { display: flex; align-items: center; gap: 4px; background: var(--input-bg); border: 1px solid var(--glass-border); padding: 6px 10px; border-radius: 8px; font-size: 13px; }
.lang-selector select { background: transparent; border: none; color: var(--text-main); font-weight: 600; cursor: pointer; outline: none; }
.lang-selector select option { background: #1e293b; color: #fff; }

.icon-btn { width: 36px; height: 36px; border-radius: 8px; border: 1px solid var(--glass-border); background: var(--input-bg); color: var(--text-main); cursor: pointer; display: flex; align-items: center; justify-content: center; font-size: 15px; }
.icon-btn:hover { background: var(--accent); color: #fff; }

.profile-badge { display: flex; align-items: center; gap: 6px; padding: 7px 12px; border-radius: 8px; border: 1px solid var(--accent); background: rgba(59, 130, 246, 0.15); color: var(--text-main); font-weight: 600; font-size: 13px; cursor: pointer; }
.profile-badge:hover { background: var(--accent); color: #fff; }

.page { display: none; min-height: calc(100vh - 60px); padding: 20px; }
.page.active { display: block; }
#page-register.active { min-height: 100vh; display: flex; align-items: center; justify-content: center; padding: 12px; }

.reg-container { width: 100%; max-width: 620px; background: var(--glass-bg); backdrop-filter: blur(20px); border: 1px solid var(--glass-border); border-radius: 20px; padding: 28px; box-shadow: var(--shadow); }
.reg-header { text-align: center; margin-bottom: 22px; }
.reg-header h1 { font-size: 24px; font-weight: 800; margin-bottom: 6px; }
.reg-header p { color: var(--text-muted); font-size: 13px; line-height: 1.4; }

.form-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 14px; }
.input-group { margin-bottom: 14px; }
.input-group label { display: block; font-size: 12px; font-weight: 600; margin-bottom: 6px; }
.input-group label i { color: var(--accent); margin-right: 4px; }
.input-group input, .input-group select { width: 100%; padding: 10px 12px; border-radius: 10px; border: 1px solid var(--glass-border); background: var(--input-bg); color: var(--text-main); font-size: 13px; outline: none; }
.input-group select { max-height: 180px; overflow-y: auto; cursor: pointer; }

.checkbox-pills { display: flex; flex-wrap: wrap; gap: 8px; }
.pill { cursor: pointer; }
.pill input { display: none; }
.pill span { display: inline-block; padding: 6px 12px; border-radius: 16px; border: 1px solid var(--glass-border); background: var(--input-bg); font-size: 12px; font-weight: 600; }
.pill input:checked + span { background: var(--accent); color: #fff; border-color: var(--accent); }

.btn-primary { background: linear-gradient(135deg, #3b82f6, #6366f1); color: #fff; border: none; padding: 12px 20px; border-radius: 10px; font-weight: 700; font-size: 14px; cursor: pointer; display: inline-flex; align-items: center; justify-content: center; gap: 8px; }
.btn-primary:hover { opacity: 0.9; }
.full-width { width: 100%; }

/* Admin panelga kirish tugmasi ro'yxatdan o'tish formasi ostida chiroyli joylashdi */
.admin-link-box { text-align: center; margin-top: 16px; border-top: 1px solid var(--glass-border); padding-top: 14px; }
.admin-link-box button { background: rgba(245, 158, 11, 0.12); border: 1px solid rgba(245, 158, 11, 0.4); color: #f59e0b; padding: 8px 16px; border-radius: 8px; cursor: pointer; font-size: 12px; font-weight: 600; display: inline-flex; align-items: center; gap: 6px; transition: 0.2s; }
.admin-link-box button:hover { background: #f59e0b; color: #fff; }

.home-layout { max-width: 1400px; margin: 0 auto; display: grid; grid-template-columns: 320px 1fr; gap: 20px; align-items: start; }
.glass-card { background: var(--glass-bg); backdrop-filter: blur(18px); border: 1px solid var(--glass-border); border-radius: 18px; padding: 22px; box-shadow: var(--shadow); }

.subjects-sidebar { background: var(--glass-bg); backdrop-filter: blur(18px); border: 1px solid var(--glass-border); border-radius: 18px; padding: 18px; position: sticky; top: 75px; }
.sidebar-title { display: flex; align-items: center; gap: 8px; margin-bottom: 6px; }
.sidebar-title i { color: var(--accent); font-size: 18px; }
.sidebar-desc { font-size: 12px; color: var(--text-muted); margin-bottom: 14px; }

.subject-list { display: flex; flex-direction: column; gap: 10px; max-height: calc(100vh - 240px); overflow-y: auto; padding-right: 4px; }
.subject-card { width: 100%; display: flex; align-items: center; gap: 12px; padding: 12px; border-radius: 12px; border: 1px solid var(--glass-border); background: var(--input-bg); color: var(--text-main); text-align: left; cursor: pointer; transition: 0.2s; }
.subject-card:hover { border-color: var(--accent); }

.sub-icon { width: 38px; height: 38px; border-radius: 10px; display: flex; align-items: center; justify-content: center; font-size: 16px; color: #fff; flex-shrink: 0; }
.sub-onatili .sub-icon { background: linear-gradient(135deg, #ec4899, #f43f5e); }
.sub-math .sub-icon { background: linear-gradient(135deg, #3b82f6, #06b6d4); }
.sub-history .sub-icon { background: linear-gradient(135deg, #f59e0b, #d97706); }
.sub-english .sub-icon { background: linear-gradient(135deg, #10b981, #059669); }
.sub-russian .sub-icon { background: linear-gradient(135deg, #8b5cf6, #6d28d9); }
.sub-biology .sub-icon { background: linear-gradient(135deg, #10b981, #047857); }
.sub-chemistry .sub-icon { background: linear-gradient(135deg, #06b6d4, #0284c7); }

.sub-info { flex: 1; }
.sub-info h4 { font-size: 14px; font-weight: 700; margin-bottom: 2px; }
.sub-info span { font-size: 11px; color: var(--text-muted); }
.subject-card .arrow { color: var(--text-muted); font-size: 12px; }

.mini-history-card { margin-top: 14px; padding: 12px; border-radius: 12px; background: rgba(59, 130, 246, 0.1); border: 1px dashed var(--accent); display: flex; align-items: center; gap: 10px; cursor: pointer; font-size: 13px; }

.home-content { display: flex; flex-direction: column; gap: 20px; }
.badge-glow { display: inline-block; padding: 5px 12px; border-radius: 16px; background: rgba(59, 130, 246, 0.2); border: 1px solid var(--accent); color: #60a5fa; font-size: 12px; font-weight: 700; margin-bottom: 12px; }
.hero-banner h1 { font-size: 26px; font-weight: 800; line-height: 1.25; margin-bottom: 12px; }
.hero-banner p { color: var(--text-muted); font-size: 14px; line-height: 1.6; margin-bottom: 16px; }

.about-grid { display: grid; grid-template-columns: repeat(2, 1fr); gap: 12px; margin: 16px 0; }
.about-item { background: var(--input-bg); padding: 14px; border-radius: 12px; border: 1px solid var(--glass-border); font-size: 13px; color: var(--text-muted); }
.about-item strong { color: var(--text-main); display: block; margin-bottom: 4px; font-size: 13px; }
.about-item i { color: var(--accent); margin-right: 4px; }

.hero-stats { display: grid; grid-template-columns: repeat(3, 1fr); gap: 12px; padding-top: 16px; border-top: 1px solid var(--glass-border); text-align: center; }
.stat-item h3 { font-size: 22px; font-weight: 800; color: var(--accent); }
.stat-item p { margin: 0; font-size: 12px; color: var(--text-muted); }

.exam-wrapper { max-width: 860px; margin: 0 auto; display: flex; flex-direction: column; gap: 16px; }
.exam-top-bar { display: flex; align-items: center; justify-content: space-between; padding: 14px 20px; flex-wrap: wrap; gap: 10px; }
.btn-back { background: var(--input-bg); border: 1px solid var(--glass-border); color: var(--text-main); padding: 8px 14px; border-radius: 8px; cursor: pointer; font-weight: 600; font-size: 13px; display: flex; align-items: center; gap: 6px; }
.exam-subject-badge { display: flex; align-items: center; gap: 8px; font-size: 15px; }
.timer-box { display: flex; align-items: center; gap: 8px; background: rgba(239, 68, 68, 0.15); border: 1px solid #ef4444; color: #f87171; padding: 8px 14px; border-radius: 10px; font-weight: 800; font-size: 16px; }

.exam-intro { text-align: center; padding: 30px 20px; }
.intro-icon { width: 60px; height: 60px; border-radius: 16px; background: var(--accent); color: #fff; font-size: 26px; display: flex; align-items: center; justify-content: center; margin: 0 auto 14px; }
.exam-rules { max-width: 500px; margin: 20px auto; text-align: left; display: flex; flex-direction: column; gap: 10px; background: var(--input-bg); padding: 16px; border-radius: 12px; font-size: 13px; }
.rule-item { display: flex; align-items: center; gap: 10px; }
.rule-item i { color: var(--accent); width: 18px; }

.progress-info { display: flex; justify-content: space-between; align-items: center; margin-bottom: 8px; font-weight: 700; font-size: 13px; }
.q-badge { padding: 3px 10px; border-radius: 16px; font-size: 11px; }
.q-badge.test { background: rgba(59, 130, 246, 0.2); color: #60a5fa; }
.q-badge.written { background: rgba(168, 85, 247, 0.2); color: #c084fc; }

.progress-track { height: 6px; background: var(--input-bg); border-radius: 8px; overflow: hidden; }
.progress-fill { height: 100%; background: linear-gradient(90deg, #3b82f6, #10b981); transition: width 0.3s ease; }

.question-card h3 { font-size: 17px; line-height: 1.4; margin-bottom: 18px; }
.options-list { display: flex; flex-direction: column; gap: 10px; }
.option-item { padding: 12px 16px; border-radius: 12px; border: 1px solid var(--glass-border); background: var(--input-bg); cursor: pointer; display: flex; align-items: center; gap: 12px; font-size: 14px; transition: 0.2s; }
.option-item:hover { border-color: var(--accent); }
.option-item.selected { background: rgba(59, 130, 246, 0.2); border-color: var(--accent); font-weight: 600; }
.opt-letter { width: 28px; height: 28px; border-radius: 6px; background: rgba(255, 255, 255, 0.08); display: flex; align-items: center; justify-content: center; font-weight: 700; font-size: 13px; }
.option-item.selected .opt-letter { background: var(--accent); color: #fff; }

.written-box textarea { width: 100%; padding: 14px; border-radius: 12px; border: 1px solid var(--glass-border); background: var(--input-bg); color: var(--text-main); font-size: 14px; margin: 8px 0; outline: none; }
.question-nav { margin-top: 20px; padding-top: 16px; border-top: 1px solid var(--glass-border); display: flex; align-items: center; justify-content: space-between; gap: 10px; flex-wrap: wrap; }
.question-dots { display: flex; flex-wrap: wrap; justify-content: center; gap: 4px; }
.q-dot { width: 24px; height: 24px; border-radius: 6px; font-size: 10px; font-weight: 700; border: 1px solid var(--glass-border); background: var(--input-bg); color: var(--text-muted); cursor: pointer; }
.q-dot.answered { background: rgba(16, 185, 129, 0.25); border-color: #10b981; color: #10b981; }
.q-dot.current { border-color: var(--accent); background: var(--accent); color: #fff; }

.btn-secondary { background: var(--input-bg); border: 1px solid var(--glass-border); color: var(--text-main); padding: 10px 16px; border-radius: 10px; font-weight: 600; font-size: 13px; cursor: pointer; }
.btn-success { background: linear-gradient(135deg, #10b981, #059669); color: #fff; border: none; padding: 10px 18px; border-radius: 10px; font-weight: 700; font-size: 13px; cursor: pointer; }

.certificate-header { text-align: center; padding-bottom: 16px; border-bottom: 1px solid var(--glass-border); }
.cert-tag { font-size: 10px; letter-spacing: 1px; color: var(--accent); font-weight: 800; }
.score-showcase { display: flex; align-items: center; justify-content: center; gap: 28px; margin: 20px 0; flex-wrap: wrap; }
.grade-circle { width: 120px; height: 120px; border-radius: 50%; border: 5px solid #10b981; display: flex; flex-direction: column; align-items: center; justify-content: center; background: rgba(16, 185, 129, 0.1); }
.grade-circle h1 { font-size: 38px; font-weight: 800; }
.score-details { display: flex; flex-direction: column; gap: 8px; min-width: 220px; font-size: 13px; }
.score-row { display: flex; justify-content: space-between; padding-bottom: 4px; border-bottom: 1px dashed var(--glass-border); }
.ai-feedback-box { background: var(--input-bg); padding: 14px; border-radius: 12px; border-left: 4px solid var(--accent); margin-bottom: 18px; font-size: 13px; }
.rating-box { text-align: center; padding: 14px; background: rgba(245, 158, 11, 0.1); border-radius: 12px; margin-bottom: 16px; font-size: 13px; }
.stars { font-size: 24px; color: #64748b; margin-top: 8px; cursor: pointer; }
.stars i.active, .stars i:hover { color: #f59e0b; }
.result-actions { display: flex; justify-content: center; gap: 10px; }

.modal { position: fixed; inset: 0; background: rgba(0, 0, 0, 0.75); z-index: 200; display: flex; align-items: center; justify-content: center; padding: 16px; }
.modal-content { width: 100%; max-width: 540px; max-height: 85vh; overflow-y: auto; }
.modal-header { display: flex; justify-content: space-between; align-items: center; margin-bottom: 14px; font-size: 16px; }
.close-modal { background: none; border: none; color: var(--text-main); font-size: 18px; cursor: pointer; }
.profile-summary { background: var(--input-bg); padding: 12px; border-radius: 10px; margin-bottom: 14px; font-size: 12px; }
.history-item { padding: 12px; border-radius: 10px; border: 1px solid var(--glass-border); background: var(--input-bg); margin-bottom: 8px; display: flex; justify-content: space-between; align-items: center; font-size: 13px; }

.admin-user-row { display: flex; justify-content: space-between; align-items: center; padding: 10px; border-bottom: 1px solid var(--glass-border); gap: 8px; font-size: 12px; }
.admin-user-row:last-child { border-bottom: none; }

/* Mobil moslashuvchanlik (Responsive) qoidalar */
@media screen and (max-width: 900px) {
    .home-layout {
        grid-template-columns: 1fr;
        gap: 16px;
    }
    .form-grid {
        grid-template-columns: 1fr;
        gap: 0;
    }
    .reg-container {
        padding: 16px 14px;
        margin: 6px;
    }
    .about-grid {
        grid-template-columns: 1fr;
    }
}
