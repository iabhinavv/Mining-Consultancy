/* Amrev Consulting Group — consent management.
 *
 * MUST load before any Google or Meta tag. It sets Google Consent Mode v2
 * defaults to "denied" so no advertising or analytics storage can be written
 * before the visitor chooses, then loads the tags only for the categories the
 * visitor agrees to.
 *
 * Why this exists:
 *  - Meta Business Tools Terms require, in jurisdictions that need informed
 *    consent, that you ensure "in a verifiable manner" that the user consents
 *    BEFORE Meta cookies are stored.
 *  - Google's EU user consent policy requires advertisers with EEA, UK or Swiss
 *    traffic to collect consent and pass it to Google via Consent Mode v2.
 *  - Ghana's Data Protection Act, 2012 (Act 843) and South Africa's POPIA both
 *    treat online identifiers as personal data needing a lawful basis.
 *
 * SETUP — replace the two placeholders below, then uncomment the loaders.
 *   GOOGLE_TAG_ID : "AW-XXXXXXXXX" (Google Ads) or "G-XXXXXXXXXX" (GA4)
 *   META_PIXEL_ID : "XXXXXXXXXXXXXXX"
 * Until they are set, the banner still works and simply stores the choice.
 */
(function () {
  'use strict';

  var GOOGLE_TAG_ID = '';   // e.g. 'AW-123456789' — leave empty to disable
  var META_PIXEL_ID = '';   // e.g. '123456789012345' — leave empty to disable

  var STORE_KEY = 'amrev_consent';
  var POLICY_VERSION = '2026-10-27';   // bump this when the cookie policy changes
  var EXPIRY_DAYS = 180;               // re-ask after six months

  /* ---------- Google Consent Mode v2: deny everything up front ---------- */
  window.dataLayer = window.dataLayer || [];
  function gtag() { window.dataLayer.push(arguments); }
  window.gtag = window.gtag || gtag;

  gtag('consent', 'default', {
    ad_storage: 'denied',
    ad_user_data: 'denied',
    ad_personalization: 'denied',
    analytics_storage: 'denied',
    functionality_storage: 'granted',
    security_storage: 'granted',
    wait_for_update: 500
  });

  /* ---------- stored choice ---------- */
  function read() {
    try {
      var raw = localStorage.getItem(STORE_KEY);
      if (!raw) return null;
      var v = JSON.parse(raw);
      if (v.version !== POLICY_VERSION) return null;
      if (Date.now() - v.at > EXPIRY_DAYS * 864e5) return null;
      return v;
    } catch (e) { return null; }
  }

  function save(analytics, advertising) {
    var record = {
      version: POLICY_VERSION,
      at: Date.now(),
      iso: new Date().toISOString(),
      analytics: !!analytics,
      advertising: !!advertising
    };
    try { localStorage.setItem(STORE_KEY, JSON.stringify(record)); } catch (e) {}
    return record;
  }

  /* ---------- tag loaders, only called once consent is given ---------- */
  var googleLoaded = false, metaLoaded = false;

  function loadGoogle() {
    if (googleLoaded || !GOOGLE_TAG_ID) return;
    googleLoaded = true;
    var s = document.createElement('script');
    s.async = true;
    s.src = 'https://www.googletagmanager.com/gtag/js?id=' + GOOGLE_TAG_ID;
    document.head.appendChild(s);
    gtag('js', new Date());
    gtag('config', GOOGLE_TAG_ID, { anonymize_ip: true });
  }

  function loadMeta() {
    if (metaLoaded || !META_PIXEL_ID) return;
    metaLoaded = true;
    /* eslint-disable */
    !function (f, b, e, v, n, t, s) {
      if (f.fbq) return; n = f.fbq = function () {
        n.callMethod ? n.callMethod.apply(n, arguments) : n.queue.push(arguments)
      };
      if (!f._fbq) f._fbq = n; n.push = n; n.loaded = !0; n.version = '2.0';
      n.queue = []; t = b.createElement(e); t.async = !0; t.src = v;
      s = b.getElementsByTagName(e)[0]; s.parentNode.insertBefore(t, s)
    }(window, document, 'script', 'https://connect.facebook.net/en_US/fbevents.js');
    /* eslint-enable */
    window.fbq('init', META_PIXEL_ID);
    window.fbq('track', 'PageView');
  }

  function apply(c) {
    gtag('consent', 'update', {
      ad_storage: c.advertising ? 'granted' : 'denied',
      ad_user_data: c.advertising ? 'granted' : 'denied',
      ad_personalization: c.advertising ? 'granted' : 'denied',
      analytics_storage: c.analytics ? 'granted' : 'denied'
    });
    if (c.analytics || c.advertising) loadGoogle();
    if (c.advertising) loadMeta();
    document.documentElement.dataset.consent =
      (c.advertising ? 'ads' : c.analytics ? 'analytics' : 'essential');
  }

  /* ---------- banner ---------- */
  var banner = null;

  function close() {
    if (!banner) return;
    banner.remove();
    banner = null;
    var t = document.getElementById('cookie-settings-link');
    if (t) t.focus();
  }

  function decide(analytics, advertising) {
    apply(save(analytics, advertising));
    close();
  }

  function build() {
    if (banner) return;
    banner = document.createElement('div');
    banner.className = 'cbar';
    banner.setAttribute('role', 'dialog');
    banner.setAttribute('aria-labelledby', 'cbar-h');
    banner.setAttribute('aria-describedby', 'cbar-d');
    banner.innerHTML =
      '<div class="cbar-inner">' +
        '<div class="cbar-text">' +
          '<h2 id="cbar-h">Cookies on this site</h2>' +
          '<p id="cbar-d">We use cookies that are necessary for the site to work. With your ' +
          'permission we would also like to use analytics and advertising cookies, including ' +
          'tags from Google and a Meta pixel, which let those companies receive information ' +
          'about your visit and use it to measure and target advertising. You can change your ' +
          'mind at any time. See our <a href="privacy.html">privacy and cookie policy</a>.</p>' +
          '<div class="cbar-opts">' +
            '<label><input type="checkbox" checked disabled> Necessary <span>Always on</span></label>' +
            '<label><input type="checkbox" id="c-an"> Analytics</label>' +
            '<label><input type="checkbox" id="c-ad"> Advertising</label>' +
          '</div>' +
        '</div>' +
        '<div class="cbar-btns">' +
          '<button type="button" class="btn btn-yellow" id="c-all">Accept all</button>' +
          '<button type="button" class="btn btn-line" id="c-save">Save choices</button>' +
          '<button type="button" class="btn btn-line" id="c-none">Reject all</button>' +
        '</div>' +
      '</div>';
    document.body.appendChild(banner);

    banner.querySelector('#c-all').addEventListener('click', function () { decide(true, true); });
    banner.querySelector('#c-none').addEventListener('click', function () { decide(false, false); });
    banner.querySelector('#c-save').addEventListener('click', function () {
      decide(banner.querySelector('#c-an').checked, banner.querySelector('#c-ad').checked);
    });

    var existing = read();
    if (existing) {
      banner.querySelector('#c-an').checked = existing.analytics;
      banner.querySelector('#c-ad').checked = existing.advertising;
    }
    banner.querySelector('#c-all').focus();
  }

  /* public: footer "Cookie settings" link reopens the banner */
  window.amrevConsent = {
    open: build,
    current: read,
    withdraw: function () {
      try { localStorage.removeItem(STORE_KEY); } catch (e) {}
      location.reload();
    }
  };

  function start() {
    var c = read();
    if (c) { apply(c); } else { build(); }
    var link = document.getElementById('cookie-settings-link');
    if (link) link.addEventListener('click', function (e) { e.preventDefault(); build(); });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', start);
  } else {
    start();
  }
})();
