export type Locale = 'hy' | 'en' | 'ru'

export const locales: Locale[] = ['hy', 'en', 'ru']

export const localeNames: Record<Locale, string> = {
  hy: 'HY',
  en: 'EN',
  ru: 'RU',
}

export const translations = {
  hy: {
    // Navigation
    nav: {
      home: 'Գլխավոր էջ',
      about: 'Մեր մասին',
      partners: 'Գործընկերներ',
      contact: 'Կապողջույց',
    },
    // Hero Section
    hero: {
      title: 'Պրոֆեսիոնալ հաշվապահություն և Ֆինանսական ծառայություններ',
      subtitle: 'Մենք ամբողջական հաշվապահություն, տագավորման կոնսոլտացիա և գործընկելիս ծառայություններ մատչում են ձեր գործընկելիսի պահանջներին, որպեսզի ձեր գործընկելը գերազանցի Հայաստանում և ոչ մի քայլոց հետո:',
      cta: 'Կապողջույց մեզին',
      consultation: 'Ստացել կոնսոլտացիան',
    },
    // Services
    services: {
      title: 'Մեր ծառայություններ',
      accounting: {
        title: 'Հաշվապահության ծառայություններ',
        description: 'Ամբողջ գրանցագրավորում, ֆինանսայի իրագրավորման կառավարում և հաշվապահության լուծումներ ձեր գործընկելիսի պահանջներին համապատասխան:',
      },
      tax: {
        title: 'Տագավորման կոնսոլտացիա',
        description: 'Սպատական տագավորման համաձայնագրում, համապատասխանություն և օտիվացման strateգիաներ ձեր տագավորման կենտրոնացման օգնությամբ օգնելու համար:',
      },
      financial: {
        title: 'Ֆինանսայի հաշվարկում',
        description: 'ճիշտ և ժամանակահամար ֆինանսայի հաշվարկներ, հաշվարկներ և վերլուծումներ ձեր գործընկելիսի օգնությամբ համաձայնագրում ստեղծելու համար:',
      },
      business: {
        title: 'Գործընկելիսի օգնությամբ',
        description: 'Ամբողջ գործընկելիսի խորհույց ծառայություններ, որպեսզի ներառվում է գրանցում, կառավարում և strateգիաների համաձայնագրում:',
      },
    },
    // Benefits
    benefits: {
      title: 'Ինչպե՞ս ընկելիս մեզ',
      experience: {
        title: 'Փորձ',
        description: 'Տարիկ փորձ գործընկելիսների համար տարբեր բանակիների մեջ:',
      },
      reliability: {
        title: 'Վերլուծում',
        description: 'Ստավորագրված և վերլուծող ծառայություն, որը կարող եք վարական էլ վերլուծել յուրաքանչյուր անգամ:',
      },
      confidentiality: {
        title: 'Սերտափոխություն',
        description: 'Ձեր ֆինանսայի տվյալները պահպանվում են ամենաբարձր սերտափոխության սակագներով:',
      },
      accuracy: {
        title: 'Ճիշտություն',
        description: 'Ճիշտ հաշվարկներ և շոտական նշումներ յուրաքանչյուր մանրամասնից:',
      },
    },
    // About
    about: {
      title: 'Մեր մասին',
      mission: {
        title: 'Մեր գործընկելիս',
        description: 'Ամբողջական հաշվապահություն և ֆինանսայի ծառայություններ մատչում են ձեր գործընկելիսի պահանջներին, որպեսզի ձեր գործընկելը գերազանցի Հայաստանում և ոչ մի քայլոց հետո:',
      },
      story: {
        title: 'Մեր պատմություն',
        description: 'Հիմնված ստեղծված է հայաստանի հաշվապահության ծառայությունների ձևափոխության համար, daena.am է զարուցել ստեղծված գործընկելիսների համար:',
      },
      trust: {
        title: 'Ինչպե՞ս կապողջույց է մեզ',
        description: 'Մեր գործընկելիս բարձրագույն սակագներով համաձայնագրում ստեղծելու համար:',
      },
    },
    // Partners
    partners: {
      title: 'Մեր գործընկելիսներ',
      description: 'Մենք գործատոմսով գործողական կազմակերպությունների հետ գործարկում ենք լավագույն ծառայությունների մատչում են ձեր համար:',
    },
    // Contact
    contact: {
      title: 'Կապողջույց մեզին',
      subtitle: 'Սեղմեք մեր գործատոմսին կոնսոլտացիայի համար կամ մեր ծառայությունների մասին մի քիչ իմանալու համար:',
      form: {
        name: 'Ձեր անունը',
        email: 'Էլ. հասցե',
        message: 'Ձեր հաղորդագրությունը',
        submit: 'ՈՒղարկել',
        sending: 'Ուղարկում...',
        success: 'Շնորհավորում է! Ձեր հաղորդագրությունը հաջողությամբ ուղարկվել է:',
        error: 'Ինչու ոչ ուղարկվել է։ Փորձեք կրկին:',
      },
      info: {
        address: 'Հասցե',
        phone: 'Հեռախոսահամար',
        email: 'Էլ. հասցե',
      },
    },
    // Footer
    footer: {
      rights: 'Բոլոր իրավայնությունները պաշտպանված են',
      address: 'Կոմիտասի պողովակ 5, Երևան',
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
