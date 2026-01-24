import React, { createContext, useCallback, useContext, useState } from 'react'

const translations = {
  ru: {
    nav: {
      home: 'Главная',
      about: 'О нас',
      faq: 'FAQ',
      packages: 'Пакеты',
      request: 'Заявка',
      contacts: 'Контакты',
      login: 'Войти',
    },
    home: {
      motto: 'VR - карьерный трекинг',
      description: 'Инновационные VR-решения для образовательных учреждений и организаций. Погружайте учащихся в интерактивный мир виртуальной реальности.',
      cta: 'Оставить заявку',
      stats: {
        experience: '5+ лет',
        experienceLabel: 'опыта',
        clients: '200+',
        clientsLabel: 'клиентов',
        projects: '500+',
        projectsLabel: 'проектов',
      },
    },
    about: {
      title: 'О компании',
      subtitle: 'Мы создаём будущее образования уже сегодня',
      description: 'LI group — лидер в области VR-решений для образования. Мы разрабатываем и внедряем виртуальные симуляции, которые делают обучение эффективным, увлекательным и безопасным. Наши решения используются в школах, университетах и корпоративных учебных центрах.',
      features: {
        immersive: 'Полное погружение',
        immersiveDesc: 'Реалистичные 3D-среды для максимального вовлечения',
        safe: 'Безопасное обучение',
        safeDesc: 'Отработка навыков без рисков и затрат',
        analytics: 'Аналитика прогресса',
        analyticsDesc: 'Детальная статистика обучения каждого ученика',
      },
      videoLabel: 'Видео проекта',
    },
    faq: {
      title: 'Часто задаваемые вопросы',
      subtitle: 'Ответы на популярные вопросы о наших VR-решениях',
      cabinetTitle: 'Личный кабинет',
      cabinetDescription: 'Доступен после активации лицензии',
      screenshotLabel: 'Скриншот',
      items: [
        {
          question: 'Какое оборудование необходимо для работы с VR-решениями?',
          answer: 'Для работы с нашими VR-решениями требуется VR-гарнитура (Oculus Quest 2, HTC Vive или аналоги) и компьютер с минимальными требованиями: Intel i5/AMD Ryzen 5, 16GB RAM, видеокарта GTX 1060 или выше. Мы также предоставляем комплексные решения «под ключ» с оборудованием.',
        },
        {
          question: 'Можно ли адаптировать контент под специфику нашего учреждения?',
          answer: 'Да, мы предлагаем услуги кастомизации контента. Наша команда разработчиков создаст уникальные сценарии и симуляции, соответствующие вашей учебной программе и специфическим требованиям.',
        },
        {
          question: 'Как осуществляется техническая поддержка?',
          answer: 'Мы предоставляем круглосуточную техническую поддержку по телефону, email и через чат в личном кабинете. Время реакции на критические запросы — не более 2 часов. Также доступна база знаний и видеоинструкции.',
        },
        {
          question: 'Какие предметы и направления охватывают ваши VR-решения?',
          answer: 'Наша библиотека включает модули по физике, химии, биологии, истории, географии, а также профессиональное обучение: медицина, промышленная безопасность, инженерия. Постоянно добавляем новый контент.',
        },
        {
          question: 'Как происходит интеграция с существующей LMS?',
          answer: 'Наши решения поддерживают интеграцию с популярными LMS через API и стандарты SCORM/xAPI. Мы обеспечиваем полную синхронизацию данных об успеваемости и прогрессе учащихся.',
        },
      ],
    },
    packages: {
      title: 'Пакеты услуг',
      subtitle: 'Выберите оптимальное решение для вашей организации',
      selectPackage: 'Выбрать пакет',
      perYear: '/ год',
      onRequest: 'По запросу',
      mediaLabel: 'Демо',
      vrStart: {
        name: 'VR Standard',
        price: '400 000 ₽',
        description: 'Идеальный старт для знакомства с VR-обучением. Базовый набор модулей для образовательных учреждений.',
        features: [
          'VR гарнитура pico 4',
          'Доступ к библиотеке сценариев',
          'Доступ в кабинет на сайте лмс',
          'Просмотр аналитики обучения',
          'Выгрузка результатов прохождения в дашборд на сайте',
          'До 50 учеников в год',
        ],
      },
      vrPro: {
        name: 'VR Premium',
        price: '600 000 ₽',
        description: 'Полноценное VR-решение для серьёзного внедрения. Расширенные возможности и приоритетная поддержка.',
        features: [
          'VR гарнитура pico 4',
          'Доступ к библиотеке сценариев',
          'Доступ в кабинет на сайте лмс',
          'Просмотр аналитики для родителей',
          'Неограниченное количество учеников',
          'Приоритетная поддержка 24/7',
        ],
      },
    },
    request: {
      title: 'Оставить заявку',
      subtitle: 'Свяжитесь с нами для получения консультации',
      contactMethod: 'Способ связи',
      contactDetails: 'Контактные данные',
      selectPackage: 'Выберите пакет',
      submit: 'Отправить заявку',
      success: 'Заявка успешно отправлена! Мы свяжемся с вами в ближайшее время.',
      methods: {
        phone: 'Телефон',
        email: 'Email',
        telegram: 'Telegram',
        whatsapp: 'WhatsApp',
      },
      placeholders: {
        phone: '+7 (___) ___-__-__',
        email: 'email@example.com',
        telegram: '@username',
        whatsapp: '+7 (___) ___-__-__',
      },
      steps: {
        title: 'Как это работает',
        step1: 'Оставьте заявку',
        step1Desc: 'Заполните форму с контактами',
        step2: 'Консультация',
        step2Desc: 'Наш менеджер свяжется с вами',
        step3: 'Внедрение',
        step3Desc: 'Запускаем VR-обучение',
      },
    },
    contacts: {
      phone: '8 800 555 35 35',
      email: 'ligroup-vr@mail.ru',
    },
    cabinet: {
      title: 'Личный кабинет',
      logout: 'Выйти',
      license: {
        title: 'Статус лицензии',
        status: 'Активна',
        validUntil: 'Действует до:',
        date: '31.12.2025',
      },
      projects: {
        title: 'Проекты',
        count: '12 активных',
        description: 'Управление VR-модулями',
      },
      analytics: {
        title: 'Аналитика',
        users: '156 учеников',
        description: 'Статистика обучения',
      },
      support: {
        title: 'Поддержка',
        status: 'Онлайн',
        description: 'Связаться с командой',
      },
    },
    login: {
      title: 'Вход в личный кабинет',
      description: 'Введите код лицензии для доступа к личному кабинету',
      label: 'Код лицензии',
      placeholder: 'XXXX-XXXXXX',
      submit: 'Войти',
      error: 'Неверный код лицензии',
      hint: 'Для демо используйте: DEMO-LICENSE',
    },
  },
  en: {
    nav: {
      home: 'Home',
      about: 'About',
      faq: 'FAQ',
      packages: 'Packages',
      request: 'Request',
      contacts: 'Contacts',
      login: 'Login',
    },
    home: {
      motto: 'VR - career tracking',
      description: 'Innovative VR solutions for educational institutions and organizations. Immerse students in the interactive world of virtual reality.',
      cta: 'Leave a request',
      stats: {
        experience: '5+ years',
        experienceLabel: 'of experience',
        clients: '200+',
        clientsLabel: 'clients',
        projects: '500+',
        projectsLabel: 'projects',
      },
    },
    about: {
      title: 'About Us',
      subtitle: 'We create the future of education today',
      description: 'LI group is a leader in VR solutions for education. We develop and implement virtual simulations that make learning effective, engaging, and safe. Our solutions are used in schools, universities, and corporate training centers.',
      features: {
        immersive: 'Full Immersion',
        immersiveDesc: 'Realistic 3D environments for maximum engagement',
        safe: 'Safe Learning',
        safeDesc: 'Practice skills without risks and costs',
        analytics: 'Progress Analytics',
        analyticsDesc: 'Detailed learning statistics for each student',
      },
      videoLabel: 'Project Video',
    },
    faq: {
      title: 'Frequently Asked Questions',
      subtitle: 'Answers to popular questions about our VR solutions',
      cabinetTitle: 'Personal Cabinet',
      cabinetDescription: 'Available after license activation',
      screenshotLabel: 'Screenshot',
      items: [
        {
          question: 'What equipment is required to work with VR solutions?',
          answer: 'To work with our VR solutions, you need a VR headset (Oculus Quest 2, HTC Vive or similar) and a computer with minimum requirements: Intel i5/AMD Ryzen 5, 16GB RAM, GTX 1060 graphics card or higher. We also provide turnkey solutions with equipment.',
        },
        {
          question: 'Can the content be adapted to our institution specifics?',
          answer: 'Yes, we offer content customization services. Our development team will create unique scenarios and simulations that match your curriculum and specific requirements.',
        },
        {
          question: 'How is technical support provided?',
          answer: 'We provide 24/7 technical support by phone, email, and through chat in your personal cabinet. Response time for critical requests is no more than 2 hours. A knowledge base and video instructions are also available.',
        },
        {
          question: 'What subjects and areas do your VR solutions cover?',
          answer: 'Our library includes modules on physics, chemistry, biology, history, geography, as well as professional training: medicine, industrial safety, engineering. We constantly add new content.',
        },
        {
          question: 'How does integration with existing LMS work?',
          answer: 'Our solutions support integration with popular LMS through API and SCORM/xAPI standards. We ensure full synchronization of student progress and performance data.',
        },
        {
          question: 'What is the cost and licensing terms?',
          answer: 'The cost depends on the selected package and number of users. We offer annual licenses with included support and updates. To get a personalized offer, submit a request.',
        },
      ],
    },
    packages: {
      title: 'Service Packages',
      subtitle: 'Choose the optimal solution for your organization',
      selectPackage: 'Select Package',
      perYear: '/ year',
      onRequest: 'On request',
      mediaLabel: 'Demo',
      vrStart: {
        name: 'VR Start',
        price: 'from $2,000',
        description: 'Perfect start for getting acquainted with VR learning. Basic set of modules for educational institutions.',
        features: [
          'Access to 50+ educational modules',
          'Up to 30 simultaneous users',
          'Basic progress analytics',
          'Email support during business hours',
          'Quarterly content updates',
          'Online staff training',
        ],
      },
      vrPro: {
        name: 'VR Pro',
        price: 'from $6,000',
        description: 'Full-featured VR solution for serious implementation. Extended capabilities and priority support.',
        features: [
          'Access to entire library of 200+ modules',
          'Unlimited number of users',
          'Advanced analytics with reports',
          'Priority 24/7 support',
          'Monthly content updates',
          'Custom module development',
        ],
      },
    },
    request: {
      title: 'Submit a Request',
      subtitle: 'Contact us for consultation',
      contactMethod: 'Contact Method',
      contactDetails: 'Contact Details',
      selectPackage: 'Select Package',
      submit: 'Submit Request',
      success: 'Request successfully submitted! We will contact you soon.',
      methods: {
        phone: 'Phone',
        email: 'Email',
        telegram: 'Telegram',
        whatsapp: 'WhatsApp',
      },
      placeholders: {
        phone: '8 800 555 35 35',
        email: 'ligroup-vr@mail.ru',
        telegram: '@username',
        whatsapp: '+1 (___) ___-____',
      },
      steps: {
        title: 'How it works',
        step1: 'Submit a request',
        step1Desc: 'Fill out the contact form',
        step2: 'Consultation',
        step2Desc: 'Our manager will contact you',
        step3: 'Implementation',
        step3Desc: 'Launch VR training',
      },
    },
    contacts: {
      phone: '8 800 555 35 35',
      email: 'vr-ligroup@gmail.com',
    },
    cabinet: {
      title: 'Personal Cabinet',
      logout: 'Logout',
      license: {
        title: 'License Status',
        status: 'Active',
        validUntil: 'Valid until:',
        date: '12/31/2025',
      },
      projects: {
        title: 'Projects',
        count: '12 active',
        description: 'VR modules management',
      },
      analytics: {
        title: 'Analytics',
        users: '156 users',
        description: 'Learning statistics',
      },
      support: {
        title: 'Support',
        status: 'Online',
        description: 'Contact the team',
      },
    },
    login: {
      title: 'Login to Personal Cabinet',
      description: 'Enter your license code to access the personal cabinet',
      label: 'License Code',
      placeholder: 'XXXX-XXXXXX',
      submit: 'Login',
      error: 'Invalid license code',
      hint: 'For demo use: DEMO-LICENSE',
    },
  },
};

const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState('ru');

  const t = useCallback((path) => {
    const keys = path.split('.');
    let value = translations[language];
    
    for (const key of keys) {
      if (value && typeof value === 'object' && key in value) {
        value = value[key];
      } else {
        return path;
      }
    }
    
    return value;
  }, [language]);

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
