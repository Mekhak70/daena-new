export type Locale = 'hy' | 'en' | 'ru'

export const locales: Locale[] = ['hy', 'en', 'ru']

export const localeNames: Record<Locale, string> = {
  hy: 'HY',
  en: 'EN',
  ru: 'RU',
}

export const translations = {
  hy: {
    // Նավիգացիա
    nav: {
      home: 'Գլխավոր',
      about: 'Մեր մասին',
      partners: 'Գործընկերներ',
      contact: 'Կապ',
    },
  
    // Hero բաժին
    hero: {
      title: 'ԲԱՐՁՐԱԿԱՐԳ ՀԱՇՎԱՊԱՀԱԿԱՆ ԵՎ ՖԻՆԱՆՍԱԿԱՆ ԾԱՌԱՅՈՒԹՅՈՒՆՆԵՐ',
      subtitle:
        'Մենք տրամադրում ենք հաշվապահական, հարկային խորհրդատվության և բիզնեսի աջակցման համալիր ծառայություններ՝ օգնելով ձեր բիզնեսին զարգանալ Հայաստանում և դրանից դուրս։',
      cta: 'Կապ հաստատել մեզ հետ',
      consultation: 'Ստանալ խորհրդատվություն',
    },
  
    // Ծառայություններ
    services: {
      title: 'Մեր ծառայությունները',
      accounting: {
        title: 'Հաշվապահական ծառայություններ',
        description:
          'Ամբողջական հաշվապահություն, ֆինանսական հաշվառման վարում և լուծումներ՝ հարմարեցված ձեր բիզնեսի կարիքներին։',
      },
      tax: {
        title: 'Հարկային խորհրդատվություն',
        description:
          'Մասնագիտական հարկային պլանավորում, համապատասխանություն և օպտիմալացում՝ հարկային բեռը օրինական նվազեցնելու համար։',
      },
      financial: {
        title: 'Ֆինանսական հաշվետվություններ',
        description:
          'Ճշգրիտ և ժամանակին ֆինանսական հաշվետվություններ, վերլուծություններ և հաշվարկներ՝ ճիշտ բիզնես որոշումների համար։',
      },
      business: {
        title: 'Բիզնեսի աջակցում',
        description:
          'Բիզնես խորհրդատվական համալիր ծառայություններ՝ ներառյալ գրանցում, վերակազմավորում և ռազմավարական պլանավորում։',
      },
    },
  
    // Առավելություններ
    benefits: {
      title: 'Ինչու ընտրել մեզ',
      experience: {
        title: 'Փորձառություն',
        description:
          'Տարիների փորձ տարբեր ոլորտներում գործող բիզնեսների սպասարկման մեջ։',
      },
      reliability: {
        title: 'Վստահելիություն',
        description:
          'Կայուն և հուսալի ծառայություն, որի վրա միշտ կարող եք վստահել։',
      },
      confidentiality: {
        title: 'Գաղտնիություն',
        description:
          'Ձեր ֆինանսական տվյալները պաշտպանված են անվտանգության ամենաբարձր չափանիշներով։',
      },
      accuracy: {
        title: 'Ճշգրտություն',
        description:
          'Ճշգրիտ հաշվարկներ և մանրուքների նկատմամբ առավելագույն ուշադրություն։',
      },
    },
  
    // Մեր մասին
    about: {
      title: 'ՄԵՐ ՄԱՍԻՆ',
      mission: {
        title: 'Մեր առաքելությունը',
        description:
          'Մեր նպատակն է մատուցել բարձրակարգ հաշվապահական և ֆինանսական ծառայություններ, որոնք օգնում են բիզնեսներին հասնել իրենց նպատակներին։ Մենք պարտավորվում ենք տրամադրել ճշգրիտ, ժամանակին և պրոֆեսիոնալ լուծումներ՝ գերազանցելով սպասելիքները։',
      },
      story: {
        title: 'ՄԵՐ ՊԱՏՄՈՒԹՅՈՒՆԸ',
        description:
          'Հիմնադրվելով Հայաստանում հաշվապահական ծառայությունները նոր մակարդակի բարձրացնելու տեսլականով՝ daena.am-ը դարձել է վստահելի գործընկեր տարբեր չափերի բիզնեսների համար։ Մեր փորձառու թիմը համադրում է ոլորտային խորը գիտելիքը և ժամանակակից մոտեցումները՝ ապահովելով լավագույն արդյունքներ։',
      },
      trust: {
        title: 'Ինչու են մեզ վստահում',
        description:
          'Գերազանցության, թափանցիկության և հաճախորդի հաջողության նկատմամբ մեր նվիրվածությունը մեզ վստահություն է բերել Հայաստանի ողջ տարածքում։ Մենք յուրաքանչյուր հաճախորդի վերաբերվում ենք որպես գործընկեր և ամբողջապես աջակցում նրա ֆինանսական հաջողությանը։',
      },
    },
  
    // Գործընկերներ
    partners: {
      title: 'ՄԵՐ ԳՈՐԾԸՆԿԵՐՆԵՐԸ',
      description:
        'Մենք համագործակցում ենք առաջատար կազմակերպությունների հետ՝ մեր հաճախորդներին լավագույն ծառայությունները տրամադրելու համար։',
    },
  
    // Կապ
    contact: {
      title: 'ԿԱՊ ՀԱՍՏԱՏԵՔ ՄԵԶ ՀԵՏ',
      subtitle:
        'Կապ հաստատեք մեր թիմի հետ խորհրդատվություն ստանալու կամ մեր ծառայությունների մասին ավելին իմանալու համար։',
      form: {
        name: 'Ձեր անունը',
        email: 'Էլ․ հասցե',
        message: 'Ձեր հաղորդագրությունը',
        submit: 'Ուղարկել հաղորդագրությունը',
        sending: 'Ուղարկվում է...',
        success:
          'Շնորհակալություն։ Ձեր հաղորդագրությունը հաջողությամբ ուղարկվել է։',
        error:
          'Ինչ-որ բան սխալ գնաց։ Խնդրում ենք փորձել կրկին։',
      },
      info: {
        address: 'Հասցե',
        phone: 'Հեռախոս',
        email: 'Էլ․ հասցե',
      },
    },
  
    // Footer
    footer: {
      rights: 'Բոլոր իրավունքները պաշտպանված են',
      address: 'Կոմիտասի պող. 5, Երևան',
    },
  },  
  en: {
    // Navigation
    nav: {
      home: 'Home',
      about: 'About Us',
      partners: 'Partners',
      contact: 'Contact',
    },
    // Hero Section
    hero: {
      title: 'Professional Accounting & Financial Services',
      subtitle: 'We provide comprehensive accounting, tax consulting, and business support services to help your business thrive in Armenia and beyond.',
      cta: 'Contact Us',
      consultation: 'Get a Consultation',
    },
    // Services
    services: {
      title: 'Our Services',
      accounting: {
        title: 'Accounting Services',
        description: 'Complete bookkeeping, financial record management, and accounting solutions tailored to your business needs.',
      },
      tax: {
        title: 'Tax Consulting',
        description: 'Expert tax planning, compliance, and optimization strategies to minimize your tax burden legally.',
      },
      financial: {
        title: 'Financial Reporting',
        description: 'Accurate and timely financial statements, reports, and analysis to support informed business decisions.',
      },
      business: {
        title: 'Business Support',
        description: 'Comprehensive business advisory services including registration, restructuring, and strategic planning.',
      },
    },
    // Benefits
    benefits: {
      title: 'Why Choose Us',
      experience: {
        title: 'Experience',
        description: 'Years of expertise serving businesses across various industries.',
      },
      reliability: {
        title: 'Reliability',
        description: 'Consistent, dependable service you can count on every time.',
      },
      confidentiality: {
        title: 'Confidentiality',
        description: 'Your financial data is protected with the highest security standards.',
      },
      accuracy: {
        title: 'Accuracy',
        description: 'Precise calculations and meticulous attention to every detail.',
      },
    },
    // About
    about: {
      title: 'About Us',
      mission: {
        title: 'Our Mission',
        description: 'To provide exceptional accounting and financial services that empower businesses to achieve their goals. We are committed to delivering accurate, timely, and professional solutions that exceed expectations.',
      },
      story: {
        title: 'Our Story',
        description: 'Founded with a vision to transform accounting services in Armenia, daena.am has grown to become a trusted partner for businesses of all sizes. Our team of experienced professionals combines deep industry knowledge with modern practices to deliver outstanding results.',
      },
      trust: {
        title: 'Why Clients Trust Us',
        description: 'Our commitment to excellence, transparency, and client success has earned us the trust of businesses throughout Armenia. We treat every client as a partner and work tirelessly to support their financial success.',
      },
    },
    // Partners
    partners: {
      title: 'Our Partners',
      description: 'We collaborate with leading organizations to deliver the best services to our clients.',
    },
    // Contact
    contact: {
      title: 'Contact Us',
      subtitle: 'Get in touch with our team for a consultation or to learn more about our services.',
      form: {
        name: 'Your Name',
        email: 'Email Address',
        message: 'Your Message',
        submit: 'Send Message',
        sending: 'Sending...',
        success: 'Thank you! Your message has been sent successfully.',
        error: 'Something went wrong. Please try again.',
      },
      info: {
        address: 'Address',
        phone: 'Phone',
        email: 'Email',
      },
    },
    // Footer
    footer: {
      rights: 'All rights reserved',
      address: 'Komitas Ave 5, Yerevan',
    },
  },
  ru: {
    // Navigation
    nav: {
      home: 'Главная',
      about: 'О нас',
      partners: 'Партнёры',
      contact: 'Контакты',
    },
    // Hero Section
    hero: {
      title: 'Профессиональные бухгалтерские и финансовые услуги',
      subtitle: 'Мы предоставляем комплексные услуги по бухгалтерскому учёту, налоговому консультированию и поддержке бизнеса.',
      cta: 'Связаться с нами',
      consultation: 'Получить консультацию',
    },
    // Services
    services: {
      title: 'Наши услуги',
      accounting: {
        title: 'Бухгалтерские услуги',
        description: 'Полное ведение бухгалтерии, управление финансовой документацией и учётные решения.',
      },
      tax: {
        title: 'Налоговый консалтинг',
        description: 'Экспертное налоговое планирование, соблюдение законодательства и оптимизация.',
      },
      financial: {
        title: 'Финансовая отчётность',
        description: 'Точная и своевременная финансовая отчётность для принятия обоснованных решений.',
      },
      business: {
        title: 'Поддержка бизнеса',
        description: 'Комплексные консультационные услуги, включая регистрацию и стратегическое планирование.',
      },
    },
    // Benefits
    benefits: {
      title: 'Почему выбирают нас',
      experience: {
        title: 'Опыт',
        description: 'Многолетний опыт работы с компаниями различных отраслей.',
      },
      reliability: {
        title: 'Надёжность',
        description: 'Стабильный и надёжный сервис, на который можно положиться.',
      },
      confidentiality: {
        title: 'Конфиденциальность',
        description: 'Ваши данные защищены по высшим стандартам безопасности.',
      },
      accuracy: {
        title: 'Точность',
        description: 'Точные расчёты и внимание к каждой детали.',
      },
    },
    // About
    about: {
      title: 'О нас',
      mission: {
        title: 'Наша миссия',
        description: 'Предоставлять исключительные бухгалтерские и финансовые услуги, которые помогают бизнесу достигать своих целей. Мы стремимся к точности, своевременности и профессионализму.',
      },
      story: {
        title: 'Наша история',
        description: 'Основанная с целью трансформировать бухгалтерские услуги в Армении, daena.am стала надёжным партнёром для компаний всех размеров. Наша команда сочетает глубокие знания с современными практиками.',
      },
      trust: {
        title: 'Почему клиенты нам доверяют',
        description: 'Наша приверженность качеству, прозрачности и успеху клиентов заслужила доверие компаний по всей Армении.',
      },
    },
    // Partners
    partners: {
      title: 'Наши партнёры',
      description: 'Мы сотрудничаем с ведущими организациями для предоставления лучших услуг.',
    },
    // Contact
    contact: {
      title: 'Контакты',
      subtitle: 'Свяжитесь с нами для консультации или получения информации о наших услугах.',
      form: {
        name: 'Ваше имя',
        email: 'Email адрес',
        message: 'Ваше сообщение',
        submit: 'Отправить',
        sending: 'Отправка...',
        success: 'Спасибо! Ваше сообщение успешно отправлено.',
        error: 'Что-то пошло не так. Попробуйте ещё раз.',
      },
      info: {
        address: 'Адрес',
        phone: 'Телефон',
        email: 'Email',
      },
    },
    // Footer
    footer: {
      rights: 'Все права защищены',
      address: 'пр. Комитаса 5, Ереван',
    },
  },
} as const

export type TranslationKeys = typeof translations.en
