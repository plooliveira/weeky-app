const assert = require("node:assert/strict");
const { readFileSync } = require("node:fs");
const { join } = require("node:path");
const test = require("node:test");

const {
  detectOperatingSystem,
  downloadOptions,
  getDownloadLabel,
  getDownloadConfiguration,
  latestReleaseUrl,
  normalizeVersion,
} = require("../i18n.js");

test("prefers userAgentData.platform when it is available", () => {
  assert.equal(
    detectOperatingSystem({ userAgentData: { platform: "macOS" }, platform: "Win32" }),
    "macos",
  );
});

test("detects Windows from navigator.platform fallback", () => {
  assert.equal(detectOperatingSystem({ platform: "Win32", userAgent: "" }), "windows");
});

test("detects Linux from navigator.userAgent fallback", () => {
  assert.equal(detectOperatingSystem({ platform: "", userAgent: "Mozilla/5.0 (X11; Linux x86_64)" }), "linux");
});

test("treats Android, iOS, iPadOS, ChromeOS, and unknown platforms as unknown", () => {
  const mobileAndUnknownBrowsers = [
    { userAgentData: { platform: "Android" }, platform: "Linux armv8l", userAgent: "Android" },
    { userAgentData: { platform: "iOS" }, platform: "MacIntel", userAgent: "Mozilla/5.0" },
    { platform: "iPhone", userAgent: "Mozilla/5.0 (iPhone; CPU iPhone OS 18_0)" },
    { userAgentData: { platform: "macOS" }, platform: "MacIntel", userAgent: "Mozilla/5.0", maxTouchPoints: 5 },
    { platform: "MacIntel", userAgent: "Mozilla/5.0 (Macintosh)", maxTouchPoints: 5 },
    { userAgentData: { platform: "Chrome OS" }, platform: "Linux x86_64", userAgent: "CrOS" },
    { platform: "FreeBSD", userAgent: "Mozilla/5.0" },
  ];

  mobileAndUnknownBrowsers.forEach((browser) => {
    assert.equal(detectOperatingSystem(browser), "unknown");
  });
});

test("uses permanent latest-release URLs for every download", () => {
  assert.equal(downloadOptions.macos.href, `${latestReleaseUrl}/download/Weeky.dmg`);
  assert.equal(downloadOptions.windows.href, `${latestReleaseUrl}/download/Weeky-Windows-x64-Setup.exe`);
  assert.equal(downloadOptions.linux.href, `${latestReleaseUrl}/download/Weeky-Linux-x64.deb`);
  assert.equal(downloadOptions.linux.alternativeHref, `${latestReleaseUrl}/download/Weeky-Linux-x64.tar.gz`);
  assert.equal(downloadOptions.unknown.href, latestReleaseUrl);
});

test("maps each operating system to the expected primary download", () => {
  const macOS = getDownloadConfiguration({ userAgentData: { platform: "macOS" } });
  const windows = getDownloadConfiguration({ userAgentData: { platform: "Windows" } });
  const linux = getDownloadConfiguration({ userAgentData: { platform: "Linux" } });
  const mobile = getDownloadConfiguration({ userAgentData: { platform: "Android" } });

  assert.equal(macOS.href, `${latestReleaseUrl}/download/Weeky.dmg`);
  assert.equal(windows.href, `${latestReleaseUrl}/download/Weeky-Windows-x64-Setup.exe`);
  assert.equal(linux.href, `${latestReleaseUrl}/download/Weeky-Linux-x64.deb`);
  assert.equal(linux.showLinuxAlternative, true);
  assert.equal(mobile.href, latestReleaseUrl);
  assert.equal(mobile.showLinuxAlternative, false);
});

test("keeps a latest-release fallback in the static HTML", () => {
  const indexHtml = readFileSync(join(__dirname, "..", "index.html"), "utf8");
  const fallbackHref = `href="${latestReleaseUrl}"`;

  assert.equal(indexHtml.split(fallbackHref).length - 1, 2);
  assert.match(indexHtml, /data-download-button/);
  assert.match(indexHtml, /data-linux-download\s+hidden/);
});

test("shows the current version only on direct-download labels", () => {
  const macOS = getDownloadConfiguration({ userAgentData: { platform: "macOS" } });
  const unknown = getDownloadConfiguration({ userAgentData: { platform: "Android" } });

  assert.equal(getDownloadLabel("pt-BR", macOS, "0.1.2"), "Baixar para macOS · 0.1.2");
  assert.equal(getDownloadLabel("en", macOS, "v0.1.2"), "Download for macOS · 0.1.2");
  assert.equal(getDownloadLabel("pt-BR", unknown, "0.1.2"), "Ver downloads");
});

test("version.json contains a valid semantic version", () => {
  const metadata = JSON.parse(readFileSync(join(__dirname, "..", "version.json"), "utf8"));
  assert.equal(normalizeVersion(metadata.version), metadata.version);
});
