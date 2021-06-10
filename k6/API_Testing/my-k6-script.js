// Creator: k6 Browser Recorder 0.6.1

import { sleep, group } from "k6";
import http from "k6/http";

export const options = {
	vus: 5, // 1 user looping for 1 minute
  duration: '5m',

  thresholds: {
    http_req_duration: ['p(99)<1500'], // 99% of requests must complete below 1.5s
  },
};

export default function main() {
  let response;

  group("page_2 - http://test.k6.io/news.php", function () {
    response = http.get("http://test.k6.io/news.php", {
      headers: {
        accept:
          "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9",
        "accept-encoding": "gzip, deflate",
        "accept-language": "en-US,en;q=0.9",
        connection: "keep-alive",
        cookie:
          "_ga=GA1.2.908408951.1622729200; _gid=GA1.2.1928641575.1622729200; _lfa=LF1.1.4262bb4b398633f7.1622729199987; _hjid=bf1a9d1a-67a6-49be-a9b4-e26cfaee7649",
        host: "test.k6.io",
        referer: "http://test.k6.io/",
        "upgrade-insecure-requests": "1",
        "user-agent":
          "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/90.0.4430.212 Safari/537.36",
      },
    });
  });

  group(
    "page_3 - http://en.wikipedia.org/wiki/List_of_historical_anniversaries",
    function () {
      response = http.get(
        "http://en.wikipedia.org/wiki/List_of_historical_anniversaries",
        {
          headers: {
            accept:
              "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9",
            "upgrade-insecure-requests": "1",
            "user-agent":
              "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/90.0.4430.212 Safari/537.36",
          },
        }
      );
      response = http.get(
        "https://en.wikipedia.org/w/load.php?lang=en&modules=ext.uls.interlanguage%7Cext.visualEditor.desktopArticleTarget.noscript%7Cext.wikimediaBadges%7Cskins.vector.styles.legacy%7Cwikibase.client.init&only=styles&skin=vector",
        {
          headers: {
            accept: "text/css,*/*;q=0.1",
            "accept-encoding": "gzip, deflate, br",
            "accept-language": "en-US,en;q=0.9",
            cookie:
              "WMF-Last-Access=04-Jun-2021; WMF-Last-Access-Global=04-Jun-2021; GeoIP=IN:KA:Bengaluru:12.96:77.59:v4",
            referer:
              "https://en.wikipedia.org/wiki/List_of_historical_anniversaries",
            "sec-ch-ua":
              '" Not A;Brand";v="99", "Chromium";v="90", "Google Chrome";v="90"',
            "sec-ch-ua-mobile": "?0",
            "sec-fetch-dest": "style",
            "sec-fetch-mode": "no-cors",
            "sec-fetch-site": "same-origin",
            "user-agent":
              "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/90.0.4430.212 Safari/537.36",
          },
        }
      );
      response = http.get(
        "https://en.wikipedia.org/w/load.php?lang=en&modules=startup&only=scripts&raw=1&skin=vector",
        {
          headers: {
            accept: "*/*",
            "accept-encoding": "gzip, deflate, br",
            "accept-language": "en-US,en;q=0.9",
            cookie:
              "WMF-Last-Access=04-Jun-2021; WMF-Last-Access-Global=04-Jun-2021; GeoIP=IN:KA:Bengaluru:12.96:77.59:v4",
            referer:
              "https://en.wikipedia.org/wiki/List_of_historical_anniversaries",
            "sec-ch-ua":
              '" Not A;Brand";v="99", "Chromium";v="90", "Google Chrome";v="90"',
            "sec-ch-ua-mobile": "?0",
            "sec-fetch-dest": "script",
            "sec-fetch-mode": "no-cors",
            "sec-fetch-site": "same-origin",
            "user-agent":
              "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/90.0.4430.212 Safari/537.36",
          },
        }
      );
      response = http.get(
        "https://en.wikipedia.org/w/load.php?lang=en&modules=site.styles&only=styles&skin=vector",
        {
          headers: {
            accept: "text/css,*/*;q=0.1",
            "accept-encoding": "gzip, deflate, br",
            "accept-language": "en-US,en;q=0.9",
            cookie:
              "WMF-Last-Access=04-Jun-2021; WMF-Last-Access-Global=04-Jun-2021; GeoIP=IN:KA:Bengaluru:12.96:77.59:v4",
            referer:
              "https://en.wikipedia.org/wiki/List_of_historical_anniversaries",
            "sec-ch-ua":
              '" Not A;Brand";v="99", "Chromium";v="90", "Google Chrome";v="90"',
            "sec-ch-ua-mobile": "?0",
            "sec-fetch-dest": "style",
            "sec-fetch-mode": "no-cors",
            "sec-fetch-site": "same-origin",
            "user-agent":
              "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/90.0.4430.212 Safari/537.36",
          },
        }
      );
      response = http.get(
        "https://upload.wikimedia.org/wikipedia/en/thumb/4/4a/Commons-logo.svg/30px-Commons-logo.svg.png",
        {
          headers: {
            referer: "https://en.wikipedia.org/",
            "user-agent":
              "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/90.0.4430.212 Safari/537.36",
            "sec-ch-ua":
              '" Not A;Brand";v="99", "Chromium";v="90", "Google Chrome";v="90"',
            "sec-ch-ua-mobile": "?0",
          },
        }
      );
      response = http.get(
        "https://en.wikipedia.org/static/images/project-logos/enwiki.png",
        {
          headers: {
            accept:
              "image/avif,image/webp,image/apng,image/svg+xml,image/*,*/*;q=0.8",
            "accept-encoding": "gzip, deflate, br",
            "accept-language": "en-US,en;q=0.9",
            cookie:
              "WMF-Last-Access=04-Jun-2021; WMF-Last-Access-Global=04-Jun-2021; GeoIP=IN:KA:Bengaluru:12.96:77.59:v4",
            referer:
              "https://en.wikipedia.org/wiki/List_of_historical_anniversaries",
            "sec-ch-ua":
              '" Not A;Brand";v="99", "Chromium";v="90", "Google Chrome";v="90"',
            "sec-ch-ua-mobile": "?0",
            "sec-fetch-dest": "image",
            "sec-fetch-mode": "no-cors",
            "sec-fetch-site": "same-origin",
            "user-agent":
              "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/90.0.4430.212 Safari/537.36",
          },
        }
      );
      response = http.get(
        "https://en.wikipedia.org/static/images/mobile/copyright/wikipedia-wordmark-en.svg",
        {
          headers: {
            accept:
              "image/avif,image/webp,image/apng,image/svg+xml,image/*,*/*;q=0.8",
            "accept-encoding": "gzip, deflate, br",
            "accept-language": "en-US,en;q=0.9",
            cookie:
              "WMF-Last-Access=04-Jun-2021; WMF-Last-Access-Global=04-Jun-2021; GeoIP=IN:KA:Bengaluru:12.96:77.59:v4",
            referer:
              "https://en.wikipedia.org/w/load.php?lang=en&modules=ext.uls.interlanguage%7Cext.visualEditor.desktopArticleTarget.noscript%7Cext.wikimediaBadges%7Cskins.vector.styles.legacy%7Cwikibase.client.init&only=styles&skin=vector",
            "sec-ch-ua":
              '" Not A;Brand";v="99", "Chromium";v="90", "Google Chrome";v="90"',
            "sec-ch-ua-mobile": "?0",
            "sec-fetch-dest": "image",
            "sec-fetch-mode": "no-cors",
            "sec-fetch-site": "same-origin",
            "user-agent":
              "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/90.0.4430.212 Safari/537.36",
          },
        }
      );
      response = http.get(
        "https://en.wikipedia.org/w/skins/Vector/resources/common/images/bullet-icon.svg?d4515",
        {
          headers: {
            accept:
              "image/avif,image/webp,image/apng,image/svg+xml,image/*,*/*;q=0.8",
            "accept-encoding": "gzip, deflate, br",
            "accept-language": "en-US,en;q=0.9",
            cookie:
              "WMF-Last-Access=04-Jun-2021; WMF-Last-Access-Global=04-Jun-2021; GeoIP=IN:KA:Bengaluru:12.96:77.59:v4",
            referer:
              "https://en.wikipedia.org/w/load.php?lang=en&modules=ext.uls.interlanguage%7Cext.visualEditor.desktopArticleTarget.noscript%7Cext.wikimediaBadges%7Cskins.vector.styles.legacy%7Cwikibase.client.init&only=styles&skin=vector",
            "sec-ch-ua":
              '" Not A;Brand";v="99", "Chromium";v="90", "Google Chrome";v="90"',
            "sec-ch-ua-mobile": "?0",
            "sec-fetch-dest": "image",
            "sec-fetch-mode": "no-cors",
            "sec-fetch-site": "same-origin",
            "user-agent":
              "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/90.0.4430.212 Safari/537.36",
          },
        }
      );
      response = http.get(
        "https://en.wikipedia.org/w/skins/Vector/resources/common/images/external-link-ltr-icon.svg?48e54",
        {
          headers: {
            accept:
              "image/avif,image/webp,image/apng,image/svg+xml,image/*,*/*;q=0.8",
            "accept-encoding": "gzip, deflate, br",
            "accept-language": "en-US,en;q=0.9",
            cookie:
              "WMF-Last-Access=04-Jun-2021; WMF-Last-Access-Global=04-Jun-2021; GeoIP=IN:KA:Bengaluru:12.96:77.59:v4",
            referer:
              "https://en.wikipedia.org/w/load.php?lang=en&modules=ext.uls.interlanguage%7Cext.visualEditor.desktopArticleTarget.noscript%7Cext.wikimediaBadges%7Cskins.vector.styles.legacy%7Cwikibase.client.init&only=styles&skin=vector",
            "sec-ch-ua":
              '" Not A;Brand";v="99", "Chromium";v="90", "Google Chrome";v="90"',
            "sec-ch-ua-mobile": "?0",
            "sec-fetch-dest": "image",
            "sec-fetch-mode": "no-cors",
            "sec-fetch-site": "same-origin",
            "user-agent":
              "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/90.0.4430.212 Safari/537.36",
          },
        }
      );
      response = http.get(
        "https://en.wikipedia.org/w/skins/Vector/resources/common/images/user-avatar.svg?b7f58",
        {
          headers: {
            accept:
              "image/avif,image/webp,image/apng,image/svg+xml,image/*,*/*;q=0.8",
            "accept-encoding": "gzip, deflate, br",
            "accept-language": "en-US,en;q=0.9",
            cookie:
              "WMF-Last-Access=04-Jun-2021; WMF-Last-Access-Global=04-Jun-2021; GeoIP=IN:KA:Bengaluru:12.96:77.59:v4",
            referer:
              "https://en.wikipedia.org/w/load.php?lang=en&modules=ext.uls.interlanguage%7Cext.visualEditor.desktopArticleTarget.noscript%7Cext.wikimediaBadges%7Cskins.vector.styles.legacy%7Cwikibase.client.init&only=styles&skin=vector",
            "sec-ch-ua":
              '" Not A;Brand";v="99", "Chromium";v="90", "Google Chrome";v="90"',
            "sec-ch-ua-mobile": "?0",
            "sec-fetch-dest": "image",
            "sec-fetch-mode": "no-cors",
            "sec-fetch-site": "same-origin",
            "user-agent":
              "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/90.0.4430.212 Safari/537.36",
          },
        }
      );
      response = http.get(
        "https://en.wikipedia.org/w/skins/Vector/resources/common/images/search.svg?bbf78",
        {
          headers: {
            accept:
              "image/avif,image/webp,image/apng,image/svg+xml,image/*,*/*;q=0.8",
            "accept-encoding": "gzip, deflate, br",
            "accept-language": "en-US,en;q=0.9",
            cookie:
              "WMF-Last-Access=04-Jun-2021; WMF-Last-Access-Global=04-Jun-2021; GeoIP=IN:KA:Bengaluru:12.96:77.59:v4",
            referer:
              "https://en.wikipedia.org/w/load.php?lang=en&modules=ext.uls.interlanguage%7Cext.visualEditor.desktopArticleTarget.noscript%7Cext.wikimediaBadges%7Cskins.vector.styles.legacy%7Cwikibase.client.init&only=styles&skin=vector",
            "sec-ch-ua":
              '" Not A;Brand";v="99", "Chromium";v="90", "Google Chrome";v="90"',
            "sec-ch-ua-mobile": "?0",
            "sec-fetch-dest": "image",
            "sec-fetch-mode": "no-cors",
            "sec-fetch-site": "same-origin",
            "user-agent":
              "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/90.0.4430.212 Safari/537.36",
          },
        }
      );
      response = http.get(
        "https://en.wikipedia.org/w/extensions/Wikibase/client/resources/images/edit.svg?34bc5",
        {
          headers: {
            accept:
              "image/avif,image/webp,image/apng,image/svg+xml,image/*,*/*;q=0.8",
            "accept-encoding": "gzip, deflate, br",
            "accept-language": "en-US,en;q=0.9",
            cookie:
              "WMF-Last-Access=04-Jun-2021; WMF-Last-Access-Global=04-Jun-2021; GeoIP=IN:KA:Bengaluru:12.96:77.59:v4",
            referer:
              "https://en.wikipedia.org/w/load.php?lang=en&modules=ext.uls.interlanguage%7Cext.visualEditor.desktopArticleTarget.noscript%7Cext.wikimediaBadges%7Cskins.vector.styles.legacy%7Cwikibase.client.init&only=styles&skin=vector",
            "sec-ch-ua":
              '" Not A;Brand";v="99", "Chromium";v="90", "Google Chrome";v="90"',
            "sec-ch-ua-mobile": "?0",
            "sec-fetch-dest": "image",
            "sec-fetch-mode": "no-cors",
            "sec-fetch-site": "same-origin",
            "user-agent":
              "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/90.0.4430.212 Safari/537.36",
          },
        }
      );
      response = http.get(
        "https://en.wikipedia.org/static/images/footer/wikimedia-button.png",
        {
          headers: {
            accept:
              "image/avif,image/webp,image/apng,image/svg+xml,image/*,*/*;q=0.8",
            "accept-encoding": "gzip, deflate, br",
            "accept-language": "en-US,en;q=0.9",
            cookie:
              "WMF-Last-Access=04-Jun-2021; WMF-Last-Access-Global=04-Jun-2021; GeoIP=IN:KA:Bengaluru:12.96:77.59:v4",
            referer:
              "https://en.wikipedia.org/wiki/List_of_historical_anniversaries",
            "sec-ch-ua":
              '" Not A;Brand";v="99", "Chromium";v="90", "Google Chrome";v="90"',
            "sec-ch-ua-mobile": "?0",
            "sec-fetch-dest": "image",
            "sec-fetch-mode": "no-cors",
            "sec-fetch-site": "same-origin",
            "user-agent":
              "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/90.0.4430.212 Safari/537.36",
          },
        }
      );
      response = http.get(
        "https://en.wikipedia.org/static/images/footer/poweredby_mediawiki_88x31.png",
        {
          headers: {
            accept:
              "image/avif,image/webp,image/apng,image/svg+xml,image/*,*/*;q=0.8",
            "accept-encoding": "gzip, deflate, br",
            "accept-language": "en-US,en;q=0.9",
            cookie:
              "WMF-Last-Access=04-Jun-2021; WMF-Last-Access-Global=04-Jun-2021; GeoIP=IN:KA:Bengaluru:12.96:77.59:v4",
            referer:
              "https://en.wikipedia.org/wiki/List_of_historical_anniversaries",
            "sec-ch-ua":
              '" Not A;Brand";v="99", "Chromium";v="90", "Google Chrome";v="90"',
            "sec-ch-ua-mobile": "?0",
            "sec-fetch-dest": "image",
            "sec-fetch-mode": "no-cors",
            "sec-fetch-site": "same-origin",
            "user-agent":
              "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/90.0.4430.212 Safari/537.36",
          },
        }
      );
      response = http.get(
        "https://en.wikipedia.org/w/load.php?lang=en&modules=ext.gadget.ReferenceTooltips%2Ccharinsert%2Cextra-toolbar-buttons%2CrefToolbar%2Cswitcher&skin=vector&version=1ilvs",
        {
          headers: {
            accept: "*/*",
            "accept-encoding": "gzip, deflate, br",
            "accept-language": "en-US,en;q=0.9",
            cookie:
              "WMF-Last-Access=04-Jun-2021; WMF-Last-Access-Global=04-Jun-2021; GeoIP=IN:KA:Bengaluru:12.96:77.59:v4",
            referer:
              "https://en.wikipedia.org/wiki/List_of_historical_anniversaries",
            "sec-ch-ua":
              '" Not A;Brand";v="99", "Chromium";v="90", "Google Chrome";v="90"',
            "sec-ch-ua-mobile": "?0",
            "sec-fetch-dest": "script",
            "sec-fetch-mode": "no-cors",
            "sec-fetch-site": "same-origin",
            "user-agent":
              "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/90.0.4430.212 Safari/537.36",
          },
        }
      );
      response = http.get(
        "https://en.wikipedia.org/w/load.php?lang=en&modules=ext.visualEditor.core.utils.parsing%7Cext.visualEditor.desktopArticleTarget.init%7Cext.visualEditor.progressBarWidget%2CsupportCheck%2CtargetLoader%2CtempWikitextEditorWidget%2Ctrack%2Cve&skin=vector&version=1gbv0",
        {
          headers: {
            accept: "*/*",
            "accept-encoding": "gzip, deflate, br",
            "accept-language": "en-US,en;q=0.9",
            cookie:
              "WMF-Last-Access=04-Jun-2021; WMF-Last-Access-Global=04-Jun-2021; GeoIP=IN:KA:Bengaluru:12.96:77.59:v4",
            referer:
              "https://en.wikipedia.org/wiki/List_of_historical_anniversaries",
            "sec-ch-ua":
              '" Not A;Brand";v="99", "Chromium";v="90", "Google Chrome";v="90"',
            "sec-ch-ua-mobile": "?0",
            "sec-fetch-dest": "script",
            "sec-fetch-mode": "no-cors",
            "sec-fetch-site": "same-origin",
            "user-agent":
              "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/90.0.4430.212 Safari/537.36",
          },
        }
      );
      response = http.get(
        "https://en.wikipedia.org/w/load.php?lang=en&modules=ext.centralNotice.choiceData%2Cdisplay%2CgeoIP%2CimpressionDiet%2CkvStore%2ClegacySupport%2CstartUp%7Cext.centralauth.centralautologin%7Cext.cx.eventlogging.campaigns%7Cext.eventLogging%2CnavigationTiming%2Cpopups%2CwikimediaEvents%7Cext.growthExperiments.SuggestedEditSession%7Cext.uls.common%2Ccompactlinks%2Cinterface%2Cpreferences%2Cwebfonts%7Cjquery%2Coojs%2Coojs-router%2Csite%7Cjquery.client%2Ccookie%2CtextSelection%7Cjquery.uls.data%7Cmediawiki.String%2CTitle%2CUri%2Capi%2Cbase%2Ccldr%2Ccookie%2Cexperiments%2CjqueryMsg%2Clanguage%2Cstorage%2Cuser%2Cutil%2CvisibleTimeout%7Cmediawiki.action.view.redirect%7Cmediawiki.editfont.styles%7Cmediawiki.libs.pluralruleparser%7Cmediawiki.page.ready%7Cmediawiki.ui.button%2Cicon%7Cmmv.bootstrap%2Chead%7Cmmv.bootstrap.autostart%7Cskins.vector.legacy.js%7Cuser.defaults&skin=vector&version=1v7kp",
        {
          headers: {
            accept: "*/*",
            "accept-encoding": "gzip, deflate, br",
            "accept-language": "en-US,en;q=0.9",
            cookie:
              "WMF-Last-Access=04-Jun-2021; WMF-Last-Access-Global=04-Jun-2021; GeoIP=IN:KA:Bengaluru:12.96:77.59:v4",
            referer:
              "https://en.wikipedia.org/wiki/List_of_historical_anniversaries",
            "sec-ch-ua":
              '" Not A;Brand";v="99", "Chromium";v="90", "Google Chrome";v="90"',
            "sec-ch-ua-mobile": "?0",
            "sec-fetch-dest": "script",
            "sec-fetch-mode": "no-cors",
            "sec-fetch-site": "same-origin",
            "user-agent":
              "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/90.0.4430.212 Safari/537.36",
          },
        }
      );
      response = http.get(
        "https://login.wikimedia.org/wiki/Special:CentralAutoLogin/checkLoggedIn?type=script&wikiid=enwiki&proto=https",
        {
          headers: {
            referer: "https://en.wikipedia.org/",
            "user-agent":
              "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/90.0.4430.212 Safari/537.36",
            "sec-ch-ua":
              '" Not A;Brand";v="99", "Chromium";v="90", "Google Chrome";v="90"',
            "sec-ch-ua-mobile": "?0",
          },
        }
      );
      response = http.get(
        "https://en.wikipedia.org/static/favicon/wikipedia.ico",
        {
          headers: {
            accept:
              "image/avif,image/webp,image/apng,image/svg+xml,image/*,*/*;q=0.8",
            "accept-encoding": "gzip, deflate, br",
            "accept-language": "en-US,en;q=0.9",
            cookie:
              "WMF-Last-Access=04-Jun-2021; WMF-Last-Access-Global=04-Jun-2021; GeoIP=IN:KA:Bengaluru:12.96:77.59:v4",
            referer: "https://en.wikipedia.org/wiki/List_of_days_of_the_year",
            "sec-ch-ua":
              '" Not A;Brand";v="99", "Chromium";v="90", "Google Chrome";v="90"',
            "sec-ch-ua-mobile": "?0",
            "sec-fetch-dest": "image",
            "sec-fetch-mode": "no-cors",
            "sec-fetch-site": "same-origin",
            "user-agent":
              "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/90.0.4430.212 Safari/537.36",
          },
        }
      );
      response = http.get(
        "https://en.wikipedia.org/static/favicon/wikipedia.ico",
        {
          headers: {
            referer: "https://en.wikipedia.org/wiki/List_of_days_of_the_year",
            "user-agent":
              "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/90.0.4430.212 Safari/537.36",
            "sec-ch-ua":
              '" Not A;Brand";v="99", "Chromium";v="90", "Google Chrome";v="90"',
            "sec-ch-ua-mobile": "?0",
          },
        }
      );
      response = http.get(
        "https://en.wikipedia.org/w/extensions/UniversalLanguageSelector/resources/images/cog-sprite.svg?c3fa1",
        {
          headers: {
            accept:
              "image/avif,image/webp,image/apng,image/svg+xml,image/*,*/*;q=0.8",
            "accept-encoding": "gzip, deflate, br",
            "accept-language": "en-US,en;q=0.9",
            cookie:
              "WMF-Last-Access=04-Jun-2021; WMF-Last-Access-Global=04-Jun-2021; GeoIP=IN:KA:Bengaluru:12.96:77.59:v4",
            referer:
              "https://en.wikipedia.org/w/load.php?lang=en&modules=ext.uls.interlanguage%7Cext.visualEditor.desktopArticleTarget.noscript%7Cext.wikimediaBadges%7Cskins.vector.styles.legacy%7Cwikibase.client.init&only=styles&skin=vector",
            "sec-ch-ua":
              '" Not A;Brand";v="99", "Chromium";v="90", "Google Chrome";v="90"',
            "sec-ch-ua-mobile": "?0",
            "sec-fetch-dest": "image",
            "sec-fetch-mode": "no-cors",
            "sec-fetch-site": "same-origin",
            "user-agent":
              "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/90.0.4430.212 Safari/537.36",
          },
        }
      );
      response = http.get(
        "https://en.wikipedia.org/w/extensions/UniversalLanguageSelector/resources/images/language-base20.svg?2004a",
        {
          headers: {
            accept:
              "image/avif,image/webp,image/apng,image/svg+xml,image/*,*/*;q=0.8",
            "accept-encoding": "gzip, deflate, br",
            "accept-language": "en-US,en;q=0.9",
            cookie:
              "WMF-Last-Access=04-Jun-2021; WMF-Last-Access-Global=04-Jun-2021; GeoIP=IN:KA:Bengaluru:12.96:77.59:v4",
            referer: "https://en.wikipedia.org/wiki/List_of_days_of_the_year",
            "sec-ch-ua":
              '" Not A;Brand";v="99", "Chromium";v="90", "Google Chrome";v="90"',
            "sec-ch-ua-mobile": "?0",
            "sec-fetch-dest": "image",
            "sec-fetch-mode": "no-cors",
            "sec-fetch-site": "same-origin",
            "user-agent":
              "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/90.0.4430.212 Safari/537.36",
          },
        }
      );
      response = http.get(
        "https://en.wikipedia.org/w/load.php?lang=en&modules=ext.popups.icons%2Cimages%2Cmain%7Cmediawiki.ui.checkbox&skin=vector&version=1eova",
        {
          headers: {
            accept: "*/*",
            "accept-encoding": "gzip, deflate, br",
            "accept-language": "en-US,en;q=0.9",
            cookie:
              "WMF-Last-Access=04-Jun-2021; WMF-Last-Access-Global=04-Jun-2021; GeoIP=IN:KA:Bengaluru:12.96:77.59:v4",
            referer: "https://en.wikipedia.org/wiki/List_of_days_of_the_year",
            "sec-ch-ua":
              '" Not A;Brand";v="99", "Chromium";v="90", "Google Chrome";v="90"',
            "sec-ch-ua-mobile": "?0",
            "sec-fetch-dest": "script",
            "sec-fetch-mode": "no-cors",
            "sec-fetch-site": "same-origin",
            "user-agent":
              "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/90.0.4430.212 Safari/537.36",
          },
        }
      );
      response = http.get(
        "https://en.wikipedia.org/api/rest_v1/page/summary/March_1",
        {
          headers: {
            accept:
              'application/json; charset=utf-8; profile="https://www.mediawiki.org/wiki/Specs/Summary/1.2.0"',
            "accept-encoding": "gzip, deflate, br",
            "accept-language": "en",
            cookie:
              "WMF-Last-Access=04-Jun-2021; WMF-Last-Access-Global=04-Jun-2021; GeoIP=IN:KA:Bengaluru:12.96:77.59:v4; enwikiwmE-sessionTickLastTickTime=1622806111192; enwikiwmE-sessionTickTickCount=1; enwikiel-sessionId=3c795f46e79141d3018f; enwikimwuser-sessionId=413c3018267219db60c3",
            referer: "https://en.wikipedia.org/wiki/List_of_days_of_the_year",
            "sec-ch-ua":
              '" Not A;Brand";v="99", "Chromium";v="90", "Google Chrome";v="90"',
            "sec-ch-ua-mobile": "?0",
            "sec-fetch-dest": "empty",
            "sec-fetch-mode": "cors",
            "sec-fetch-site": "same-origin",
            "user-agent":
              "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/90.0.4430.212 Safari/537.36",
            "x-requested-with": "XMLHttpRequest",
          },
        }
      );
      response = http.get(
        "https://en.wikipedia.org/api/rest_v1/page/summary/September_1",
        {
          headers: {
            accept:
              'application/json; charset=utf-8; profile="https://www.mediawiki.org/wiki/Specs/Summary/1.2.0"',
            "accept-encoding": "gzip, deflate, br",
            "accept-language": "en",
            cookie:
              "WMF-Last-Access=04-Jun-2021; WMF-Last-Access-Global=04-Jun-2021; GeoIP=IN:KA:Bengaluru:12.96:77.59:v4; enwikiwmE-sessionTickLastTickTime=1622806111192; enwikiwmE-sessionTickTickCount=1; enwikiel-sessionId=3c795f46e79141d3018f; enwikimwuser-sessionId=413c3018267219db60c3",
            referer: "https://en.wikipedia.org/wiki/List_of_days_of_the_year",
            "sec-ch-ua":
              '" Not A;Brand";v="99", "Chromium";v="90", "Google Chrome";v="90"',
            "sec-ch-ua-mobile": "?0",
            "sec-fetch-dest": "empty",
            "sec-fetch-mode": "cors",
            "sec-fetch-site": "same-origin",
            "user-agent":
              "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/90.0.4430.212 Safari/537.36",
            "x-requested-with": "XMLHttpRequest",
          },
        }
      );
      response = http.get(
        "https://en.wikipedia.org/api/rest_v1/page/summary/List_of_non-standard_dates",
        {
          headers: {
            accept:
              'application/json; charset=utf-8; profile="https://www.mediawiki.org/wiki/Specs/Summary/1.2.0"',
            "accept-encoding": "gzip, deflate, br",
            "accept-language": "en",
            cookie:
              "WMF-Last-Access=04-Jun-2021; WMF-Last-Access-Global=04-Jun-2021; GeoIP=IN:KA:Bengaluru:12.96:77.59:v4; enwikiwmE-sessionTickLastTickTime=1622806111192; enwikiwmE-sessionTickTickCount=1; enwikiel-sessionId=3c795f46e79141d3018f; enwikimwuser-sessionId=413c3018267219db60c3",
            referer: "https://en.wikipedia.org/wiki/List_of_days_of_the_year",
            "sec-ch-ua":
              '" Not A;Brand";v="99", "Chromium";v="90", "Google Chrome";v="90"',
            "sec-ch-ua-mobile": "?0",
            "sec-fetch-dest": "empty",
            "sec-fetch-mode": "cors",
            "sec-fetch-site": "same-origin",
            "user-agent":
              "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/90.0.4430.212 Safari/537.36",
            "x-requested-with": "XMLHttpRequest",
          },
        }
      );
      response = http.get(
        "https://en.wikipedia.org/api/rest_v1/page/summary/September_4",
        {
          headers: {
            accept:
              'application/json; charset=utf-8; profile="https://www.mediawiki.org/wiki/Specs/Summary/1.2.0"',
            "accept-encoding": "gzip, deflate, br",
            "accept-language": "en",
            cookie:
              "WMF-Last-Access=04-Jun-2021; WMF-Last-Access-Global=04-Jun-2021; GeoIP=IN:KA:Bengaluru:12.96:77.59:v4; enwikiwmE-sessionTickLastTickTime=1622806111192; enwikiwmE-sessionTickTickCount=1; enwikiel-sessionId=3c795f46e79141d3018f; enwikimwuser-sessionId=413c3018267219db60c3",
            referer: "https://en.wikipedia.org/wiki/List_of_days_of_the_year",
            "sec-ch-ua":
              '" Not A;Brand";v="99", "Chromium";v="90", "Google Chrome";v="90"',
            "sec-ch-ua-mobile": "?0",
            "sec-fetch-dest": "empty",
            "sec-fetch-mode": "cors",
            "sec-fetch-site": "same-origin",
            "user-agent":
              "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/90.0.4430.212 Safari/537.36",
            "x-requested-with": "XMLHttpRequest",
          },
        }
      );
    }
  );

  group(
    "page_4 - https://en.wikipedia.org/w/index.php?title=List_of_historical_anniversaries&redirect=no",
    function () {
      response = http.get(
        "https://en.wikipedia.org/w/index.php?title=List_of_historical_anniversaries&redirect=no",
        {
          headers: {
            accept:
              "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9",
            "accept-encoding": "gzip, deflate, br",
            "accept-language": "en-US,en;q=0.9",
            cookie:
              "WMF-Last-Access=04-Jun-2021; WMF-Last-Access-Global=04-Jun-2021; GeoIP=IN:KA:Bengaluru:12.96:77.59:v4; enwikiwmE-sessionTickLastTickTime=1622806111192; enwikiwmE-sessionTickTickCount=1; enwikiel-sessionId=3c795f46e79141d3018f; enwikimwuser-sessionId=413c3018267219db60c3",
            referer: "https://en.wikipedia.org/wiki/List_of_days_of_the_year",
            "sec-ch-ua":
              '" Not A;Brand";v="99", "Chromium";v="90", "Google Chrome";v="90"',
            "sec-ch-ua-mobile": "?0",
            "sec-fetch-dest": "document",
            "sec-fetch-mode": "navigate",
            "sec-fetch-site": "same-origin",
            "sec-fetch-user": "?1",
            "upgrade-insecure-requests": "1",
            "user-agent":
              "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/90.0.4430.212 Safari/537.36",
          },
        }
      );
      response = http.get(
        "https://en.wikipedia.org/w/load.php?lang=en&modules=ext.uls.interlanguage%7Cext.visualEditor.desktopArticleTarget.noscript%7Cext.wikimediaBadges%7Cmediawiki.action.view.redirectPage%7Cskins.vector.styles.legacy%7Cwikibase.client.init&only=styles&skin=vector",
        {
          headers: {
            accept: "text/css,*/*;q=0.1",
            "accept-encoding": "gzip, deflate, br",
            "accept-language": "en-US,en;q=0.9",
            cookie:
              "WMF-Last-Access=04-Jun-2021; WMF-Last-Access-Global=04-Jun-2021; GeoIP=IN:KA:Bengaluru:12.96:77.59:v4; enwikiwmE-sessionTickLastTickTime=1622806111192; enwikiwmE-sessionTickTickCount=1; enwikiel-sessionId=3c795f46e79141d3018f; enwikimwuser-sessionId=413c3018267219db60c3",
            referer:
              "https://en.wikipedia.org/w/index.php?title=List_of_historical_anniversaries&redirect=no",
            "sec-ch-ua":
              '" Not A;Brand";v="99", "Chromium";v="90", "Google Chrome";v="90"',
            "sec-ch-ua-mobile": "?0",
            "sec-fetch-dest": "style",
            "sec-fetch-mode": "no-cors",
            "sec-fetch-site": "same-origin",
            "user-agent":
              "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/90.0.4430.212 Safari/537.36",
          },
        }
      );
      response = http.get(
        "https://en.wikipedia.org/w/load.php?lang=en&modules=startup&only=scripts&raw=1&skin=vector",
        {
          headers: {
            accept: "*/*",
            "accept-encoding": "gzip, deflate, br",
            "accept-language": "en-US,en;q=0.9",
            cookie:
              "WMF-Last-Access=04-Jun-2021; WMF-Last-Access-Global=04-Jun-2021; GeoIP=IN:KA:Bengaluru:12.96:77.59:v4",
            referer:
              "https://en.wikipedia.org/wiki/List_of_historical_anniversaries",
            "sec-ch-ua":
              '" Not A;Brand";v="99", "Chromium";v="90", "Google Chrome";v="90"',
            "sec-ch-ua-mobile": "?0",
            "sec-fetch-dest": "script",
            "sec-fetch-mode": "no-cors",
            "sec-fetch-site": "same-origin",
            "user-agent":
              "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/90.0.4430.212 Safari/537.36",
          },
        }
      );
      response = http.get(
        "https://en.wikipedia.org/w/load.php?lang=en&modules=site.styles&only=styles&skin=vector",
        {
          headers: {
            accept: "text/css,*/*;q=0.1",
            "accept-encoding": "gzip, deflate, br",
            "accept-language": "en-US,en;q=0.9",
            cookie:
              "WMF-Last-Access=04-Jun-2021; WMF-Last-Access-Global=04-Jun-2021; GeoIP=IN:KA:Bengaluru:12.96:77.59:v4",
            referer:
              "https://en.wikipedia.org/wiki/List_of_historical_anniversaries",
            "sec-ch-ua":
              '" Not A;Brand";v="99", "Chromium";v="90", "Google Chrome";v="90"',
            "sec-ch-ua-mobile": "?0",
            "sec-fetch-dest": "style",
            "sec-fetch-mode": "no-cors",
            "sec-fetch-site": "same-origin",
            "user-agent":
              "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/90.0.4430.212 Safari/537.36",
          },
        }
      );
      response = http.get(
        "https://upload.wikimedia.org/wikipedia/commons/thumb/7/71/Symbol_redirect_arrow_with_gradient.svg/25px-Symbol_redirect_arrow_with_gradient.svg.png",
        {
          headers: {
            referer: "https://en.wikipedia.org/",
            "user-agent":
              "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/90.0.4430.212 Safari/537.36",
            "sec-ch-ua":
              '" Not A;Brand";v="99", "Chromium";v="90", "Google Chrome";v="90"',
            "sec-ch-ua-mobile": "?0",
          },
        }
      );
      response = http.get(
        "https://en.wikipedia.org/static/images/footer/wikimedia-button.png",
        {
          headers: {
            accept:
              "image/avif,image/webp,image/apng,image/svg+xml,image/*,*/*;q=0.8",
            "accept-encoding": "gzip, deflate, br",
            "accept-language": "en-US,en;q=0.9",
            cookie:
              "WMF-Last-Access=04-Jun-2021; WMF-Last-Access-Global=04-Jun-2021; GeoIP=IN:KA:Bengaluru:12.96:77.59:v4",
            referer:
              "https://en.wikipedia.org/wiki/List_of_historical_anniversaries",
            "sec-ch-ua":
              '" Not A;Brand";v="99", "Chromium";v="90", "Google Chrome";v="90"',
            "sec-ch-ua-mobile": "?0",
            "sec-fetch-dest": "image",
            "sec-fetch-mode": "no-cors",
            "sec-fetch-site": "same-origin",
            "user-agent":
              "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/90.0.4430.212 Safari/537.36",
          },
        }
      );
      response = http.get(
        "https://en.wikipedia.org/static/images/footer/poweredby_mediawiki_88x31.png",
        {
          headers: {
            accept:
              "image/avif,image/webp,image/apng,image/svg+xml,image/*,*/*;q=0.8",
            "accept-encoding": "gzip, deflate, br",
            "accept-language": "en-US,en;q=0.9",
            cookie:
              "WMF-Last-Access=04-Jun-2021; WMF-Last-Access-Global=04-Jun-2021; GeoIP=IN:KA:Bengaluru:12.96:77.59:v4",
            referer:
              "https://en.wikipedia.org/wiki/List_of_historical_anniversaries",
            "sec-ch-ua":
              '" Not A;Brand";v="99", "Chromium";v="90", "Google Chrome";v="90"',
            "sec-ch-ua-mobile": "?0",
            "sec-fetch-dest": "image",
            "sec-fetch-mode": "no-cors",
            "sec-fetch-site": "same-origin",
            "user-agent":
              "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/90.0.4430.212 Safari/537.36",
          },
        }
      );
      response = http.get(
        "https://en.wikipedia.org/w/load.php?lang=en&modules=jquery&skin=vector&version=8v0mf",
        {
          headers: {
            accept: "*/*",
            "accept-encoding": "gzip, deflate, br",
            "accept-language": "en-US,en;q=0.9",
            cookie:
              "WMF-Last-Access=04-Jun-2021; WMF-Last-Access-Global=04-Jun-2021; GeoIP=IN:KA:Bengaluru:12.96:77.59:v4; enwikiwmE-sessionTickLastTickTime=1622806111192; enwikiwmE-sessionTickTickCount=1; enwikiel-sessionId=3c795f46e79141d3018f; enwikimwuser-sessionId=413c3018267219db60c3",
            referer:
              "https://en.wikipedia.org/w/index.php?title=List_of_historical_anniversaries&redirect=no",
            "sec-ch-ua":
              '" Not A;Brand";v="99", "Chromium";v="90", "Google Chrome";v="90"',
            "sec-ch-ua-mobile": "?0",
            "sec-fetch-dest": "script",
            "sec-fetch-mode": "no-cors",
            "sec-fetch-site": "same-origin",
            "user-agent":
              "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/90.0.4430.212 Safari/537.36",
          },
        }
      );
      response = http.get(
        "https://en.wikipedia.org/static/images/project-logos/enwiki.png",
        {
          headers: {
            accept:
              "image/avif,image/webp,image/apng,image/svg+xml,image/*,*/*;q=0.8",
            "accept-encoding": "gzip, deflate, br",
            "accept-language": "en-US,en;q=0.9",
            cookie:
              "WMF-Last-Access=04-Jun-2021; WMF-Last-Access-Global=04-Jun-2021; GeoIP=IN:KA:Bengaluru:12.96:77.59:v4",
            referer:
              "https://en.wikipedia.org/wiki/List_of_historical_anniversaries",
            "sec-ch-ua":
              '" Not A;Brand";v="99", "Chromium";v="90", "Google Chrome";v="90"',
            "sec-ch-ua-mobile": "?0",
            "sec-fetch-dest": "image",
            "sec-fetch-mode": "no-cors",
            "sec-fetch-site": "same-origin",
            "user-agent":
              "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/90.0.4430.212 Safari/537.36",
          },
        }
      );
      response = http.get(
        "https://en.wikipedia.org/static/images/mobile/copyright/wikipedia-wordmark-en.svg",
        {
          headers: {
            accept:
              "image/avif,image/webp,image/apng,image/svg+xml,image/*,*/*;q=0.8",
            "accept-encoding": "gzip, deflate, br",
            "accept-language": "en-US,en;q=0.9",
            cookie:
              "WMF-Last-Access=04-Jun-2021; WMF-Last-Access-Global=04-Jun-2021; GeoIP=IN:KA:Bengaluru:12.96:77.59:v4",
            referer:
              "https://en.wikipedia.org/w/load.php?lang=en&modules=ext.uls.interlanguage%7Cext.visualEditor.desktopArticleTarget.noscript%7Cext.wikimediaBadges%7Cskins.vector.styles.legacy%7Cwikibase.client.init&only=styles&skin=vector",
            "sec-ch-ua":
              '" Not A;Brand";v="99", "Chromium";v="90", "Google Chrome";v="90"',
            "sec-ch-ua-mobile": "?0",
            "sec-fetch-dest": "image",
            "sec-fetch-mode": "no-cors",
            "sec-fetch-site": "same-origin",
            "user-agent":
              "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/90.0.4430.212 Safari/537.36",
          },
        }
      );
      response = http.get(
        "https://en.wikipedia.org/w/resources/src/mediawiki.action/images/redirect-ltr.svg?ff441",
        {
          headers: {
            accept:
              "image/avif,image/webp,image/apng,image/svg+xml,image/*,*/*;q=0.8",
            "accept-encoding": "gzip, deflate, br",
            "accept-language": "en-US,en;q=0.9",
            cookie:
              "WMF-Last-Access=04-Jun-2021; WMF-Last-Access-Global=04-Jun-2021; GeoIP=IN:KA:Bengaluru:12.96:77.59:v4; enwikiwmE-sessionTickLastTickTime=1622806111192; enwikiwmE-sessionTickTickCount=1; enwikiel-sessionId=3c795f46e79141d3018f; enwikimwuser-sessionId=413c3018267219db60c3",
            referer:
              "https://en.wikipedia.org/w/load.php?lang=en&modules=ext.uls.interlanguage%7Cext.visualEditor.desktopArticleTarget.noscript%7Cext.wikimediaBadges%7Cmediawiki.action.view.redirectPage%7Cskins.vector.styles.legacy%7Cwikibase.client.init&only=styles&skin=vector",
            "sec-ch-ua":
              '" Not A;Brand";v="99", "Chromium";v="90", "Google Chrome";v="90"',
            "sec-ch-ua-mobile": "?0",
            "sec-fetch-dest": "image",
            "sec-fetch-mode": "no-cors",
            "sec-fetch-site": "same-origin",
            "user-agent":
              "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/90.0.4430.212 Safari/537.36",
          },
        }
      );
      response = http.get(
        "https://en.wikipedia.org/w/skins/Vector/resources/common/images/bullet-icon.svg?d4515",
        {
          headers: {
            accept:
              "image/avif,image/webp,image/apng,image/svg+xml,image/*,*/*;q=0.8",
            "accept-encoding": "gzip, deflate, br",
            "accept-language": "en-US,en;q=0.9",
            cookie:
              "WMF-Last-Access=04-Jun-2021; WMF-Last-Access-Global=04-Jun-2021; GeoIP=IN:KA:Bengaluru:12.96:77.59:v4",
            referer:
              "https://en.wikipedia.org/w/load.php?lang=en&modules=ext.uls.interlanguage%7Cext.visualEditor.desktopArticleTarget.noscript%7Cext.wikimediaBadges%7Cskins.vector.styles.legacy%7Cwikibase.client.init&only=styles&skin=vector",
            "sec-ch-ua":
              '" Not A;Brand";v="99", "Chromium";v="90", "Google Chrome";v="90"',
            "sec-ch-ua-mobile": "?0",
            "sec-fetch-dest": "image",
            "sec-fetch-mode": "no-cors",
            "sec-fetch-site": "same-origin",
            "user-agent":
              "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/90.0.4430.212 Safari/537.36",
          },
        }
      );
      response = http.get(
        "https://en.wikipedia.org/w/skins/Vector/resources/common/images/user-avatar.svg?b7f58",
        {
          headers: {
            accept:
              "image/avif,image/webp,image/apng,image/svg+xml,image/*,*/*;q=0.8",
            "accept-encoding": "gzip, deflate, br",
            "accept-language": "en-US,en;q=0.9",
            cookie:
              "WMF-Last-Access=04-Jun-2021; WMF-Last-Access-Global=04-Jun-2021; GeoIP=IN:KA:Bengaluru:12.96:77.59:v4",
            referer:
              "https://en.wikipedia.org/w/load.php?lang=en&modules=ext.uls.interlanguage%7Cext.visualEditor.desktopArticleTarget.noscript%7Cext.wikimediaBadges%7Cskins.vector.styles.legacy%7Cwikibase.client.init&only=styles&skin=vector",
            "sec-ch-ua":
              '" Not A;Brand";v="99", "Chromium";v="90", "Google Chrome";v="90"',
            "sec-ch-ua-mobile": "?0",
            "sec-fetch-dest": "image",
            "sec-fetch-mode": "no-cors",
            "sec-fetch-site": "same-origin",
            "user-agent":
              "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/90.0.4430.212 Safari/537.36",
          },
        }
      );
      response = http.get(
        "https://en.wikipedia.org/w/skins/Vector/resources/common/images/search.svg?bbf78",
        {
          headers: {
            accept:
              "image/avif,image/webp,image/apng,image/svg+xml,image/*,*/*;q=0.8",
            "accept-encoding": "gzip, deflate, br",
            "accept-language": "en-US,en;q=0.9",
            cookie:
              "WMF-Last-Access=04-Jun-2021; WMF-Last-Access-Global=04-Jun-2021; GeoIP=IN:KA:Bengaluru:12.96:77.59:v4",
            referer:
              "https://en.wikipedia.org/w/load.php?lang=en&modules=ext.uls.interlanguage%7Cext.visualEditor.desktopArticleTarget.noscript%7Cext.wikimediaBadges%7Cskins.vector.styles.legacy%7Cwikibase.client.init&only=styles&skin=vector",
            "sec-ch-ua":
              '" Not A;Brand";v="99", "Chromium";v="90", "Google Chrome";v="90"',
            "sec-ch-ua-mobile": "?0",
            "sec-fetch-dest": "image",
            "sec-fetch-mode": "no-cors",
            "sec-fetch-site": "same-origin",
            "user-agent":
              "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/90.0.4430.212 Safari/537.36",
          },
        }
      );
      response = http.get(
        "https://en.wikipedia.org/w/extensions/Wikibase/client/resources/images/edit.svg?34bc5",
        {
          headers: {
            accept:
              "image/avif,image/webp,image/apng,image/svg+xml,image/*,*/*;q=0.8",
            "accept-encoding": "gzip, deflate, br",
            "accept-language": "en-US,en;q=0.9",
            cookie:
              "WMF-Last-Access=04-Jun-2021; WMF-Last-Access-Global=04-Jun-2021; GeoIP=IN:KA:Bengaluru:12.96:77.59:v4",
            referer:
              "https://en.wikipedia.org/w/load.php?lang=en&modules=ext.uls.interlanguage%7Cext.visualEditor.desktopArticleTarget.noscript%7Cext.wikimediaBadges%7Cskins.vector.styles.legacy%7Cwikibase.client.init&only=styles&skin=vector",
            "sec-ch-ua":
              '" Not A;Brand";v="99", "Chromium";v="90", "Google Chrome";v="90"',
            "sec-ch-ua-mobile": "?0",
            "sec-fetch-dest": "image",
            "sec-fetch-mode": "no-cors",
            "sec-fetch-site": "same-origin",
            "user-agent":
              "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/90.0.4430.212 Safari/537.36",
          },
        }
      );
      response = http.get(
        "https://en.wikipedia.org/w/extensions/UniversalLanguageSelector/resources/images/cog-sprite.svg?c3fa1",
        {
          headers: {
            accept:
              "image/avif,image/webp,image/apng,image/svg+xml,image/*,*/*;q=0.8",
            "accept-encoding": "gzip, deflate, br",
            "accept-language": "en-US,en;q=0.9",
            cookie:
              "WMF-Last-Access=04-Jun-2021; WMF-Last-Access-Global=04-Jun-2021; GeoIP=IN:KA:Bengaluru:12.96:77.59:v4",
            referer:
              "https://en.wikipedia.org/w/load.php?lang=en&modules=ext.uls.interlanguage%7Cext.visualEditor.desktopArticleTarget.noscript%7Cext.wikimediaBadges%7Cskins.vector.styles.legacy%7Cwikibase.client.init&only=styles&skin=vector",
            "sec-ch-ua":
              '" Not A;Brand";v="99", "Chromium";v="90", "Google Chrome";v="90"',
            "sec-ch-ua-mobile": "?0",
            "sec-fetch-dest": "image",
            "sec-fetch-mode": "no-cors",
            "sec-fetch-site": "same-origin",
            "user-agent":
              "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/90.0.4430.212 Safari/537.36",
          },
        }
      );
    }
  );

  // Automatically added sleep
  sleep(1);
}
