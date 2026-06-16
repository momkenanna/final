import { BookOpen, GraduationCap, HeartHandshake, Lightbulb, LineChart, Medal, Menu, ClipboardCheck, FileText, Target, Users, Sparkles, CalendarCheck } from 'lucide-react';

const profile = {
  studentName: 'أنسام ابراهيم ابو شاويش',
  college: 'كلية الإمارات للتطوير التربوي',
  program: 'تدريب عملي',
  academicYear: '2025 - 2026',
  courseDoctor: 'دكتور المساق',
  supervisor: 'مشرف/ة المساق',
  school: 'مدرسية الرياحين',
  specialization: 'اللغة العربية و الاسلامية',
  email: '025177@ecae.ac.ae',
};

const navItems = [
  ['الرئيسية', 'home'],
  ['الإطار الوطني', 'framework'],
  ['نبذة عني', 'about'],
  ['السلوك المهني', 'ethics'],
  ['المتعاون مع المجتمع', 'knowledge'],
  ['المهني الفعال', 'practice'],
  ['صانع المستقبل', 'growth'],
  ['الأدلة', 'evidence'],
  ['المراجع', 'references'],
];

const slefItems = [
  ['الالتزام بأخلاقيات المهنة', '4.8 / 5'],
  ['التعاون مع الزملاء والإدارة', '4.7 / 5'],
  ['إدارة بيئة التعلم باحترام وإنصاف', '4.6 / 5'],
  ['التواصل المهني الفعال', '4.5 / 5'],
  ['المحافظة على السرية والخصوصية', '5 / 5'],
  ['الاستعداد للتعلم والتطوير', '4.8 / 5'],
];

const cards = [
  { icon: HeartHandshake, title: 'السلوك المهني والأخلاقي', text: 'الالتزام بالقيم المهنية، احترام المتعلمين، المحافظة على السرية، وبناء علاقات مهنية إيجابية.' },
  { icon: BookOpen, title: 'المتعاون مع المجتمع', text: 'فهم خصائص طلبة الصف الأول، والمحتوى اللغوي، واستراتيجيات التدريس المناسبة للمرحلة العمرية.' },
  { icon: ClipboardCheck, title: 'المهني الفعال', text: 'تخطيط الدروس وتنفيذها وتقييم تعلم الطلبة باستخدام أدوات واضحة مرتبطة بمخرجات التعلم.' },
  { icon: LineChart, title: 'صانع المستقبل', text: 'التأمل الذاتي، الاستفادة من التغذية الراجعة، والمشاركة في مجتمعات التعلم المهنية.' },
];

const lessonPlans = [
  {
    title: 'خطة درس القراءة التشاركية',
    outcome: 'يقرأ الطالب كلمات وجملاً قصيرة قراءة صحيحة، ويشارك في تقييم قراءة زميله وفق معايير مبسطة.',
    steps: ['تهيئة بصورة مرتبطة بالنص', 'قراءة نموذجية من المعلمة', 'قراءة جماعية ثم فردية', 'تقييم أقران باستخدام بطاقة بسيطة', 'بطاقة خروج لقياس الفهم'],
  },
  {
    title: 'خطة درس قيمة التسامح',
    outcome: 'يوضح الطالب معنى التسامح، ويذكر موقفاً يدل عليه، ويستخدم مفردات الدرس في جملة شفهية.',
    steps: ['عرض موقف حياتي', 'قراءة نص قصير', 'مناقشة مفردات القيمة', 'تمثيل مواقف قصيرة', 'تقييم شفهي وسلوكي'],
  },
  {
    title: 'خطة درس الجملة الاسمية والفعلية',
    outcome: 'يميز الطالب بين الجملة الاسمية والجملة الفعلية في أمثلة بسيطة، ويصنف جملاً قصيرة.',
    steps: ['أمثلة على اللوح', 'شرح مبسط بالصور', 'بطاقات أسماء وأفعال', 'تصنيف جماعي', 'بطاقة خروج'],
  },
];

const references = [
  'وزارة التربية والتعليم. (د.ت). الإطار الوطني لكفاءات التربويين. دولة الإمارات العربية المتحدة.',
  'وزارة التربية والتعليم. (2023). معايير المعلم المهنية. دولة الإمارات العربية المتحدة.',
  'الحربي، صالح. (2018). الممارسة التأملية المهنية وعلاقتها بفاعلية الذات للمعلمين. مجلة العلوم التربوية.',
  'محمد، علي حسن. (2020). أثر التدريس التشاركي في تنمية التحصيل والتفكير لدى الطلبة. المجلة التربوية.',
  'Tomlinson, C. A. (2017). How to differentiate instruction in academically diverse classrooms. ASCD.',
  'Brookfield, S. D. (2017). Becoming a critically reflective teacher. Jossey-Bass.',
];

function SectionTitle({ eyebrow, title, text }: { eyebrow: string; title: string; text?: string }) {
  return (
    <div className="section-title">
      <span>{eyebrow}</span>
      <h2>{title}</h2>
      {text && <p>{text}</p>}
    </div>
  );
}

export default function Home() {
  return (
    <main>
      <header className="site-header">
        <a className="brand" href="#home"><GraduationCap size={28} /> ملف الإنجاز الإلكتروني</a>
        <nav className="nav">
          {navItems.map(([label, id]) => <a key={id} href={`#${id}`}>{label}</a>)}
        </nav>
        <button className="mobile-menu" aria-label="menu"><Menu /></button>
      </header>

      <section id="home" className="hero section">
        <div className="hero-text">
          <span className="badge"><Sparkles size={16} /> E-Portfolio Journey</span>
          <h1>ملف الإنجاز الإلكتروني</h1>
          <h2>رحلة تطوري في الممارسات المهنية للمعلم</h2>
          <p>
            يوثق هذا الموقع رحلتي المهنية في التخطيط، والتنفيذ، والتقييم، والتأمل، والنمو المستمر،
            وفق متطلبات ملف الإنجاز ومعايير الإطار الوطني لكفاءات التربويين.
          </p>
          <div className="hero-actions">
            <a className="btn primary" href="#framework">استكشف الملف</a>
            <a className="btn ghost" href="#evidence">عرض الأدلة</a>
          </div>
        </div>
        <div className="profile-panel">
          <div className="avatar"><Medal size={54} /></div>
          <dl>
            <div><dt>اسم الطالبة</dt><dd>{profile.studentName}</dd></div>
            <div><dt>الجامعة</dt><dd>{profile.college}</dd></div>
            <div><dt>البرنامج</dt><dd>{profile.program}</dd></div>
            <div><dt>العام الدراسي</dt><dd>{profile.academicYear}</dd></div>
            <div><dt>التخصص</dt><dd>{profile.specialization}</dd></div>
            <div><dt>المدرسة</dt><dd>{profile.school}</dd></div>
          </dl>
        </div>
      </section>

      <section id="framework" className="section soft-bg">
        <SectionTitle eyebrow="الإطار الوطني" title="مواءمة الملف مع كفاءات التربويين" text="يعرض الملف الأدلة والتأملات وفق أربعة محاور رئيسية: السلوك المهني والأخلاقي، المتعاون مع المجتمع، المهني الفعال، وصانع المستقبل." />
        <div className="card-grid four">
          {cards.map((card) => {
            const Icon = card.icon;
            return <article className="feature-card" key={card.title}><Icon /><h3>{card.title}</h3><p>{card.text}</p></article>;
          })}
        </div>
      </section>

      <section id="about" className="section two-columns">
        <div>
          <SectionTitle eyebrow="نبذة عني" title="معلمة متأملة تركز على أثر التعلم" />
          <p>
            أعمل على تدريس اللغة العربية لطلبة الصف الأول، وأؤمن بأن هذه المرحلة تمثل أساس بناء علاقة الطفل باللغة.
            لذلك أحرص على تصميم دروس قائمة على المشاركة، والقراءة التفاعلية، والحوار، والأنشطة القصيرة التي تراعي الفروق الفردية.
          </p>
          <p>
            أتعامل مع ملف الإنجاز بوصفه مساحة مهنية توثق تطوري، وليس مجرد تجميع للأنشطة. فهو يوضح كيف أخطط للتعلم،
            وكيف ألاحظ أداء الطلبة، وكيف أستخدم نتائج التقييم لتحسين ممارساتي التعليمية.
          </p>
        </div>
        <div className="quote-card">
          <Lightbulb />
          <blockquote>
            “المعلم المتميز لا يكتفي بتنفيذ الدرس، بل يتأمل أثره في تعلم الطلبة، ويطور ممارساته بناءً على الأدلة.”
          </blockquote>
        </div>
      </section>

      <section id="ethics" className="section soft-bg">
        <SectionTitle eyebrow="المعيار الأول" title="السلوك المهني والأخلاقي" text="نموذج التقييم النهائي من المرشد المدرسي SLEF يعكس الالتزام المهني، التعاون، الاحترام، والنزاهة." />
        <div className="score-layout">
          <div className="score-list">
            {slefItems.map(([name, score]) => <div className="score-row" key={name}><span>{name}</span><strong>{score}</strong></div>)}
          </div>
          <div className="final-score">
            <span>النتيجة النهائية</span>
            <strong>4.7</strong>
            <p>من 5.00 - مستوى ممتاز</p>
          </div>
        </div>
        {/* تقييم المرشد الأكاديمي */}
        <div className="evidence-grid" style={{marginTop:'1.5rem'}}>
          <article className="evidence-card">
            <FileText />
            <h3>تقييم المرشد الأكاديمي</h3>
            <p>نموذج تقييم المرشد الأكاديمي للأداء المهني خلال فترة التدريب</p>
            <a href="/evidence/ITEF.pdf" target="_blank" rel="noopener noreferrer" className="evidence-link">عرض الدليل</a>
          </article>
        </div>
        {/* بطاقة الحضور والمشاركة والمشاهدات */}
        <article className="evidence-card attendance-card" style={{ marginTop: '1.5rem', maxWidth: '100%', width: '100%' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.75rem' }}>
            <CalendarCheck size={32} style={{ color: 'var(--primary)' }} />
            <h3 style={{ margin: 0 }}>جدول الحضور</h3>
          </div>
          <p style={{ marginBottom: '0.5rem', color: 'var(--text-muted)' }}>
            توثق هذه السجلات مشاركة المتدربة الأسبوعية خلال فترة التدريب الميداني في مدرسة الرياحين.
          </p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem' }}>
            <a href="/evidence/week%201.pdf" target="_blank" rel="noopener noreferrer" className="btn ghost" style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', fontSize: '0.9rem' }}><FileText size={16} />الأسبوع الأول</a>
            <a href="/evidence/week%202.pdf" target="_blank" rel="noopener noreferrer" className="btn ghost" style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', fontSize: '0.9rem' }}><FileText size={16} />الأسبوع الثاني</a>
            <a href="/evidence/week%203.pdf" target="_blank" rel="noopener noreferrer" className="btn ghost" style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', fontSize: '0.9rem' }}><FileText size={16} />الأسبوع الثالث</a>
            <a href="/evidence/week%204.pdf" target="_blank" rel="noopener noreferrer" className="btn ghost" style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', fontSize: '0.9rem' }}><FileText size={16} />الأسبوع الرابع</a>
            <a href="/evidence/week%205.pdf" target="_blank" rel="noopener noreferrer" className="btn ghost" style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', fontSize: '0.9rem' }}><FileText size={16} />الأسبوع الخامس</a>
            <a href="/evidence/week%206.pdf" target="_blank" rel="noopener noreferrer" className="btn ghost" style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', fontSize: '0.9rem' }}><FileText size={16} />الأسبوع السادس</a>
            <a href="/evidence/week%207.pdf" target="_blank" rel="noopener noreferrer" className="btn ghost" style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', fontSize: '0.9rem' }}><FileText size={16} />الأسبوع السابع</a>
            <a href="/evidence/week%209.pdf" target="_blank" rel="noopener noreferrer" className="btn ghost" style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', fontSize: '0.9rem' }}><FileText size={16} />الأسبوع التاسع</a>
            <a href="/evidence/week%2010.pdf" target="_blank" rel="noopener noreferrer" className="btn ghost" style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', fontSize: '0.9rem' }}><FileText size={16} />الأسبوع العاشر</a>
            <a href="/evidence/week%2011.pdf" target="_blank" rel="noopener noreferrer" className="btn ghost" style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', fontSize: '0.9rem' }}><FileText size={16} />الأسبوع الحادي عشر</a>
          </div>
        </article>
      </section>

      <section id="knowledge" className="section">
        <SectionTitle eyebrow="المعيار الثاني" title="المتعاون مع المجتمع" />
        <div className="rich-text">
          <p>
            تظهر المعرفة المهنية من خلال فهمي لخصائص طلبة الصف الأول واحتياجاتهم اللغوية والنمائية. فالطلبة في هذه المرحلة يحتاجون إلى تعلم بصري وسمعي وحركي،
            ويحتاجون إلى تكرار منظم، وتعزيز إيجابي، وأنشطة قصيرة تحافظ على انتباههم.
          </p>
          <p>
            لذلك وظفت استراتيجيات مثل القراءة التشاركية، والتعلم التعاوني، وتمثيل المواقف، والبطاقات التعليمية. كما حرصت على ربط محتوى اللغة العربية بالقيم والسلوك،
            مثل درس التسامح، حتى يصبح التعلم ذا معنى وقريباً من حياة الطلبة.
          </p>
        </div>
      </section>

      <section id="practice" className="section soft-bg">
        <SectionTitle eyebrow="المعيار الثالث" title="المهني الفعال" text="توضح الخطط كيفية تحويل المعرفة المهنية إلى إجراءات تدريسية قابلة للتنفيذ والتقييم." />
        <div className="lesson-grid">
          {lessonPlans.map((lesson, index) => (
            <article className="lesson-card" key={lesson.title}>
              <span className="lesson-number">0{index + 1}</span>
              <h3>{lesson.title}</h3>
              <p>{lesson.outcome}</p>
              <ul>{lesson.steps.map((step) => <li key={step}>{step}</li>)}</ul>
            </article>
          ))}
        </div>
        {/* بطاقة المشاهدات I-LOR */}
        <article className="evidence-card attendance-card" style={{ marginTop: '2rem', maxWidth: '100%', width: '100%' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.75rem' }}>
            <CalendarCheck size={32} style={{ color: 'var(--primary)' }} />
            <h3 style={{ margin: 0 }}>المشاركة الأسبوعية و المشاهدات I-LOR في مدرسة التدريب المهني</h3>
          </div>
          <p style={{ marginBottom: '0.5rem', color: 'var(--text-muted)', fontWeight: '600' }}>المشاهدات I-LOR:</p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem' }}>
            <a href="/evidence/L-1.pdf" target="_blank" rel="noopener noreferrer" className="btn ghost" style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', fontSize: '0.9rem' }}><FileText size={16} />المشاهدة الأولى</a>
            <a href="/evidence/L-2.pdf" target="_blank" rel="noopener noreferrer" className="btn ghost" style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', fontSize: '0.9rem' }}><FileText size={16} />المشاهدة الثانية</a>
            <a href="/evidence/L-3.pdf" target="_blank" rel="noopener noreferrer" className="btn ghost" style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', fontSize: '0.9rem' }}><FileText size={16} />المشاهدة الثالثة</a>
            <a href="/evidence/L-4.pdf" target="_blank" rel="noopener noreferrer" className="btn ghost" style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', fontSize: '0.9rem' }}><FileText size={16} />المشاهدة الرابعة</a>
          </div>
        </article>
      </section>

      <section id="growth" className="section two-columns">
        <div>
          <SectionTitle eyebrow="المعيار الرابع" title="صانع المستقبل" />
          <p>
            ساعدتني الملاحظات الصفية والتقييم الذاتي على الانتقال من التركيز على تنفيذ خطوات الدرس إلى التركيز على أثر التعلم.
            أصبحت أسأل نفسي بعد كل درس: ما الذي تعلمه الطلبة؟ ما الأدلة؟ من يحتاج إلى دعم؟ وكيف أعدل الدرس القادم؟
          </p>
          <p>
            تركز خطتي المهنية القادمة على تطوير التقييم التكويني، وتعزيز التعليم المتمايز، وتوظيف التكنولوجيا بطريقة تدعم التعلم،
            وجمع أدلة مستمرة من أعمال الطلبة ونتائج التقييم.
          </p>
        </div>
        <div className="goal-card">
          <Target />
          <h3>أهداف التطوير</h3>
          <ol>
            <li>تصميم أدوات تقييم تكويني لكل درس.</li>
            <li>إعداد أنشطة بمستويات دعم وإثراء.</li>
            <li>استخدام أدوات رقمية مناسبة للصف الأول.</li>
            <li>توثيق أدلة تعلم الطلبة بشكل دوري.</li>
          </ol>
        </div>
      </section>
      {/* مدونات تأملية - المعيار الرابع */}
      <section className="section" style={{paddingTop: 0}}>
        <article className="evidence-card attendance-card" style={{ maxWidth: '100%', width: '100%' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.75rem' }}>
            <FileText size={32} style={{ color: 'var(--primary)' }} />
            <h3 style={{ margin: 0 }}>المدونات التأملية</h3>
          </div>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem' }}>
            <a href="/evidence/M%201.pdf" target="_blank" rel="noopener noreferrer" className="btn ghost" style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', fontSize: '0.9rem' }}><FileText size={16} />المدونة الأولى</a>
            <a href="/evidence/M%202.pdf" target="_blank" rel="noopener noreferrer" className="btn ghost" style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', fontSize: '0.9rem' }}><FileText size={16} />المدونة الثانية</a>
            <a href="/evidence/M%203.pdf" target="_blank" rel="noopener noreferrer" className="btn ghost" style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', fontSize: '0.9rem' }}><FileText size={16} />المدونة الثالثة</a>
            <a href="/evidence/M%204.pdf" target="_blank" rel="noopener noreferrer" className="btn ghost" style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', fontSize: '0.9rem' }}><FileText size={16} />المدونة الرابعة</a>
          </div>
        </article>
      </section>

      {/* شهادات - المعيار الرابع */}
      <section className="section" style={{paddingTop: 0}}>
        <h3 style={{ marginBottom: '1rem', color: 'var(--primary-dark)', textAlign: 'right' }}>شهادات</h3>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem' }}>
          <a href="/evidence/Cert%201.JPG" target="_blank" rel="noopener noreferrer">
            <img src="/evidence/Cert%201.JPG" alt="شهادة 1" style={{ width: '220px', borderRadius: '8px', border: '1px solid #ddd' }} />
          </a>
          <a href="/evidence/Cert%202.JPG" target="_blank" rel="noopener noreferrer">
            <img src="/evidence/Cert%202.JPG" alt="شهادة 2" style={{ width: '220px', borderRadius: '8px', border: '1px solid #ddd' }} />
          </a>
          <a href="/evidence/Cert%203.JPG" target="_blank" rel="noopener noreferrer">
            <img src="/evidence/Cert%203.JPG" alt="شهادة 3" style={{ width: '220px', borderRadius: '8px', border: '1px solid #ddd' }} />
          </a>
          <a href="/evidence/Cert%204.JPG" target="_blank" rel="noopener noreferrer">
            <img src="/evidence/Cert%204.JPG" alt="شهادة 4" style={{ width: '220px', borderRadius: '8px', border: '1px solid #ddd' }} />
          </a>
          <a href="/evidence/Cert%205.JPG" target="_blank" rel="noopener noreferrer">
            <img src="/evidence/Cert%205.JPG" alt="شهادة 5" style={{ width: '220px', borderRadius: '8px', border: '1px solid #ddd' }} />
          </a>
          <a href="/evidence/Cert%206.JPG" target="_blank" rel="noopener noreferrer">
            <img src="/evidence/Cert%206.JPG" alt="شهادة 6" style={{ width: '220px', borderRadius: '8px', border: '1px solid #ddd' }} />
          </a>
          <a href="/evidence/Cert%20group.JPG" target="_blank" rel="noopener noreferrer">
            <img src="/evidence/Cert%20group.JPG" alt="صورة جماعية" style={{ width: '220px', borderRadius: '8px', border: '1px solid #ddd' }} />
          </a>
        </div>
      </section>

      {/* استخدام التكنولوجيا - المعيار الرابع */}
      <section className="section" style={{paddingTop: 0}}>
        <h3 style={{ marginBottom: '1rem', color: 'var(--primary-dark)', textAlign: 'right' }}>استخدام التكنولوجيا بالغرفة الصفية</h3>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem' }}>
          <a href="/evidence/t%201.jpeg" target="_blank" rel="noopener noreferrer">
            <img src="/evidence/t%201.jpeg" alt="تكنولوجيا 1" style={{ width: '220px', borderRadius: '8px', border: '1px solid #ddd' }} />
          </a>
          <a href="/evidence/t%202.jpeg" target="_blank" rel="noopener noreferrer">
            <img src="/evidence/t%202.jpeg" alt="تكنولوجيا 2" style={{ width: '220px', borderRadius: '8px', border: '1px solid #ddd' }} />
          </a>
          <a href="/evidence/t%203.jpeg" target="_blank" rel="noopener noreferrer">
            <img src="/evidence/t%203.jpeg" alt="تكنولوجيا 3" style={{ width: '220px', borderRadius: '8px', border: '1px solid #ddd' }} />
          </a>
        </div>
      </section>

      <section id="evidence" className="section soft-bg">
        <SectionTitle eyebrow="أدلة الإنجاز" title="معرض الأدلة والمرفقات" text="يمكن لاحقاً استبدال هذه البطاقات بصور حقيقية، ملفات PDF، شهادات، نماذج أعمال الطلبة، وأدوات التقييم." />
        <div className="evidence-grid">
          {['خطة درس القراءة التشاركية', 'بطاقة تقييم القراءة', 'نشاط قيمة التسامح', 'درس الجملة الاسمية والفعلية', 'نماذج من أعمال الطلبة', 'شهادات أو ورش مهنية'].map((item) => (
            <article className="evidence-card" key={item}>
              <FileText />
              <h3>{item}</h3>
              <p>وصف مختصر للدليل، علاقته بمخرجات التعلم، وكيف يثبت تطور الممارسة المهنية.</p>
            </article>
          ))}
        </div>
      </section>

      <section id="references" className="section">
        <SectionTitle eyebrow="APA 7" title="قائمة المراجع" text="المراجع المقترحة لدعم المحتوى الأكاديمي والتأملي لملف الإنجاز." />
        <ol className="references-list">
          {references.map((ref) => <li key={ref}>{ref}</li>)}
        </ol>
      </section>

      <footer className="footer">
        <div>
          <h3>{profile.studentName}</h3>
          <p>ملف الإنجاز الإلكتروني للتدريب العملي</p>
        </div>
        <div>
          <h4>معلومات التواصل</h4>
          <p dir="ltr" style={{textAlign:'right'}}>{profile.email}</p>
          <p>دولة الإمارات العربية المتحدة</p>
        </div>
        <div>
          <h4>روابط سريعة</h4>
          <a href="#framework">الإطار الوطني</a>
          <a href="#practice">المهني الفعال</a>
          <a href="#evidence">الأدلة</a>
        </div>
      </footer>
    </main>
  );
}
