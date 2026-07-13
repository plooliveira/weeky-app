const translations = {
  "pt-BR": {
    common: {
      skipToContent: "Pular para o conteúdo",
      homeLabel: "Página inicial do Weeky",
      primaryNavigation: "Navegação principal",
      features: "Recursos",
      download: "Baixar",
      privacy: "Privacidade",
      privacyPolicy: "Política de Privacidade",
      downloadForMac: "Baixar para macOS",
      downloadForWindows: "Baixar para Windows",
      downloadForLinux: "Baixar para Linux",
      viewDownloads: "Ver downloads",
      linuxPortableDownload: "Também disponível: .tar.gz portátil",
      backToHome: "Voltar ao início",
      languageSelector: "Selecionar idioma",
    },
    home: {
      title: "Weeky — Planejador semanal para desktop",
      metaDescription: "Weeky é um planejador semanal simples e focado para desktop.",
      eyebrow: "Um planejador semanal para desktop",
      heroTitle: "Planeje sua semana sem complicação.",
      heroDescription: "Weeky é um planejador semanal simples e focado para desktop.",
      allReleases: "Ver todas as versões",
      demoLabel: "Demonstração do planejador semanal Weeky",
      featuresEyebrow: "Feito para manter o foco",
      featuresTitle: "Tudo o que você precisa para uma semana mais clara.",
      featureOneTitle: "Planejamento semanal",
      featureOneDescription: "Visualize seu tempo ao longo da semana e planeje com o todo em vista.",
      featureTwoTitle: "Simples e sem distrações",
      featureTwoDescription: "Uma interface tranquila que mantém a semana no centro da sua atenção.",
      featureThreeTitle: "Experiência nativa para desktop",
      featureThreeDescription: "Feito para uma experiência focada e familiar no desktop.",
      featureFourTitle: "Seus dados no seu dispositivo",
      featureFourDescription: "Seus dados de planejamento ficam no seu dispositivo e sob seu controle.",
      printLabel: "IMPRIMA SUA SEMANA",
      printTitle: "Sua semana pronta para acompanhar você.",
      printDescription: "Imprima sua agenda quando quiser uma visão mais tranquila, longe da tela. Seus planos e categorias permanecem claros, mesmo no papel.",
      printAlt: "Uma agenda semanal imprimível do Weeky com blocos de tempo e categorias",
      ctaEyebrow: "Abra espaço para o que importa",
      ctaTitle: "Comece com uma semana mais clara.",
      footerDescription: "Um planejador semanal focado para desktop.",
    },
    privacy: {
      title: "Política de Privacidade — Weeky",
      metaDescription: "Política de Privacidade do Weeky, um planejador semanal para desktop.",
      heading: "Política de Privacidade",
      intro: "O Weeky está em desenvolvimento ativo. Esta política descreve como o app lida com informações na versão atual.",
      lastUpdated: "Última atualização: 12 de julho de 2026",
      localTitle: "Seus dados de planejamento ficam no seu dispositivo",
      localDescription: "O Weeky armazena seus dados de planejamento localmente no seu dispositivo. Seus planos semanais não são enviados para um servidor do Weeky.",
      analyticsTitle: "Sem análises",
      analyticsDescription: "O Weeky não usa ferramentas de análise ou rastreamento dentro do aplicativo.",
      accountsTitle: "Nenhuma conta necessária",
      accountsDescription: "Atualmente, o Weeky não exige que você crie uma conta ou forneça informações pessoais para usar o aplicativo.",
      changesTitle: "Alterações nesta política",
      changesDescription: "Esta política será atualizada caso a forma como o Weeky lida com dados mude. A versão mais recente continuará disponível nesta página.",
      returnToWeeky: "Voltar ao Weeky",
    },
  },
  en: {
    common: {
      skipToContent: "Skip to content",
      homeLabel: "Weeky home",
      primaryNavigation: "Primary navigation",
      features: "Features",
      download: "Download",
      privacy: "Privacy",
      privacyPolicy: "Privacy Policy",
      downloadForMac: "Download for macOS",
      downloadForWindows: "Download for Windows",
      downloadForLinux: "Download for Linux",
      viewDownloads: "View downloads",
      linuxPortableDownload: "Also available: portable .tar.gz",
      backToHome: "Back to home",
      languageSelector: "Choose language",
    },
    home: {
      title: "Weeky — Weekly planner for desktop",
      metaDescription: "Weeky is a simple and focused weekly planner for desktop.",
      eyebrow: "A weekly planner for desktop",
      heroTitle: "Plan your week without the clutter.",
      heroDescription: "Weeky is a simple and focused weekly planner for desktop.",
      allReleases: "View all releases",
      demoLabel: "Weeky weekly planner demonstration",
      featuresEyebrow: "Designed for focus",
      featuresTitle: "Everything you need for a clearer week.",
      featureOneTitle: "Weekly planning",
      featureOneDescription: "See your time across the week and plan with the full picture in view.",
      featureTwoTitle: "Simple and distraction-free",
      featureTwoDescription: "A calm interface that keeps the week at the center of your attention.",
      featureThreeTitle: "Native desktop experience",
      featureThreeDescription: "Made for a focused, familiar desktop experience.",
      featureFourTitle: "Local-first workflow",
      featureFourDescription: "Your planning data stays on your device and remains under your control.",
      printLabel: "PRINT YOUR WEEK",
      printTitle: "Your week, ready to take with you.",
      printDescription: "Print your schedule whenever you want a calmer view away from the screen. Your plans and categories stay clear, even on paper.",
      printAlt: "A printable Weeky weekly schedule with time blocks and categories",
      ctaEyebrow: "Make space for what matters",
      ctaTitle: "Start with a clearer week.",
      footerDescription: "A focused weekly planner for desktop.",
    },
    privacy: {
      title: "Privacy Policy — Weeky",
      metaDescription: "Privacy Policy for Weeky, a weekly planner for desktop.",
      heading: "Privacy Policy",
      intro: "Weeky is currently in active development. This policy describes how the app handles information in its current version.",
      lastUpdated: "Last updated: July 12, 2026",
      localTitle: "Your planning data stays local",
      localDescription: "Weeky stores your planning data locally on your device. Your weekly plans are not sent to a Weeky server.",
      analyticsTitle: "No analytics",
      analyticsDescription: "Weeky does not currently use analytics or tracking tools inside the application.",
      accountsTitle: "No account required",
      accountsDescription: "Weeky does not currently require you to create an account or provide personal information to use the application.",
      changesTitle: "Changes to this policy",
      changesDescription: "This policy will be updated if the way Weeky handles data changes. The latest version will remain available on this page.",
      returnToWeeky: "Return to Weeky",
    },
  },
};

const latestReleaseUrl = "https://github.com/plooliveira/weeky-app/releases/latest";

const downloadOptions = {
  macos: {
    href: `${latestReleaseUrl}/download/Weeky.dmg`,
    labelKey: "common.downloadForMac",
  },
  windows: {
    href: `${latestReleaseUrl}/download/Weeky-Windows-x64-Setup.exe`,
    labelKey: "common.downloadForWindows",
  },
  linux: {
    href: `${latestReleaseUrl}/download/Weeky-Linux-x64.deb`,
    alternativeHref: `${latestReleaseUrl}/download/Weeky-Linux-x64.tar.gz`,
    labelKey: "common.downloadForLinux",
  },
  unknown: {
    href: latestReleaseUrl,
    labelKey: "common.viewDownloads",
  },
};

const classifyPlatform = (value) => {
  const platform = value.toLowerCase();
  if (platform.includes("mac")) return "macos";
  if (platform.includes("win")) return "windows";
  if (platform.includes("linux") || platform.includes("x11")) return "linux";
  return "unknown";
};

const detectOperatingSystem = (browser = globalThis.navigator ?? {}) => {
  const userAgentDataPlatform = String(browser.userAgentData?.platform ?? "");
  const platform = String(browser.platform ?? "");
  const userAgent = String(browser.userAgent ?? "");
  const browserIdentity = `${userAgentDataPlatform} ${platform} ${userAgent}`.toLowerCase();

  if (/android|\bios\b|iphone|ipad|ipod|cros|chrome os/.test(browserIdentity)) return "unknown";
  if (browserIdentity.includes("mac") && browser.maxTouchPoints > 1) {
    return "unknown";
  }
  if (userAgentDataPlatform) return classifyPlatform(userAgentDataPlatform);

  const platformResult = classifyPlatform(platform);
  return platformResult === "unknown" ? classifyPlatform(userAgent) : platformResult;
};

const getDownloadConfiguration = (browser = globalThis.navigator ?? {}) => {
  const operatingSystem = detectOperatingSystem(browser);
  return {
    operatingSystem,
    showLinuxAlternative: operatingSystem === "linux",
    ...downloadOptions[operatingSystem],
  };
};

const getValue = (language, key) =>
  key.split(".").reduce((value, segment) => value?.[segment], translations[language]);

let currentVersion = "";

const normalizeVersion = (value) => {
  if (typeof value !== "string") return "";
  const version = value.trim().replace(/^v/i, "");
  return /^\d+\.\d+\.\d+(?:-[0-9A-Za-z.-]+)?(?:\+[0-9A-Za-z.-]+)?$/.test(version)
    ? version
    : "";
};

const getDownloadLabel = (language, option, version = currentVersion) => {
  const label = getValue(language, option.labelKey);
  const normalizedVersion = normalizeVersion(version);
  return normalizedVersion && option.operatingSystem !== "unknown"
    ? `${label} · ${normalizedVersion}`
    : label;
};

const preferredLanguage = () => {
  const savedLanguage = localStorage.getItem("weeky-language");
  if (savedLanguage && translations[savedLanguage]) return savedLanguage;
  return navigator.language?.toLowerCase().startsWith("pt") ? "pt-BR" : "en";
};

const configureDownloads = (language) => {
  const option = getDownloadConfiguration();

  document.querySelectorAll("[data-download-button]").forEach((button) => {
    button.href = option.href;
  });
  document.querySelectorAll("[data-download-label]").forEach((label) => {
    label.textContent = getDownloadLabel(language, option);
  });

  const linuxDownload = document.querySelector("[data-linux-download]");
  if (linuxDownload) {
    linuxDownload.href = downloadOptions.linux.alternativeHref;
    linuxDownload.hidden = !option.showLinuxAlternative;
  }

  const linuxDownloadLabel = document.querySelector("[data-linux-download-label]");
  if (linuxDownloadLabel) {
    linuxDownloadLabel.textContent = getValue(language, "common.linuxPortableDownload");
  }
};

const loadVersion = async () => {
  if (window.location.protocol === "file:") return;

  try {
    const response = await fetch("./version.json", { cache: "no-cache" });
    if (!response.ok) return;

    const metadata = await response.json();
    const version = normalizeVersion(metadata.version);
    if (!version) return;

    currentVersion = version;
    configureDownloads(document.documentElement.lang);
  } catch {
    // The download links remain functional when version metadata is unavailable.
  }
};

const setLanguage = (language) => {
  const selectedLanguage = translations[language] ? language : "en";
  document.documentElement.lang = selectedLanguage;
  document.querySelectorAll("[data-i18n]").forEach((element) => {
    const value = getValue(selectedLanguage, element.dataset.i18n);
    if (!value) return;

    const attribute = element.dataset.i18nAttr;
    if (attribute) element.setAttribute(attribute, value);
    else element.textContent = value;
  });
  document.querySelectorAll("[data-language]").forEach((button) => {
    button.setAttribute("aria-pressed", String(button.dataset.language === selectedLanguage));
  });
  configureDownloads(selectedLanguage);
  localStorage.setItem("weeky-language", selectedLanguage);
};

if (typeof document !== "undefined") {
  document.querySelectorAll("[data-language]").forEach((button) => {
    button.addEventListener("click", () => setLanguage(button.dataset.language));
  });

  setLanguage(preferredLanguage());
  loadVersion();
}

if (typeof module !== "undefined") {
  module.exports = {
    detectOperatingSystem,
    downloadOptions,
    getDownloadLabel,
    getDownloadConfiguration,
    latestReleaseUrl,
    normalizeVersion,
  };
}
