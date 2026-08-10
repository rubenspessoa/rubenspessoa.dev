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
      language: 'Language',
    },
    home: {
      title: 'Rogue Pixel — Apps for iPhone, iPad, and Mac by Rubens Pessoa',
      description:
        'Rogue Pixel is the app studio of independent founder Rubens Pessoa: native apps for iPhone, iPad, and Mac — Save My Cactus, Hustlrr, and Giorni.',
      ogDescription: 'Native apps for Apple devices from Rogue Pixel, the one-person studio of Rubens Pessoa.',
      heroTitle: 'Apps for iPhone, iPad, Mac, and Apple Watch.',
      heroLede:
        'Rogue Pixel is the one-person app studio of Rubens Pessoa in Graz, Austria. Every app here is native, built by one pair of hands, and looked after for the long run.',
      appsLabel: 'Apps by Rogue Pixel',
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
        prefix: 'Also from the studio:',
        appelou: 'a price-comparison app for Alagoas, Brazil',
        nitpickr: 'an AI code-review tool for GitHub',
      },
    },
    about: {
      title: 'About | Rogue Pixel',
      description:
        'Rubens Pessoa is an independent founder in Graz, Austria, making apps for iPhone, iPad, Mac, and Apple Watch.',
      kicker: 'About',
      heading: 'Hi, I’m Rubens.',
      p1: 'I’m a Brazilian founder living in Graz, Austria. I make apps for iPhone, iPad, Mac, and Apple Watch, and I do everything myself: the design, the code, and the support inbox. Rogue Pixel is the name that work ships under.',
      p2: 'Everything I ship is native, and I sweat the details: how an app feels on the platform it lives on, how it behaves offline, and what happens to your data — the short version is that it stays yours. Working alone also means there’s nobody else to blame when a detail is off, which turns out to be excellent motivation for getting the details right.',
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
      language: 'Idioma',
    },
    home: {
      title: 'Rogue Pixel — Apps para iPhone, iPad e Mac por Rubens Pessoa',
      description:
        'Rogue Pixel é o estúdio de apps de Rubens Pessoa: apps nativos para iPhone, iPad e Mac — Save My Cactus, Hustlrr e Giorni.',
      ogDescription: 'Apps nativos para dispositivos Apple da Rogue Pixel, o estúdio de uma pessoa só de Rubens Pessoa.',
      heroTitle: 'Apps para iPhone, iPad, Mac e Apple Watch.',
      heroLede:
        'A Rogue Pixel é o estúdio de apps de uma pessoa só: Rubens Pessoa, em Graz, na Áustria. Cada app daqui é nativo, feito por um único par de mãos e cuidado para durar.',
      appsLabel: 'Apps da Rogue Pixel',
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
        prefix: 'Também do estúdio:',
        appelou: 'um comparador de preços para Alagoas',
        nitpickr: 'uma ferramenta de revisão de código com IA para o GitHub',
      },
    },
    about: {
      title: 'Sobre | Rogue Pixel',
      description:
        'Rubens Pessoa mora em Graz, na Áustria, e cria seus próprios apps para iPhone, iPad, Mac e Apple Watch.',
      kicker: 'Sobre',
      heading: 'Oi, eu sou o Rubens.',
      p1: 'Sou brasileiro, moro em Graz, na Áustria, e crio meus próprios apps para iPhone, iPad, Mac e Apple Watch. Faço tudo sozinho: o design, o código e a caixa de entrada do suporte. A Rogue Pixel é o nome que esse trabalho leva.',
      p2: 'Tudo o que eu lanço é nativo, e me importo com os detalhes: como o app se sente na plataforma em que vive, como se comporta offline e o que acontece com os seus dados — a versão curta é que eles continuam seus. Trabalhar sozinho também significa que não tem mais ninguém para culpar quando um detalhe sai errado, o que acaba sendo uma ótima motivação para acertar os detalhes.',
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
      language: 'Sprache',
    },
    home: {
      title: 'Rogue Pixel — Apps für iPhone, iPad und Mac von Rubens Pessoa',
      description:
        'Rogue Pixel ist das App-Studio von Rubens Pessoa: native Apps für iPhone, iPad und Mac — Save My Cactus, Hustlrr und Giorni.',
      ogDescription: 'Native Apps für Apple-Geräte von Rogue Pixel, dem Ein-Personen-Studio von Rubens Pessoa.',
      heroTitle: 'Apps für iPhone, iPad, Mac und Apple Watch.',
      heroLede:
        'Rogue Pixel ist das Ein-Personen-App-Studio von Rubens Pessoa in Graz. Jede App hier ist nativ, von einem einzigen Paar Hände gebaut und auf lange Sicht gepflegt.',
      appsLabel: 'Apps von Rogue Pixel',
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
        prefix: 'Außerdem aus dem Studio:',
        appelou: 'eine Preisvergleichs-App für Alagoas, Brasilien',
        nitpickr: 'ein KI-Code-Review-Tool für GitHub',
      },
    },
    about: {
      title: 'Über mich | Rogue Pixel',
      description:
        'Rubens Pessoa lebt in Graz und baut seine eigenen Apps für iPhone, iPad, Mac und Apple Watch.',
      kicker: 'Über mich',
      heading: 'Hallo, ich bin Rubens.',
      p1: 'Ich bin Brasilianer, lebe in Graz und baue meine eigenen Apps für iPhone, iPad, Mac und Apple Watch – alles selbst: das Design, den Code und das Support-Postfach. Rogue Pixel ist der Name, unter dem diese Arbeit erscheint.',
      p2: 'Alles, was ich veröffentliche, ist nativ, und ich achte auf die Details: wie sich eine App auf ihrer Plattform anfühlt, wie sie offline funktioniert und was mit deinen Daten passiert — kurz gesagt: sie bleiben deine. Allein zu arbeiten heißt auch: Wenn ein Detail nicht passt, ist niemand sonst schuld. Das ist erstaunlich gute Motivation, die Details richtig hinzubekommen.',
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
