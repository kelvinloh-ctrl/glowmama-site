import { Play, Heart, MessageCircle, Star, Check, ArrowRight, MapPin, Phone, User, ChevronDown } from 'lucide-react';
import { useState, useEffect } from 'react';
// ⚠️ Image placeholders — Kelvin: export from Figma → drop in /public/images/ → paths auto-resolve.
// Filenames already match — no code change needed after you drop the PNGs.
const heroImage = '/images/hero.png';
const issuesImage1 = '/images/issues.png';
const founderImage = '/images/founder.png';
const testimonialImage1 = '/images/testimonial.png';
const ruienBeforeAfter = '/images/ba-ruien.png';
const vanessaBeforeAfter = '/images/ba-vanessa.png';
const evonBeforeAfter = '/images/ba-evon.png';
const glowmamaLogo = '/images/glowmama-logo.png';
const fitcomLogo = '/images/fitcom-logo.png';
const fitcomLocationImage = '/images/fitcom-location.png';

export function Landing() {
  const [activeTab, setActiveTab] = useState<'zh' | 'en'>('zh');
  const [openFAQIndex, setOpenFAQIndex] = useState<number | null>(null);
  const [showShortcutGuide, setShowShortcutGuide] = useState(false);

  // Scroll to section helper
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const navHeight = 80; // Navigation bar height
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navHeight;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  // Keyboard shortcuts for quick navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Don't trigger shortcuts if user is typing in an input
      if (e.target instanceof HTMLInputElement || e.target instanceof HTMLTextAreaElement) {
        return;
      }

      // Arrow Up: Scroll up
      if (e.key === 'ArrowUp') {
        e.preventDefault();
        window.scrollBy({ top: -window.innerHeight * 0.8, behavior: 'smooth' });
      }
      // Arrow Down: Scroll down
      if (e.key === 'ArrowDown') {
        e.preventDefault();
        window.scrollBy({ top: window.innerHeight * 0.8, behavior: 'smooth' });
      }
      // Home: Scroll to top
      if (e.key === 'Home') {
        e.preventDefault();
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
      // End: Scroll to bottom
      if (e.key === 'End') {
        e.preventDefault();
        window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
      }
      
      // Number keys: Jump to sections
      if (e.key === '1') scrollToSection('hero');
      if (e.key === '2') scrollToSection('issues');
      if (e.key === '3') scrollToSection('founder');
      if (e.key === '4') scrollToSection('testimonials');
      if (e.key === '5') scrollToSection('training');
      if (e.key === '6') scrollToSection('pricing');
      if (e.key === '7') scrollToSection('faq');
      if (e.key === '8') scrollToSection('contact');
      
      // ? key: Toggle shortcut guide
      if (e.key === '?' || (e.shiftKey && e.key === '/')) {
        e.preventDefault();
        setShowShortcutGuide(prev => !prev);
      }
      
      // Escape: Close shortcut guide
      if (e.key === 'Escape') {
        setShowShortcutGuide(false);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  // Content translations
  const content = {
    zh: {
      // Navigation
      contactCTA: '立即联系',
      
      // Keyboard Shortcuts Guide
      shortcutGuideTitle: '键盘快捷键',
      shortcutGuideSubtitle: '快速浏览页面',
      shortcuts: [
        { key: '1', description: '首页 / 英雄区域' },
        { key: '2', description: '了解产后问题' },
        { key: '3', description: '创始人故事' },
        { key: '4', description: '学员见证' },
        { key: '5', description: '4天训练营' },
        { key: '6', description: '定价方案' },
        { key: '7', description: '常见问题' },
        { key: '8', description: '联系方式' },
        { key: '↑/↓', description: '上下滚动' },
        { key: 'Home/End', description: '页首/页尾' },
        { key: '?', description: '显示/隐藏此指南' }
      ],
      
      // Hero Section
      heroTitle1: '你的身体孕育了',
      heroTitle2: '一个奇迹。',
      heroTitle3: '让它重新发光！',
      heroDescription: '专注于产后康复修复与体态重塑，通过科学的呼吸训练、骨盆稳定和核心激活，帮助妈妈们找回自信健康，自信拥有无缝生活。',
      heroCTA1: '立即预约',
      heroCTA2: '了解产后问题',
      
      // Video Section
      videoTitle: '真实案例分享',
      videoSubtitle: '看看其他妈妈的康复旅程',
      
      // Post-pregnancy Issues
      issuesTitle: '产后没人告诉你的事',
      issuesSubtitle: '如果不及时处理，你的身体会面临这些问题',
      issues: [
        {
          title: '骨盆底肌问题',
          symptoms: ['尿失禁', '阴部疼痛', '骨盆压力下降']
        },
        {
          title: '腹直肌分离',
          symptoms: ['小腹突出', '核心力量弱']
        },
        {
          title: '疼痛症状',
          symptoms: ['腰背痛', '耻骨联合疼痛', '盆底疼痛']
        },
        {
          title: '心理影响',
          symptoms: ['焦虑不安', '自信心下降', '情绪低落']
        }
      ],
      
      // Founder Story
      founderTitle: '我的故事',
      founderPara1: '我是两个孩子的妈妈，也是一名从业超过6年的健身教练。在还没生孩子之前，我一直以为——只要有运动习惯，身体就不会出问题。但真正经历怀孕和产后，我才发现：核心失去力量、骨盆无法稳定、身体不再受控。',
      founderPara2: '那种感觉不是变胖而已，而是——你开始不认识自己的身体。',
      founderPara3: '最难的，不是恢复，是"怀疑自己"。',
      founderPara4: '作为一名教练，我比别人多一层压力："如果我都恢复不好，我还能帮助别人吗？"那段时间，我经历过焦虑、怀疑、也走过很多弯路。但我没有依赖任何产品，也没有走捷径，只是一件一件，把身体重新建立起来。',
      founderPara5: '慢慢地，我发现：不是只有身材在改变，而是腰痛消失了、身体更稳定了、日常动作变轻松了、精神状态也回来了。我重新拿回了对身体的掌控感。',
      founderPara6: '也因为这段经历，我更能理解女性，也希望帮助更多女性——特别是产后妈妈。我做的从来不只是"让她们瘦"——而是让她们重新理解身体、掌控身体。',
      
      // Social Proof
      socialProofTitle: '6年·500位学员',
      socialProofSubtitle: '从这里开始，学员真实反馈',
      socialProofDescription: '6年来，我们帮助500多位妈妈解决产后烦恼，重拾体态、重获自信。每一位学员的改变，都是我们坚持的动力。',
      
      // Student Testimonials
      testimonialsTitle: '学员见证',
      testimonials: [
        {
          name: 'Rui En',
          subtitle: '3个孩子的妈妈',
          before: '腹痛呼吸困难，盆骨无力',
          after: '长期腹痛消失，疤痕疼痛缓解',
          quote: '"产后腰痛困扰了我3年，参加康复课程后终于解决了。跟着Carol学习了很长一段时间，明显感觉身体力量增加了很多。"'
        },
        {
          name: 'Vanessa',
          subtitle: '上班族妈妈',
          before: '小腹突出，盆骨不稳',
          after: '体态改善，身姿更挺拔',
          quote: '"生完孩子后，小腹一直是我最大的心结。跟着 Carol 训练后，不只是肚子平了——整个人的状态都不一样了。两个月，减了 6kg，产后的问题也改善了很多。没想到健身可以让我重新找回自己。"'
        },
        {
          name: 'Evon',
          subtitle: '职业妈妈',
          before: '备孕第1胎时开始训练',
          after: '第2胎产后依然保持良好状态',
          quote: '"从备孕第1胎到第2胎产后，已经跟了我4年训练。Carol的专业指导让我在孕期和产后都能保持最佳状态。"'
        }
      ],
      beforeLabel: '之前：',
      afterLabel: '之后：',
      
      // Student Reviews
      reviewsTitle: '学员好评',
      reviews: [
        { author: 'Jennifer', text: '"Carol的课程非常专业，效果惊人，推荐给所有产后妈妈！"' },
        { author: 'Michelle', text: '"一对一的指导让我受益匪浅，课程设计很合理。"' },
        { author: 'Sarah', text: '"系统化的运动组合让我的身体更健康更有活力。"' },
        { author: 'Emily', text: '"Carol的耐心和专业让我重拾信心。"' },
        { author: 'Jessica', text: '"最好的产后康复课程，值得每一分钱。"' },
        { author: 'Victoria', text: '"坚持下来真的会看到改变，非常满意！"' }
      ],
      
      // 4-Day Training Camp
      trainingTitle: '4天精品训练营',
      trainingDate: '6月6日开课',
      trainingSubtitle: '改善疼痛问题，重塑产后体态',
      trainingDays: [
        {
          day: 'Day 1',
          title: '呼吸复位',
          description: '核心基础训练，找回腹部力量'
        },
        {
          day: 'Day 2',
          title: '激活+稳定',
          description: '唤醒深层盆底肌与骨盆肌肉'
        },
        {
          day: 'Day 3',
          title: '核心收紧',
          description: '改善腹直肌分离导致的小腹突垂'
        },
        {
          day: 'Day 4',
          title: '整合+信心',
          description: '巩固基础动作，开启瘦身运动'
        }
      ],
      
      // Featured Pricing
      featuredPrice: '联络我免费获取更多资讯',
      featuredDescription: '包含4节课程 + Carol教练指导 + 个性化修复方案',
      featuredFeatures: [
        '4天专业训练营',
        'Carol教练贴身指导',
        '针对性个性化指导',
        '完整修复方案'
      ],
      featuredCTA: '联络我',
      
      // Location & Contact
      locationTitle: '课程地点 & 联系方式',
      locationName: 'Fitcom Fitness (HQ, Melaka)',
      locationAddress: '培训地点：',
      locationAddressDetail: 'No 2-1, Jalan KLJ 1-C, Taman Kota Laksamana Jaya, 75200 Melaka',
      locationPhone: '联系方式：',
      locationPhoneNumber: '0149727123',
      locationSpecialty: '专业领域：',
      locationSpecialtyDetail: 'Carol 乐乐教练亲授 / 针对性个体指导',
      
      // All Pricing Options
      pricingTitle: '不只是训练营',
      pricingSubtitle: '还有更多，适合你的方案',
      pricingOptions: [
        {
          badge: '线上测试课',
          title: '30分钟',
          subtitle: '体态评估 + 个性化方案',
          price: 'RM 49',
          features: [
            '专业体态分析',
            '问题诊断',
            '定制康复方案',
            '线上进行'
          ]
        },
        {
          badge: '最受欢迎',
          title: '线上21天体态塑形',
          subtitle: '15-20分钟/天',
          price: 'RM 599',
          features: [
            '21天系统训练',
            '22个视频详细讲解',
            '进度追踪',
            '专属社群支持'
          ]
        },
        {
          badge: '线上/线下私教课',
          title: '灵活安排',
          subtitle: '一对一个性化方案',
          price: '',
          features: [
            '完全个性化方案',
            '实时指导',
            '一对一专业',
            '线上线下可选'
          ]
        }
      ],
      pricingCTA: '立即预约',
      
      // FAQ
      faqTitle: '常见问题',
      faqs: [
        {
          question: '我完全没有基础，会跟不上吗？',
          answer: '不会。这里没有人会评判你，所有动作都有退阶版本。8个人，教练全程看着你，按你的状态调整。'
        },
        {
          question: '我试过很多次都放弃了',
          answer: '以前放弃，大概率是没有系统，盲目的练也不知道对还是错。有教练每堂追踪你，放弃比较难。'
        },
        {
          question: '我有旧伤，可以吗？',
          answer: '可以。报名前告知教练，动作会根据你的状况调整。'
        },
        {
          question: '付款后会怎样？',
          answer: 'Carol 乐乐会先 Whatsapp 跟你联系，聊聊你的情况，并安排接下来的步骤。'
        },
        {
          question: '一个月训练多少次？',
          answer: '建议一周训练2-3次，我们会按照你的要求安排。'
        },
        {
          question: '需要到健身房吗？',
          answer: '课程适合健身房和居家训练。居家训练有可调哑铃/悬挂训练带就可以开始。'
        },
        {
          question: '线上课如何确保姿势正确？',
          answer: '有示范动作供参考，教练会逐一为你提供动作反馈和改进建议，确保你练得对、练得安全。'
        },
        {
          question: '如何付款？',
          answer: '点击Whatsapp链接(0149727123) 私信获取付款链接 。'
        }
      ],
      
      // Footer CTA
      footerCTATitle: '准备好开始你的康复旅程了吗？',
      footerCTASubtitle: '让我们一起找回你的力量和自信',
      footerCTAButton: '立即开始',
      
      // Footer
      footerCopyright: '版权所有 ©2026 GlowMama. 保留所有权利。',
      footerPoweredBy: '技术支持：'
    },
    en: {
      // Navigation
      contactCTA: 'Contact Now',
      
      // Keyboard Shortcuts Guide
      shortcutGuideTitle: 'Keyboard Shortcuts',
      shortcutGuideSubtitle: 'Navigate quickly',
      shortcuts: [
        { key: '1', description: 'Home / Hero Section' },
        { key: '2', description: 'Postpartum Issues' },
        { key: '3', description: 'Founder Story' },
        { key: '4', description: 'Student Testimonials' },
        { key: '5', description: '4-Day Training Camp' },
        { key: '6', description: 'Pricing Options' },
        { key: '7', description: 'FAQ' },
        { key: '8', description: 'Contact Info' },
        { key: '↑/↓', description: 'Scroll up/down' },
        { key: 'Home/End', description: 'Top/Bottom' },
        { key: '?', description: 'Show/Hide this guide' }
      ],
      
      // Hero Section
      heroTitle1: 'Your body created',
      heroTitle2: 'a miracle.',
      heroTitle3: 'Let it shine again!',
      heroDescription: 'Specialized in postpartum recovery and body reshaping through scientific breathing training, pelvic stability, and core activation, helping moms regain confidence, health, and seamless living.',
      heroCTA1: 'Book Now',
      heroCTA2: 'Learn About Postpartum Issues',
      
      // Video Section
      videoTitle: 'Real Success Stories',
      videoSubtitle: 'See other moms\' recovery journeys',
      
      // Post-pregnancy Issues
      issuesTitle: 'What Nobody Tells You About Postpartum',
      issuesSubtitle: 'If left untreated, your body may face these challenges',
      issues: [
        {
          title: 'Pelvic Floor Issues',
          symptoms: ['Urinary incontinence', 'Pelvic pain', 'Pelvic pressure']
        },
        {
          title: 'Diastasis Recti',
          symptoms: ['Belly pooch', 'Weak core strength']
        },
        {
          title: 'Pain Symptoms',
          symptoms: ['Lower back pain', 'Pubic symphysis pain', 'Pelvic floor pain']
        },
        {
          title: 'Mental Impact',
          symptoms: ['Anxiety', 'Low confidence', 'Mood swings']
        }
      ],
      
      // Founder Story
      founderTitle: 'My Story',
      founderPara1: 'I\'m a mother of two and a postpartum recovery therapist. Before having children, I thought staying active would prevent any issues. But after experiencing pregnancy and childbirth, I discovered: postpartum recovery isn\'t simply about "getting moving" — your body needs the right approach. Core weakness, pelvic instability, loss of body control.',
      founderPara2: 'The hardest part wasn\'t the physical pain, but the feeling of not recognizing myself.',
      founderPara3: 'The challenge isn\'t recovery — it\'s "finding yourself again."',
      founderPara4: 'As a therapist, I felt pressure: "If I can\'t recover properly, how can I help others?" During that time, I searched for answers in books and courses, but what really helped me was a teacher\'s advice: "Take back control of your body."',
      founderPara5: 'Gradually, I realized: it wasn\'t just about body shape — my muscles woke up, strength returned, movements became controlled, and my mental state improved. I regained control of my body.',
      founderPara6: 'Because of this experience, I deeply understand every mother\'s anxiety and frustration. Now my mission is to share this method with more moms — especially postpartum moms — helping them not just "bounce back," but truly take control of their bodies and enjoy healthy living.',
      
      // Social Proof
      socialProofTitle: '6 Years · 500+ Students',
      socialProofSubtitle: 'Start here, real student feedback',
      socialProofDescription: 'Over 6 years, we\'ve helped 500+ moms solve postpartum challenges, regain their body confidence. Every student\'s transformation motivates us to continue.',
      
      // Student Testimonials
      testimonialsTitle: 'Student Testimonials',
      testimonials: [
        {
          name: 'Rui En',
          subtitle: 'Mother of 3',
          before: 'Abdominal pain, breathing difficulties, weak pelvis',
          after: 'Chronic pain resolved, scar pain relieved',
          quote: '"Postpartum back pain bothered me for 3 years. After the recovery program, it finally resolved. Training with Carol for a long time, I clearly feel my body strength has increased significantly."'
        },
        {
          name: 'Vanessa',
          subtitle: 'Working Mom',
          before: 'Belly pooch, unstable pelvis',
          after: 'Improved posture, better alignment',
          quote: '"After giving birth, my belly was always my biggest insecurity. Training with Carol changed everything—not just a flatter stomach, but my whole body transformed. In 2 months, I lost 6kg and my postpartum issues improved significantly. I never knew fitness could help me find myself again."'
        },
        {
          name: 'Evon',
          subtitle: 'Working Mom',
          before: 'Started training while preparing for 1st pregnancy',
          after: 'Maintaining great shape after 2nd baby',
          quote: '"From preparing for my 1st pregnancy to postpartum recovery of my 2nd baby, I\'ve been training with Carol for 4 years. Her professional guidance has helped me maintain optimal condition through pregnancy and postpartum."'
        }
      ],
      beforeLabel: 'Before: ',
      afterLabel: 'After: ',
      
      // Student Reviews
      reviewsTitle: 'Student Reviews',
      reviews: [
        { author: 'Jennifer', text: '"Carol\'s program is very professional with amazing results, highly recommend to all postpartum moms!"' },
        { author: 'Michelle', text: '"The one-on-one guidance was incredibly beneficial, well-structured program."' },
        { author: 'Sarah', text: '"The systematic exercise combinations made my body healthier and more energetic."' },
        { author: 'Emily', text: '"Carol\'s patience and expertise helped me regain confidence."' },
        { author: 'Jessica', text: '"Best postpartum recovery program, worth every penny."' },
        { author: 'Victoria', text: '"Sticking with it really shows results, very satisfied!"' }
      ],
      
      // 4-Day Training Camp
      trainingTitle: '4-Day Intensive Training Camp',
      trainingDate: 'Starting June 6th',
      trainingSubtitle: 'Relieve pelvic pain, reshape postpartum body',
      trainingDays: [
        {
          day: 'Day 1',
          title: 'Breath Reset',
          description: 'Core foundation training, restore abdominal strength'
        },
        {
          day: 'Day 2',
          title: 'Activate + Stabilize',
          description: 'Awaken deep pelvic floor & pelvic muscles'
        },
        {
          day: 'Day 3',
          title: 'Core Tightening',
          description: 'Core training to improve diastasis recti'
        },
        {
          day: 'Day 4',
          title: 'Integration + Confidence',
          description: 'Consolidate basics, start fitness journey'
        }
      ],
      
      // Featured Pricing
      featuredPrice: 'Contact me for more info',
      featuredDescription: 'Includes 4 sessions + Carol\'s coaching + Personalized recovery plan',
      featuredFeatures: [
        '4-day professional training camp',
        'Carol\'s personal coaching',
        'Targeted personalized guidance',
        'Complete recovery plan'
      ],
      featuredCTA: 'Contact Me',
      
      // Location & Contact
      locationTitle: 'Course Location & Contact',
      locationName: 'Fitcom Fitness (HQ, Melaka)',
      locationAddress: 'Training Location:',
      locationAddressDetail: 'No 2-1, Jalan KLJ 1-C, Taman Kota Laksamana Jaya, 75200 Melaka',
      locationPhone: 'Contact:',
      locationPhoneNumber: '0149727123',
      locationSpecialty: 'Specialty:',
      locationSpecialtyDetail: 'Taught by Coach Carol / Targeted Individual Guidance',
      
      // All Pricing Options
      pricingTitle: 'More Than Just a Training Camp',
      pricingSubtitle: 'Find the perfect plan for you',
      pricingOptions: [
        {
          badge: 'Online Trial Class',
          title: '30 Minutes',
          subtitle: 'Body assessment + Personalized plan',
          price: 'RM 49',
          features: [
            'Professional posture analysis',
            'Problem diagnosis',
            'Customized recovery plan',
            'Online session'
          ]
        },
        {
          badge: 'Most Popular',
          title: 'Online 21-Day Body Sculpting',
          subtitle: '15-20 mins/day',
          price: 'RM 599',
          features: [
            '21-day systematic training',
            '22 detailed video tutorials',
            'Progress tracking',
            'Exclusive community support'
          ]
        },
        {
          badge: 'Online/Offline Personal Training',
          title: 'Flexible Schedule',
          subtitle: 'One-on-one personalized plan',
          price: '',
          features: [
            'Fully personalized plan',
            'Real-time guidance',
            'One-on-one professional',
            'Online/offline options'
          ]
        }
      ],
      pricingCTA: 'Book Now',
      
      // FAQ
      faqTitle: 'Frequently Asked Questions',
      faqs: [
        {
          question: 'I have no experience, will I be able to keep up?',
          answer: 'No, you won\'t. There is no judgment here, all movements have modified versions. With 8 people, the coach will watch you throughout and adjust according to your status.'
        },
        {
          question: 'I have tried many times and gave up',
          answer: 'Previous attempts were likely without a system, blindly exercising without knowing if it\'s right or wrong. With a coach tracking you in every session, giving up is harder.'
        },
        {
          question: 'I have old injuries, can I still join?',
          answer: 'Yes, you can. Inform the coach before signing up, and the movements will be adjusted according to your condition.'
        },
        {
          question: 'What happens after payment?',
          answer: 'Carol Le Le will first contact you via WhatsApp to discuss your situation and arrange the next steps.'
        },
        {
          question: 'How many times should I train in a month?',
          answer: 'It is recommended to train 2-3 times a week, and we will arrange according to your requirements.'
        },
        {
          question: 'Do I need to go to the gym?',
          answer: 'The course is suitable for both gym and home training. Home training can start with adjustable dumbbells/suspension training bands.'
        },
        {
          question: 'How can I ensure correct posture in online classes?',
          answer: 'There are demonstration movements for reference, and the coach will provide feedback and improvement suggestions for each movement, ensuring you exercise correctly and safely.'
        },
        {
          question: 'How do I pay?',
          answer: 'Click on the WhatsApp link (0149727123) to get the payment link via private message.'
        }
      ],
      
      // Footer CTA
      footerCTATitle: 'Ready to Start Your Recovery Journey?',
      footerCTASubtitle: 'Let\'s find your strength and confidence together',
      footerCTAButton: 'Get Started',
      
      // Footer
      footerCopyright: 'Copyright ©2026 GlowMama. All rights reserved.',
      footerPoweredBy: 'Powered by '
    }
  };

  const t = content[activeTab];

  return (
    <div 
      className="min-h-screen"
      style={{ backgroundColor: 'var(--page-background)' }}
    >
      {/* Simple Navigation */}
      <nav 
        className="sticky top-0 z-50"
        style={{ 
          backgroundColor: 'var(--card-surface)',
          borderBottom: '1px solid var(--border-warm)'
        }}
      >
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-6">
            <img 
              src={glowmamaLogo} 
              alt="GlowMama Logo" 
              className="h-10"
              style={{ objectFit: 'contain' }}
            />
            {/* Contact CTA Button */}
            <a
              href={activeTab === 'zh' 
                ? "https://api.whatsapp.com/send/?phone=60149727123&text=%E4%BD%A0%E5%A5%BD%EF%BC%81%E6%88%91%E6%83%B3%E4%BA%86%E8%A7%A3+Glow+Mama+%E8%AF%BE%E7%A8%8B%E7%9A%84%E8%AF%A6%E6%83%85%EF%BC%8C%E8%AF%B7%E9%97%AE%E5%8F%AF%E4%BB%A5%E5%91%8A%E8%AF%89%E6%88%91%E6%9B%B4%E5%A4%9A%E5%90%97%EF%BC%9F&type=phone_number&app_absent=0"
                : "https://api.whatsapp.com/send/?phone=60149727123&text=Hi!%20I'm%20interested%20in%20learning%20more%20about%20the%20Glow%20Mama%20course.%20Could%20you%20share%20more%20details%20with%20me?&type=phone_number&app_absent=0"}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-2 rounded-lg transition-all hover:opacity-90"
              style={{
                backgroundColor: 'var(--primary-interactive)',
                color: '#FFFFFF',
                fontFamily: activeTab === 'zh' ? 'var(--font-chinese)' : 'var(--font-body)',
                fontSize: '0.875rem',
                minHeight: '44px',
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem'
              }}
            >
              <Phone className="w-4 h-4" />
              {t.contactCTA}
            </a>
          </div>
          <div className="flex gap-4">
            <button
              onClick={() => setActiveTab('zh')}
              className="px-4 py-2 rounded-lg transition-colors"
              style={{
                fontFamily: activeTab === 'zh' ? 'var(--font-chinese)' : 'var(--font-body)',
                backgroundColor: activeTab === 'zh' ? 'var(--primary-interactive)' : 'transparent',
                color: activeTab === 'zh' ? '#FFFFFF' : 'var(--main-text)'
              }}
            >
              中文
            </button>
            <button
              onClick={() => setActiveTab('en')}
              className="px-4 py-2 rounded-lg transition-colors"
              style={{
                fontFamily: 'var(--font-body)',
                backgroundColor: activeTab === 'en' ? 'var(--primary-interactive)' : 'transparent',
                color: activeTab === 'en' ? '#FFFFFF' : 'var(--main-text)'
              }}
            >
              EN
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="hero" className="relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 py-20 lg:py-32">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="space-y-8">
              <div className="space-y-4">
                <h1 
                  className="text-5xl lg:text-6xl"
                  style={{
                    fontFamily: activeTab === 'zh' ? 'var(--font-chinese)' : 'var(--font-display)',
                    color: 'var(--main-text)',
                    lineHeight: '1.2'
                  }}
                >
                  {t.heroTitle1}
                  <br />
                  {t.heroTitle2}
                  <br />
                  <span style={{ color: 'var(--primary-interactive)' }}>
                    {t.heroTitle3}
                  </span>
                </h1>
                <p 
                  className="text-lg"
                  style={{
                    fontFamily: activeTab === 'zh' ? 'var(--font-chinese)' : 'var(--font-body)',
                    color: 'var(--secondary-text)',
                    letterSpacing: '0.02em'
                  }}
                >
                  {t.heroDescription}
                </p>
              </div>

              <div className="flex flex-wrap gap-4">
                <a
                  href={activeTab === 'zh' 
                    ? "https://api.whatsapp.com/send/?phone=60149727123&text=%E4%BD%A0%E5%A5%BD%EF%BC%81%E6%88%91%E6%83%B3%E4%BA%86%E8%A7%A3+Glow+Mama+%E8%AF%BE%E7%A8%8B%E7%9A%84%E8%AF%A6%E6%83%85%EF%BC%8C%E8%AF%B7%E9%97%AE%E5%8F%AF%E4%BB%A5%E5%91%8A%E8%AF%89%E6%88%91%E6%9B%B4%E5%A4%9A%E5%90%97%EF%BC%9F&type=phone_number&app_absent=0"
                    : "https://api.whatsapp.com/send/?phone=60149727123&text=Hi!%20I'm%20interested%20in%20learning%20more%20about%20the%20Glow%20Mama%20course.%20Could%20you%20share%20more%20details%20with%20me?&type=phone_number&app_absent=0"}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-8 py-4 rounded-lg transition-all hover:scale-105 inline-flex items-center justify-center"
                  style={{
                    backgroundColor: '#B87D5E',
                    color: '#FFFFFF',
                    fontFamily: activeTab === 'zh' ? 'var(--font-chinese)' : 'var(--font-body)',
                    minHeight: '44px',
                    textDecoration: 'none'
                  }}
                >
                  {t.heroCTA1}
                </a>
                <button
                  className="px-8 py-4 rounded-lg transition-all hover:scale-105"
                  style={{
                    backgroundColor: 'transparent',
                    color: 'var(--main-text)',
                    border: '2px solid var(--main-text)',
                    fontFamily: activeTab === 'zh' ? 'var(--font-chinese)' : 'var(--font-body)',
                    minHeight: '44px'
                  }}
                >
                  {t.heroCTA2}
                </button>
              </div>
            </div>

            {/* Right Image */}
            <div className="relative">
              <div 
                className="rounded-3xl overflow-hidden shadow-2xl"
                style={{
                  aspectRatio: '4/5',
                  backgroundColor: 'var(--warm-accent)'
                }}
              >
                <img 
                  src={heroImage} 
                  alt="GlowMama Fitness"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Video Section */}
      <section 
        className="py-20"
        style={{ backgroundColor: '#FFFFFF' }}
      >
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 
              className="text-4xl mb-4"
              style={{
                fontFamily: activeTab === 'zh' ? 'var(--font-chinese)' : 'var(--font-display)',
                color: 'var(--main-text)'
              }}
            >
              {t.videoTitle}
            </h2>
            <p 
              className="text-lg"
              style={{
                fontFamily: activeTab === 'zh' ? 'var(--font-chinese)' : 'var(--font-body)',
                color: 'var(--muted-text)'
              }}
            >
              {t.videoSubtitle}
            </p>
          </div>
          
          <div className="max-w-md mx-auto">
            <div 
              className="relative rounded-3xl overflow-hidden shadow-2xl"
              style={{
                aspectRatio: '9/16',
                backgroundColor: '#F8F4EF'
              }}
            >
              <iframe
                src="https://www.instagram.com/reel/DVh8JOPEeLp/embed/"
                className="w-full h-full"
                frameBorder="0"
                scrolling="no"
                allow="encrypted-media"
                style={{
                  border: 'none',
                  overflow: 'hidden'
                }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Post-pregnancy Issues Section */}
      <section id="issues" className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 
              className="text-4xl mb-4"
              style={{
                fontFamily: activeTab === 'zh' ? 'var(--font-chinese)' : 'var(--font-display)',
                color: 'var(--main-text)'
              }}
            >
              {t.issuesTitle}
            </h2>
            <p 
              className="text-lg"
              style={{
                fontFamily: activeTab === 'zh' ? 'var(--font-chinese)' : 'var(--font-body)',
                color: 'var(--muted-text)'
              }}
            >
              {t.issuesSubtitle}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {t.issues.map((issue, index) => (
              <div
                key={index}
                className="rounded-2xl p-6 space-y-4 hover:shadow-lg transition-shadow"
                style={{
                  backgroundColor: 'var(--card-surface)',
                  border: '1px solid var(--border-warm)'
                }}
              >
                <div className="flex items-start gap-3">
                  <div 
                    className="w-6 h-6 rounded-full flex-shrink-0 mt-1"
                    style={{ backgroundColor: '#F6921E' }}
                  />
                  <h3 
                    className="text-xl"
                    style={{
                      fontFamily: activeTab === 'zh' ? 'var(--font-chinese)' : 'var(--font-body)',
                      color: 'var(--main-text)'
                    }}
                  >
                    {issue.title}
                  </h3>
                </div>
                <ul className="space-y-2">
                  {issue.symptoms.map((symptom, idx) => (
                    <li 
                      key={idx}
                      className="flex items-center gap-2"
                      style={{
                        fontFamily: activeTab === 'zh' ? 'var(--font-chinese)' : 'var(--font-body)',
                        color: 'var(--secondary-text)'
                      }}
                    >
                      <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: 'var(--muted-text)' }} />
                      {symptom}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Founder Story Section */}
      <section 
        id="founder"
        className="py-20"
        style={{ backgroundColor: '#FFFFFF' }}
      >
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="space-y-6">
              <h2 
                className="text-4xl mb-6"
                style={{
                  fontFamily: activeTab === 'zh' ? 'var(--font-chinese)' : 'var(--font-display)',
                  color: 'var(--main-text)'
                }}
              >
                {t.founderTitle}
              </h2>
              
              <div 
                className="space-y-4 text-lg"
                style={{
                  fontFamily: activeTab === 'zh' ? 'var(--font-chinese)' : 'var(--font-body)',
                  color: 'var(--secondary-text)',
                  lineHeight: '1.8'
                }}
              >
                <p>{t.founderPara1}</p>
                <p className="text-base">{t.founderPara2}</p>
                <p 
                  className="font-semibold"
                  style={{ color: '#B87D5E' }}
                >
                  {t.founderPara3}
                </p>
                <p>{t.founderPara4}</p>
                <p>{t.founderPara5}</p>
                <p>{t.founderPara6}</p>
              </div>
            </div>

            {/* Right Image */}
            <div className="relative">
              <div 
                className="rounded-3xl overflow-hidden shadow-xl"
                style={{ aspectRatio: '4/5' }}
              >
                <img 
                  src={founderImage} 
                  alt="Founder Story"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Social Proof Section */}
      <section 
        className="py-20"
        style={{ backgroundColor: 'var(--page-background)' }}
      >
        <div className="max-w-4xl mx-auto px-6 text-center space-y-6">
          <h2 
            className="text-6xl"
            style={{
              fontFamily: activeTab === 'zh' ? 'var(--font-chinese)' : 'var(--font-display)',
              color: 'var(--main-text)'
            }}
          >
            {t.socialProofTitle}
          </h2>
          <p 
            className="text-2xl"
            style={{
              fontFamily: activeTab === 'zh' ? 'var(--font-chinese)' : 'var(--font-body)',
              color: '#B87D5E'
            }}
          >
            {t.socialProofSubtitle}
          </p>
          <p 
            className="text-lg max-w-3xl mx-auto"
            style={{
              fontFamily: activeTab === 'zh' ? 'var(--font-chinese)' : 'var(--font-body)',
              color: 'var(--secondary-text)',
              lineHeight: '1.8'
            }}
          >
            {t.socialProofDescription}
          </p>
        </div>
      </section>

      {/* Student Testimonials Section */}
      <section 
        id="testimonials"
        className="py-20"
        style={{ backgroundColor: '#B87D5E' }}
      >
        <div className="max-w-7xl mx-auto px-6">
          <h2 
            className="text-4xl text-center mb-16"
            style={{
              fontFamily: activeTab === 'zh' ? 'var(--font-chinese)' : 'var(--font-display)',
              color: '#FFFFFF'
            }}
          >
            {t.testimonialsTitle}
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Rui En - Before/After Photo */}
            <div
              className="rounded-2xl overflow-hidden space-y-0"
              style={{
                backgroundColor: '#FFF8F0',
                boxShadow: '0 10px 30px rgba(0,0,0,0.1)'
              }}
            >
              {/* Before/After Image */}
              <div className="relative w-full" style={{ aspectRatio: '1/1' }}>
                <img
                  style={{ objectPosition: 'center bottom' }}
                  src={ruienBeforeAfter}
                  alt="Rui En Before After"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Text Content */}
              <div className="p-6 space-y-4">
                <div>
                  <h3 
                    className="text-2xl mb-1"
                    style={{
                      fontFamily: 'var(--font-body)',
                      color: 'var(--primary-interactive)'
                    }}
                  >
                    {t.testimonials[0].name}
                  </h3>
                  <p 
                    style={{
                      fontFamily: activeTab === 'zh' ? 'var(--font-chinese)' : 'var(--font-body)',
                      color: 'var(--secondary-text)',
                      fontSize: '0.875rem'
                    }}
                  >
                    {t.testimonials[0].subtitle}
                  </p>
                </div>

                <div 
                  className="pt-4 border-t italic"
                  style={{
                    borderColor: 'var(--border-warm)',
                    fontFamily: activeTab === 'zh' ? 'var(--font-chinese)' : 'var(--font-body)',
                    color: 'var(--secondary-text)',
                    fontSize: '0.875rem',
                    lineHeight: '1.6'
                  }}
                >
                  {t.testimonials[0].quote}
                </div>
              </div>
            </div>

            {/* Vanessa - Before/After Photo */}
            <div
              className="rounded-2xl overflow-hidden space-y-0"
              style={{
                backgroundColor: '#FFF8F0',
                boxShadow: '0 10px 30px rgba(0,0,0,0.1)'
              }}
            >
              {/* Before/After Image */}
              <div className="relative w-full" style={{ aspectRatio: '1/1' }}>
                <img
                  src={vanessaBeforeAfter}
                  alt="Vanessa Before After"
                  className="w-full h-full object-cover"
                  style={{ objectPosition: 'center bottom' }}
                />
              </div>

              {/* Text Content */}
              <div className="p-6 space-y-4">
                <div>
                  <h3 
                    className="text-2xl mb-1"
                    style={{
                      fontFamily: 'var(--font-body)',
                      color: 'var(--primary-interactive)'
                    }}
                  >
                    {t.testimonials[1].name}
                  </h3>
                  <p 
                    style={{
                      fontFamily: activeTab === 'zh' ? 'var(--font-chinese)' : 'var(--font-body)',
                      color: 'var(--secondary-text)',
                      fontSize: '0.875rem'
                    }}
                  >
                    {t.testimonials[1].subtitle}
                  </p>
                </div>

                <div 
                  className="pt-4 border-t italic"
                  style={{
                    borderColor: 'var(--border-warm)',
                    fontFamily: activeTab === 'zh' ? 'var(--font-chinese)' : 'var(--font-body)',
                    color: 'var(--secondary-text)',
                    fontSize: '0.875rem',
                    lineHeight: '1.6'
                  }}
                >
                  {t.testimonials[1].quote}
                </div>
              </div>
            </div>

            {/* Evon - Before/After Photo */}
            <div
              className="rounded-2xl overflow-hidden space-y-0"
              style={{
                backgroundColor: '#FFF8F0',
                boxShadow: '0 10px 30px rgba(0,0,0,0.1)'
              }}
            >
              {/* Before/After Image */}
              <div className="relative w-full" style={{ aspectRatio: '1/1' }}>
                <img 
                  src={evonBeforeAfter} 
                  alt="Evon Before After"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Text Content */}
              <div className="p-6 space-y-4">
                <div>
                  <h3 
                    className="text-2xl mb-1"
                    style={{
                      fontFamily: 'var(--font-body)',
                      color: 'var(--primary-interactive)'
                    }}
                  >
                    {t.testimonials[2].name}
                  </h3>
                  <p 
                    style={{
                      fontFamily: activeTab === 'zh' ? 'var(--font-chinese)' : 'var(--font-body)',
                      color: 'var(--secondary-text)',
                      fontSize: '0.875rem'
                    }}
                  >
                    {t.testimonials[2].subtitle}
                  </p>
                </div>

                <div 
                  className="pt-4 border-t italic"
                  style={{
                    borderColor: 'var(--border-warm)',
                    fontFamily: activeTab === 'zh' ? 'var(--font-chinese)' : 'var(--font-body)',
                    color: 'var(--secondary-text)',
                    fontSize: '0.875rem',
                    lineHeight: '1.6'
                  }}
                >
                  {t.testimonials[2].quote}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Student Reviews Section */}
      <section 
        className="py-20"
        style={{ backgroundColor: '#E8B89B' }}
      >
        <div className="max-w-7xl mx-auto px-6">
          <h2 
            className="text-4xl text-center mb-16"
            style={{
              fontFamily: activeTab === 'zh' ? 'var(--font-chinese)' : 'var(--font-display)',
              color: 'var(--main-text)'
            }}
          >
            {t.reviewsTitle}
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {t.reviews.map((review, index) => (
              <div
                key={index}
                className="rounded-xl p-6 space-y-4"
                style={{
                  backgroundColor: '#FFF8F0'
                }}
              >
                <div className="flex gap-1">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star 
                      key={star} 
                      className="w-4 h-4 fill-current"
                      style={{ color: '#B87D5E' }}
                    />
                  ))}
                </div>
                <p 
                  className="italic"
                  style={{
                    fontFamily: activeTab === 'zh' ? 'var(--font-chinese)' : 'var(--font-body)',
                    color: 'var(--secondary-text)',
                    fontSize: '0.875rem',
                    lineHeight: '1.6'
                  }}
                >
                  {review.text}
                </p>
                <p 
                  style={{
                    fontFamily: 'var(--font-body)',
                    color: 'var(--main-text)',
                    fontSize: '0.875rem'
                  }}
                >
                  — {review.author}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4-Day Training Camp Section */}
      <section 
        id="training"
        className="py-20"
        style={{ backgroundColor: 'var(--page-background)' }}
      >
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 
              className="text-4xl mb-4"
              style={{
                fontFamily: activeTab === 'zh' ? 'var(--font-chinese)' : 'var(--font-display)',
                color: 'var(--main-text)'
              }}
            >
              {t.trainingTitle}
            </h2>
            <p 
              className="text-lg mb-2"
              style={{
                fontFamily: activeTab === 'zh' ? 'var(--font-chinese)' : 'var(--font-body)',
                color: '#B87D5E'
              }}
            >
              {t.trainingDate}
            </p>
            <p 
              style={{
                fontFamily: activeTab === 'zh' ? 'var(--font-chinese)' : 'var(--font-body)',
                color: 'var(--muted-text)'
              }}
            >
              {t.trainingSubtitle}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {t.trainingDays.map((day, index) => (
              <div
                key={index}
                className="rounded-2xl p-6 text-center space-y-4"
                style={{
                  backgroundColor: '#FFF8F0',
                  border: '1px solid var(--border-warm)'
                }}
              >
                <p 
                  style={{
                    fontFamily: 'var(--font-body)',
                    color: 'var(--muted-text)',
                    fontSize: '0.875rem'
                  }}
                >
                  {day.day}
                </p>
                <h3 
                  className="text-2xl"
                  style={{
                    fontFamily: activeTab === 'zh' ? 'var(--font-chinese)' : 'var(--font-body)',
                    color: 'var(--main-text)'
                  }}
                >
                  {day.title}
                </h3>
                <p 
                  style={{
                    fontFamily: activeTab === 'zh' ? 'var(--font-chinese)' : 'var(--font-body)',
                    color: 'var(--secondary-text)',
                    fontSize: '0.875rem',
                    lineHeight: '1.6'
                  }}
                >
                  {day.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Pricing Section */}
      <section 
        className="py-20"
        style={{ backgroundColor: '#FFFFFF' }}
      >
        <div className="max-w-4xl mx-auto px-6">
          <div 
            className="rounded-3xl p-12 text-center space-y-8"
            style={{
              background: 'linear-gradient(135deg, #2F6A96 0%, #B87D5E 100%)',
              color: '#FFFFFF'
            }}
          >
            <h2 
              className="text-3xl md:text-4xl"
              style={{
                fontFamily: activeTab === 'zh' ? 'var(--font-chinese)' : 'var(--font-body)',
                letterSpacing: '0.02em',
                fontWeight: '600'
              }}
            >
              {t.featuredPrice}
            </h2>
            <p 
              className="text-xl"
              style={{
                fontFamily: activeTab === 'zh' ? 'var(--font-chinese)' : 'var(--font-body)'
              }}
            >
              {t.featuredDescription}
            </p>

            <div className="space-y-3 max-w-md mx-auto">
              {t.featuredFeatures.map((feature, index) => (
                <div 
                  key={index}
                  className="flex items-center gap-3"
                  style={{
                    fontFamily: activeTab === 'zh' ? 'var(--font-chinese)' : 'var(--font-body)',
                    fontSize: '1rem'
                  }}
                >
                  <Check className="w-5 h-5 flex-shrink-0" />
                  <span>{feature}</span>
                </div>
              ))}
            </div>

            <a
              href={activeTab === 'zh' 
                ? "https://api.whatsapp.com/send/?phone=60149727123&text=%E4%BD%A0%E5%A5%BD%EF%BC%81%E6%88%91%E6%83%B3%E4%BA%86%E8%A7%A3+Glow+Mama+%E8%AF%BE%E7%A8%8B%E7%9A%84%E8%AF%A6%E6%83%85%EF%BC%8C%E8%AF%B7%E9%97%AE%E5%8F%AF%E4%BB%A5%E5%91%8A%E8%AF%89%E6%88%91%E6%9B%B4%E5%A4%9A%E5%90%97%EF%BC%9F&type=phone_number&app_absent=0"
                : "https://api.whatsapp.com/send/?phone=60149727123&text=Hi!%20I'm%20interested%20in%20learning%20more%20about%20the%20Glow%20Mama%20course.%20Could%20you%20share%20more%20details%20with%20me?&type=phone_number&app_absent=0"}
              target="_blank"
              rel="noopener noreferrer"
              className="px-10 py-4 rounded-lg transition-all hover:scale-105 inline-flex items-center justify-center"
              style={{
                backgroundColor: '#FFFFFF',
                color: 'var(--main-text)',
                fontFamily: activeTab === 'zh' ? 'var(--font-chinese)' : 'var(--font-body)',
                minHeight: '44px',
                fontSize: '1.125rem',
                textDecoration: 'none'
              }}
            >
              {t.featuredCTA}
            </a>
          </div>
        </div>
      </section>

      {/* Location & Contact Section */}
      <section 
        id="contact"
        className="py-20"
        style={{ backgroundColor: 'var(--page-background)' }}
      >
        <div className="max-w-5xl mx-auto px-6">
          <h2 
            className="text-4xl text-center mb-12"
            style={{
              fontFamily: activeTab === 'zh' ? 'var(--font-chinese)' : 'var(--font-display)',
              color: 'var(--main-text)'
            }}
          >
            {t.locationTitle}
          </h2>

          <div 
            className="rounded-3xl overflow-hidden shadow-xl"
            style={{ backgroundColor: '#FFF8F0' }}
          >
            <div className="grid lg:grid-cols-2 gap-0">
              {/* Left Content */}
              <div className="p-10 space-y-6">
                <h3 
                  className="text-2xl mb-6"
                  style={{
                    fontFamily: activeTab === 'zh' ? 'var(--font-chinese)' : 'var(--font-body)',
                    color: 'var(--main-text)'
                  }}
                >
                  {t.locationName}
                </h3>

                <div className="space-y-4">
                  {/* Address */}
                  <div className="flex items-start gap-3">
                    <MapPin 
                      className="w-5 h-5 flex-shrink-0 mt-1"
                      style={{ color: 'var(--primary-interactive)' }}
                    />
                    <div>
                      <p 
                        className="mb-1"
                        style={{ 
                          fontFamily: activeTab === 'zh' ? 'var(--font-chinese)' : 'var(--font-body)',
                          color: 'var(--main-text)',
                          fontSize: '0.875rem'
                        }}
                      >
                        <strong>{t.locationAddress}</strong>
                      </p>
                      <p 
                        style={{ 
                          fontFamily: 'var(--font-body)',
                          color: 'var(--secondary-text)',
                          fontSize: '0.875rem',
                          lineHeight: '1.6'
                        }}
                      >
                        {t.locationAddressDetail}
                      </p>
                    </div>
                  </div>

                  {/* Phone */}
                  <div className="flex items-start gap-3">
                    <Phone 
                      className="w-5 h-5 flex-shrink-0 mt-1"
                      style={{ color: 'var(--primary-interactive)' }}
                    />
                    <div>
                      <p 
                        className="mb-1"
                        style={{ 
                          fontFamily: activeTab === 'zh' ? 'var(--font-chinese)' : 'var(--font-body)',
                          color: 'var(--main-text)',
                          fontSize: '0.875rem'
                        }}
                      >
                        <strong>{t.locationPhone}</strong>
                      </p>
                      <p 
                        style={{ 
                          fontFamily: 'var(--font-body)',
                          color: 'var(--secondary-text)',
                          fontSize: '0.875rem'
                        }}
                      >
                        {t.locationPhoneNumber}
                      </p>
                    </div>
                  </div>

                  {/* Specialty */}
                  <div className="flex items-start gap-3">
                    <User 
                      className="w-5 h-5 flex-shrink-0 mt-1"
                      style={{ color: 'var(--primary-interactive)' }}
                    />
                    <div>
                      <p 
                        className="mb-1"
                        style={{ 
                          fontFamily: activeTab === 'zh' ? 'var(--font-chinese)' : 'var(--font-body)',
                          color: 'var(--main-text)',
                          fontSize: '0.875rem'
                        }}
                      >
                        <strong>{t.locationSpecialty}</strong>
                      </p>
                      <p 
                        style={{ 
                          fontFamily: activeTab === 'zh' ? 'var(--font-chinese)' : 'var(--font-body)',
                          color: 'var(--secondary-text)',
                          fontSize: '0.875rem'
                        }}
                      >
                        {t.locationSpecialtyDetail}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Image */}
              <div className="relative h-full min-h-[400px]">
                <img 
                  src={fitcomLocationImage} 
                  alt="Fitcom Fitness Location"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* All Pricing Options Section */}
      <section 
        id="pricing"
        className="py-20"
        style={{ backgroundColor: 'var(--page-background)' }}
      >
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 
              className="text-4xl mb-4"
              style={{
                fontFamily: activeTab === 'zh' ? 'var(--font-chinese)' : 'var(--font-display)',
                color: 'var(--main-text)'
              }}
            >
              {t.pricingTitle}
            </h2>
            <p 
              className="text-lg"
              style={{
                fontFamily: activeTab === 'zh' ? 'var(--font-chinese)' : 'var(--font-body)',
                color: '#B87D5E'
              }}
            >
              {t.pricingSubtitle}
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {t.pricingOptions.map((option, index) => (
              <div
                key={index}
                className={`rounded-3xl p-8 space-y-6 transition-transform hover:scale-105 ${
                  index === 1 ? 'ring-4' : ''
                }`}
                style={{
                  backgroundColor: index === 0 ? '#EBCDB7' : index === 1 ? '#B87D5E' : '#2F6A96',
                  color: index === 0 ? '#2A1A14' : '#FFFFFF',
                  ['--tw-ring-color' as string]: index === 1 ? '#F6921E' : 'transparent'
                } as React.CSSProperties}
              >
                <div className="space-y-3">
                  <div 
                    className="inline-block px-4 py-1 rounded-full text-sm"
                    style={{
                      backgroundColor: index === 1 ? '#F6921E' : 'rgba(255,255,255,0.2)',
                      fontFamily: activeTab === 'zh' ? 'var(--font-chinese)' : 'var(--font-body)'
                    }}
                  >
                    {option.badge}
                  </div>
                  <h3 
                    className="text-3xl"
                    style={{
                      fontFamily: activeTab === 'zh' ? 'var(--font-chinese)' : 'var(--font-body)'
                    }}
                  >
                    {option.title}
                  </h3>
                  <p 
                    className="text-sm"
                    style={{
                      fontFamily: activeTab === 'zh' ? 'var(--font-chinese)' : 'var(--font-body)',
                      opacity: 0.9
                    }}
                  >
                    {option.subtitle}
                  </p>
                </div>

                {option.price && (
                  <div 
                    className="text-5xl"
                    style={{
                      fontFamily: 'var(--font-price)',
                      letterSpacing: '0.05em'
                    }}
                  >
                    {option.price}
                  </div>
                )}

                <div className="space-y-3">
                  {option.features.map((feature, idx) => (
                    <div 
                      key={idx}
                      className="flex items-center gap-3"
                      style={{
                        fontFamily: activeTab === 'zh' ? 'var(--font-chinese)' : 'var(--font-body)',
                        fontSize: '0.875rem'
                      }}
                    >
                      <Check className="w-5 h-5 flex-shrink-0" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>

                <a
                  href={activeTab === 'zh' 
                    ? "https://api.whatsapp.com/send/?phone=60149727123&text=%E4%BD%A0%E5%A5%BD%EF%BC%81%E6%88%91%E6%83%B3%E4%BA%86%E8%A7%A3+Glow+Mama+%E8%AF%BE%E7%A8%8B%E7%9A%84%E8%AF%A6%E6%83%85%EF%BC%8C%E8%AF%B7%E9%97%AE%E5%8F%AF%E4%BB%A5%E5%91%8A%E8%AF%89%E6%88%91%E6%9B%B4%E5%A4%9A%E5%90%97%EF%BC%9F&type=phone_number&app_absent=0"
                    : "https://api.whatsapp.com/send/?phone=60149727123&text=Hi!%20I'm%20interested%20in%20learning%20more%20about%20the%20Glow%20Mama%20course.%20Could%20you%20share%20more%20details%20with%20me?&type=phone_number&app_absent=0"}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-4 rounded-lg transition-all hover:scale-105 inline-flex items-center justify-center"
                  style={{
                    backgroundColor: index === 0 ? 'var(--main-text)' : '#FFFFFF',
                    color: index === 0 ? '#FFFFFF' : index === 1 ? '#B87D5E' : '#2F6A96',
                    fontFamily: activeTab === 'zh' ? 'var(--font-chinese)' : 'var(--font-body)',
                    minHeight: '44px',
                    textDecoration: 'none'
                  }}
                >
                  {t.pricingCTA}
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section 
        id="faq"
        className="py-20"
        style={{ backgroundColor: '#F8F4EF' }}
      >
        <div className="max-w-4xl mx-auto px-6">
          <h2 
            className="text-4xl text-center mb-16"
            style={{
              fontFamily: activeTab === 'zh' ? 'var(--font-chinese)' : 'var(--font-display)',
              color: 'var(--main-text)'
            }}
          >
            {t.faqTitle}
          </h2>

          <div className="space-y-4">
            {t.faqs.map((faq, index) => (
              <div
                key={index}
                className="rounded-2xl overflow-hidden"
                style={{
                  backgroundColor: '#FFF8F0',
                  border: '2px solid',
                  borderColor: openFAQIndex === index ? 'var(--primary-interactive)' : 'transparent'
                }}
              >
                <button
                  onClick={() => setOpenFAQIndex(openFAQIndex === index ? null : index)}
                  className="w-full px-8 py-6 flex items-center justify-between gap-4 text-left transition-colors hover:bg-opacity-80"
                  style={{
                    minHeight: '44px'
                  }}
                >
                  <h3 
                    className="text-lg font-bold flex-1"
                    style={{
                      fontFamily: activeTab === 'zh' ? 'var(--font-chinese)' : 'var(--font-body)',
                      color: 'var(--primary-interactive)'
                    }}
                  >
                    {faq.question}
                  </h3>
                  <ChevronDown 
                    className="w-6 h-6 flex-shrink-0 transition-transform"
                    style={{
                      color: 'var(--primary-interactive)',
                      transform: openFAQIndex === index ? 'rotate(180deg)' : 'rotate(0deg)'
                    }}
                  />
                </button>
                
                <div
                  style={{
                    maxHeight: openFAQIndex === index ? '500px' : '0',
                    overflow: 'hidden',
                    transition: 'max-height 0.3s ease-in-out'
                  }}
                >
                  <p 
                    className="px-8 pb-6 text-base"
                    style={{
                      fontFamily: activeTab === 'zh' ? 'var(--font-chinese)' : 'var(--font-body)',
                      color: 'var(--main-text)',
                      lineHeight: '1.8'
                    }}
                  >
                    {faq.answer}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer CTA Section */}
      <section 
        className="py-20"
        style={{ backgroundColor: 'var(--primary-interactive)' }}
      >
        <div className="max-w-4xl mx-auto px-6 text-center space-y-8">
          <h2 
            className="text-5xl"
            style={{
              fontFamily: activeTab === 'zh' ? 'var(--font-chinese)' : 'var(--font-display)',
              color: '#FFFFFF'
            }}
          >
            {t.footerCTATitle}
          </h2>
          <p 
            className="text-xl"
            style={{
              fontFamily: activeTab === 'zh' ? 'var(--font-chinese)' : 'var(--font-body)',
              color: '#FFFFFF',
              opacity: 0.95
            }}
          >
            {t.footerCTASubtitle}
          </p>
          <a
            href={activeTab === 'zh' 
              ? "https://api.whatsapp.com/send/?phone=60149727123&text=%E4%BD%A0%E5%A5%BD%EF%BC%81%E6%88%91%E6%83%B3%E4%BA%86%E8%A7%A3+Glow+Mama+%E8%AF%BE%E7%A8%8B%E7%9A%84%E8%AF%A6%E6%83%85%EF%BC%8C%E8%AF%B7%E9%97%AE%E5%8F%AF%E4%BB%A5%E5%91%8A%E8%AF%89%E6%88%91%E6%9B%B4%E5%A4%9A%E5%90%97%EF%BC%9F&type=phone_number&app_absent=0"
              : "https://api.whatsapp.com/send/?phone=60149727123&text=Hi!%20I'm%20interested%20in%20learning%20more%20about%20the%20Glow%20Mama%20course.%20Could%20you%20share%20more%20details%20with%20me?&type=phone_number&app_absent=0"}
            target="_blank"
            rel="noopener noreferrer"
            className="px-12 py-5 rounded-lg transition-all hover:scale-105 inline-flex items-center gap-3"
            style={{
              backgroundColor: '#FFFFFF',
              color: 'var(--primary-interactive)',
              fontFamily: activeTab === 'zh' ? 'var(--font-chinese)' : 'var(--font-body)',
              fontSize: '1.25rem',
              minHeight: '44px',
              textDecoration: 'none'
            }}
          >
            {t.footerCTAButton}
            <ArrowRight className="w-6 h-6" />
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer 
        className="py-12"
        style={{ 
          backgroundColor: 'var(--main-text)',
          color: '#FFFFFF'
        }}
      >
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center space-y-4">
            <div className="flex items-center justify-center gap-4">
              <img 
                src={glowmamaLogo} 
                alt="GlowMama Logo" 
                className="h-12"
                style={{ objectFit: 'contain', filter: 'brightness(0) invert(1)' }}
              />
              <span 
                className="text-2xl"
                style={{ 
                  fontFamily: 'var(--font-body)',
                  opacity: 0.6
                }}
              >
                ×
              </span>
              <img 
                src={fitcomLogo} 
                alt="Fitcom Logo" 
                className="h-10"
                style={{ objectFit: 'contain', filter: 'brightness(0) invert(1)' }}
              />
            </div>
            <p 
              style={{
                fontFamily: 'var(--font-body)',
                opacity: 0.8,
                fontSize: '0.875rem'
              }}
            >
              {t.footerCopyright}{' '}
              {t.footerPoweredBy}
              <a 
                href="https://www.fitcomfitness.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="transition-colors"
                style={{
                  opacity: 0.9,
                  textDecoration: 'none'
                }}
                onMouseEnter={(e) => e.currentTarget.style.color = '#B87D5E'}
                onMouseLeave={(e) => e.currentTarget.style.color = '#FFFFFF'}
              >
                Fitcom Fitness
              </a>
              .
            </p>
          </div>
        </div>
      </footer>

      {/* Keyboard Shortcut Guide - Floating Panel */}
      {showShortcutGuide && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          style={{ backgroundColor: 'rgba(0, 0, 0, 0.6)' }}
          onClick={() => setShowShortcutGuide(false)}
        >
          <div
            className="rounded-2xl p-8 max-w-md w-full shadow-2xl"
            style={{ backgroundColor: 'var(--card-surface)' }}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between mb-6">
              <h3
                className="text-2xl"
                style={{
                  fontFamily: activeTab === 'zh' ? 'var(--font-chinese)' : 'var(--font-display)',
                  color: 'var(--primary-interactive)'
                }}
              >
                {t.shortcutGuideTitle}
              </h3>
              <button
                onClick={() => setShowShortcutGuide(false)}
                className="p-2 rounded-lg hover:bg-gray-100 transition-colors"
              >
                <span style={{ color: 'var(--main-text)', fontSize: '1.5rem' }}>×</span>
              </button>
            </div>

            <p
              className="mb-6"
              style={{
                fontFamily: activeTab === 'zh' ? 'var(--font-chinese)' : 'var(--font-body)',
                color: 'var(--secondary-text)',
                fontSize: '0.875rem'
              }}
            >
              {t.shortcutGuideSubtitle}
            </p>

            <div className="space-y-3">
              {t.shortcuts.map((shortcut, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between py-2 px-3 rounded-lg"
                  style={{ backgroundColor: 'rgba(79, 163, 195, 0.05)' }}
                >
                  <span
                    className="px-3 py-1 rounded font-mono"
                    style={{
                      backgroundColor: 'var(--primary-interactive)',
                      color: '#FFFFFF',
                      fontSize: '0.875rem',
                      minWidth: '60px',
                      textAlign: 'center'
                    }}
                  >
                    {shortcut.key}
                  </span>
                  <span
                    style={{
                      fontFamily: activeTab === 'zh' ? 'var(--font-chinese)' : 'var(--font-body)',
                      color: 'var(--main-text)',
                      fontSize: '0.875rem',
                      flex: 1,
                      marginLeft: '1rem'
                    }}
                  >
                    {shortcut.description}
                  </span>
                </div>
              ))}
            </div>

            <div
              className="mt-6 pt-6 border-t text-center"
              style={{ borderColor: 'var(--border-warm)' }}
            >
              <p
                style={{
                  fontFamily: activeTab === 'zh' ? 'var(--font-chinese)' : 'var(--font-body)',
                  color: 'var(--secondary-text)',
                  fontSize: '0.75rem'
                }}
              >
                {activeTab === 'zh' ? '按 Esc 或点击任意处关闭' : 'Press Esc or click anywhere to close'}
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Floating Shortcut Hint Button */}
      <button
        onClick={() => setShowShortcutGuide(true)}
        className="fixed bottom-6 right-6 w-12 h-12 rounded-full shadow-lg hover:scale-110 transition-all"
        style={{
          backgroundColor: 'var(--primary-interactive)',
          color: '#FFFFFF',
          zIndex: 40
        }}
        title={activeTab === 'zh' ? '键盘快捷键 (按 ?)' : 'Keyboard Shortcuts (Press ?)'}
      >
        <span className="text-xl font-bold">?</span>
      </button>
    </div>
  );
}