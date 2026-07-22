export type Locale = 'en' | 'pt-br' | 'de';

export const localeNames: Record<Locale, string> = {
  en: 'English',
  'pt-br': 'Português',
  de: 'Deutsch',
};

export const localeLangTags: Record<Locale, string> = {
  en: 'en-GB',
  'pt-br': 'pt-BR',
  de: 'de-AT',
};

export const localeOgTags: Record<Locale, string> = {
  en: 'en_GB',
  'pt-br': 'pt_BR',
  de: 'de_AT',
};

/** Path prefix for each locale ('' for the default). */
export const localePrefixes: Record<Locale, string> = {
  en: '',
  'pt-br': '/pt-br',
  de: '/de',
};

/** Base paths that exist in every locale; other paths fall back to the locale home. */
export const localizedPaths = ['/', '/about/'];

export const ui = {
  en: {
    nav: { apps: 'Apps', about: 'About' },
    footer: {
      privacy: 'Privacy',
      terms: 'Terms',
      imprint: 'Imprint',
      builtIn: 'Built in Graz, Austria.',
      themeLabels: { auto: 'Auto', light: 'Light', dark: 'Dark' },
      themeName: 'Theme',
    },
    home: {
      title: 'Rubens Pessoa — Apps for iPhone, iPad, and Mac',
      description:
        'Rubens Pessoa is an independent founder making apps for iPhone, iPad, and Mac: Save My Cactus, Hustlrr, and Giorni.',
      ogDescription: 'Independent founder making apps for Apple devices.',
      heroTitle: 'I make apps for iPhone, iPad, and Mac.',
      heroLede:
        'I’m an independent founder in Graz, Austria. Every app here is built and looked after by me alone, and I like to keep them small.',
      appsLabel: 'Apps',
      comingSoon: 'Coming soon',
      learnMore: 'Learn more',
      smc: {
        tagline: 'AI plant care',
        summary:
          'Stop killing your plants. Point your camera at a struggling plant and the app tells you what it is and what’s wrong, then builds a watering schedule you’ll actually follow.',
        jsonDescription: 'AI plant care: find out what your plant needs and keep a watering schedule.',
      },
      hustlrr: {
        tagline: 'AI chat for Apple devices',
        summary:
          'The big AI models in one native app for iPhone, iPad, and Mac. Ask a question once and compare the answers side by side. Chats stay on your device and sync over iCloud.',
        jsonDescription: 'The big AI models in one native app for iPhone, iPad, and Mac.',
        storeAria: 'Download Hustlrr on the App Store',
      },
      giorni: {
        tagline: 'Daily habit tracker',
        summary:
          'A habit tracker that doesn’t nag. Tick off your days, run a focus session when you need one, and pick the streak back up after a bad week.',
        jsonDescription: 'A daily habit tracker with focus sessions and iCloud sync.',
        storeAria: 'Download Giorni on the App Store',
      },
      alsoMade: {
        prefix: 'Also made:',
        appelou: 'a price-comparison app for Alagoas, Brazil',
        nitpickr: 'an AI code-review tool for GitHub',
      },
    },
    about: {
      title: 'About | Rubens Pessoa',
      description:
        'Rubens Pessoa is an independent founder in Graz, Austria, making apps for iPhone, iPad, and Mac.',
      kicker: 'About',
      heading: 'Hi, I’m Rubens.',
      p1: 'I’m a Brazilian founder living in Graz, Austria. I make apps for iPhone, iPad, and Mac, and I do everything myself: the design, the code, and the support inbox.',
      p2: 'I keep the apps small on purpose. Each one does a single job, and I’d rather ship something narrow that works than something broad that sort of does. Working alone also means there’s nobody else to blame when a detail is off, which turns out to be excellent motivation for getting the details right.',
      p3: 'Outside of work I’m usually on a bike, on skis I’m still learning to trust, or playing the guitar I never quite put down after years in a band. I’m married to a brilliant engineer, so home is basically a happy nerdy two-person lab.',
      contactPrefix: 'Questions about the apps, or just want to say hi? Write me at',
      portraitAlt: 'Portrait of Rubens Pessoa',
    },
  },
  'pt-br': {
    nav: { apps: 'Apps', about: 'Sobre' },
    footer: {
      privacy: 'Privacidade',
      terms: 'Termos',
      imprint: 'Aviso legal',
      builtIn: 'Feito em Graz, Áustria.',
      themeLabels: { auto: 'Automático', light: 'Claro', dark: 'Escuro' },
      themeName: 'Tema',
    },
    home: {
      title: 'Rubens Pessoa — Apps para iPhone, iPad e Mac',
      description:
        'Rubens Pessoa é um fundador independente que faz apps para iPhone, iPad e Mac: Save My Cactus, Hustlrr e Giorni.',
      ogDescription: 'Fundador independente fazendo apps para dispositivos Apple.',
      heroTitle: 'Eu faço apps para iPhone, iPad e Mac.',
      heroLede:
        'Sou um fundador independente em Graz, na Áustria. Cada app daqui é feito e cuidado só por mim, e gosto de mantê-los pequenos.',
      appsLabel: 'Apps',
      comingSoon: 'Em breve',
      learnMore: 'Saiba mais',
      smc: {
        tagline: 'Cuidado de plantas com IA',
        summary:
          'Pare de matar suas plantas. Aponte a câmera para uma planta sofrendo e o app diz o que ela é e o que há de errado, e ainda monta um cronograma de rega que você vai conseguir seguir.',
        jsonDescription: 'Cuidado de plantas com IA: descubra o que sua planta precisa e mantenha um cronograma de rega.',
      },
      hustlrr: {
        tagline: 'Chat de IA para dispositivos Apple',
        summary:
          'Os grandes modelos de IA em um app nativo para iPhone, iPad e Mac. Pergunte uma vez e compare as respostas lado a lado. As conversas ficam no seu aparelho e sincronizam pelo iCloud.',
        jsonDescription: 'Os grandes modelos de IA em um app nativo para iPhone, iPad e Mac.',
        storeAria: 'Baixar o Hustlrr na App Store',
      },
      giorni: {
        tagline: 'Hábitos diários',
        summary:
          'Um app de hábitos que não fica no seu pé. Marque seus dias, use uma sessão de foco quando precisar e retome a sequência depois de uma semana ruim.',
        jsonDescription: 'Um rastreador de hábitos diários com sessões de foco e sincronização via iCloud.',
        storeAria: 'Baixar o Giorni na App Store',
      },
      alsoMade: {
        prefix: 'Também fiz:',
        appelou: 'um comparador de preços para Alagoas',
        nitpickr: 'uma ferramenta de revisão de código com IA para o GitHub',
      },
    },
    about: {
      title: 'Sobre | Rubens Pessoa',
      description:
        'Rubens Pessoa é um fundador independente em Graz, na Áustria, fazendo apps para iPhone, iPad e Mac.',
      kicker: 'Sobre',
      heading: 'Oi, eu sou o Rubens.',
      p1: 'Sou um fundador brasileiro morando em Graz, na Áustria. Faço apps para iPhone, iPad e Mac, e faço tudo sozinho: o design, o código e a caixa de entrada do suporte.',
      p2: 'Mantenho os apps pequenos de propósito. Cada um faz uma única coisa, e prefiro lançar algo enxuto que funciona a algo amplo que meio que funciona. Trabalhar sozinho também significa que não tem mais ninguém para culpar quando um detalhe sai errado, o que acaba sendo uma ótima motivação para acertar os detalhes.',
      p3: 'Fora do trabalho, geralmente estou na bicicleta, nos esquis em que ainda estou aprendendo a confiar, ou tocando a guitarra que nunca larguei desde os tempos de banda. Sou casado com uma engenheira brilhante, então nossa casa é basicamente um laboratório nerd feliz de duas pessoas.',
      contactPrefix: 'Dúvidas sobre os apps, ou só quer dizer um oi? Me escreva em',
      portraitAlt: 'Retrato de Rubens Pessoa',
    },
  },
  de: {
    nav: { apps: 'Apps', about: 'Über mich' },
    footer: {
      privacy: 'Datenschutz',
      terms: 'Nutzungsbedingungen',
      imprint: 'Impressum',
      builtIn: 'Gemacht in Graz, Österreich.',
      themeLabels: { auto: 'Automatisch', light: 'Hell', dark: 'Dunkel' },
      themeName: 'Design',
    },
    home: {
      title: 'Rubens Pessoa — Apps für iPhone, iPad und Mac',
      description:
        'Rubens Pessoa ist ein unabhängiger Gründer und macht Apps für iPhone, iPad und Mac: Save My Cactus, Hustlrr und Giorni.',
      ogDescription: 'Unabhängiger Gründer, der Apps für Apple-Geräte macht.',
      heroTitle: 'Ich mache Apps für iPhone, iPad und Mac.',
      heroLede:
        'Ich bin unabhängiger Gründer in Graz. Jede App hier baue und betreue ich allein, und ich halte sie bewusst klein.',
      appsLabel: 'Apps',
      comingSoon: 'Demnächst',
      learnMore: 'Mehr erfahren',
      smc: {
        tagline: 'Pflanzenpflege mit KI',
        summary:
          'Schluss mit toten Pflanzen. Richte die Kamera auf eine kränkelnde Pflanze und die App sagt dir, was es für eine ist und was ihr fehlt. Dazu gibt es einen Gießplan, den du auch wirklich einhältst.',
        jsonDescription: 'Pflanzenpflege mit KI: finde heraus, was deine Pflanze braucht, und halte einen Gießplan ein.',
      },
      hustlrr: {
        tagline: 'KI-Chat für Apple-Geräte',
        summary:
          'Die großen KI-Modelle in einer nativen App für iPhone, iPad und Mac. Stell eine Frage einmal und vergleiche die Antworten nebeneinander. Chats bleiben am Gerät und synchronisieren über iCloud.',
        jsonDescription: 'Die großen KI-Modelle in einer nativen App für iPhone, iPad und Mac.',
        storeAria: 'Hustlrr im App Store laden',
      },
      giorni: {
        tagline: 'Täglicher Habit-Tracker',
        summary:
          'Ein Habit-Tracker, der nicht nervt. Hak deine Tage ab, starte eine Fokus-Session, wenn du eine brauchst, und nimm die Serie nach einer schlechten Woche einfach wieder auf.',
        jsonDescription: 'Ein täglicher Habit-Tracker mit Fokus-Sessions und iCloud-Sync.',
        storeAria: 'Giorni im App Store laden',
      },
      alsoMade: {
        prefix: 'Außerdem gebaut:',
        appelou: 'eine Preisvergleichs-App für Alagoas, Brasilien',
        nitpickr: 'ein KI-Code-Review-Tool für GitHub',
      },
    },
    about: {
      title: 'Über mich | Rubens Pessoa',
      description:
        'Rubens Pessoa ist ein unabhängiger Gründer in Graz und macht Apps für iPhone, iPad und Mac.',
      kicker: 'Über mich',
      heading: 'Hallo, ich bin Rubens.',
      p1: 'Ich bin ein brasilianischer Gründer und lebe in Graz. Ich mache Apps für iPhone, iPad und Mac, und zwar alles selbst: das Design, den Code und das Support-Postfach.',
      p2: 'Ich halte meine Apps bewusst klein. Jede macht genau eine Sache, und mir ist etwas Schmales, das funktioniert, lieber als etwas Breites, das nur so halb funktioniert. Allein zu arbeiten heißt auch: Wenn ein Detail nicht passt, ist niemand sonst schuld. Das ist erstaunlich gute Motivation, die Details richtig hinzubekommen.',
      p3: 'Abseits der Arbeit bin ich meistens am Rad, auf Skiern, denen ich noch nicht ganz traue, oder an der Gitarre, die ich seit meinen Bandjahren nie ganz weggelegt habe. Ich bin mit einer großartigen Ingenieurin verheiratet, unser Zuhause ist also im Grunde ein glückliches Nerd-Labor für zwei.',
      contactPrefix: 'Fragen zu den Apps, oder einfach Hallo sagen? Schreib mir an',
      portraitAlt: 'Porträt von Rubens Pessoa',
    },
  },
} as const;

export function pathForLocale(currentPath: string, target: Locale): string {
  let base = currentPath;
  for (const prefix of Object.values(localePrefixes)) {
    if (prefix && base.startsWith(prefix + '/')) {
      base = base.slice(prefix.length);
      break;
    }
  }
  if (!localizedPaths.includes(base)) {
    base = '/';
  }
  const prefix = localePrefixes[target];
  return prefix ? prefix + base : base;
}

export function localeFromPath(currentPath: string): Locale {
  if (currentPath === '/pt-br' || currentPath.startsWith('/pt-br/')) return 'pt-br';
  if (currentPath === '/de' || currentPath.startsWith('/de/')) return 'de';
  return 'en';
}
