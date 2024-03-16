// ==UserScript==
// @name Melomatch token handler
// @namespace melomatch
// @version 0.1.0
// @description An extension for processing the receipt of a token required to work with the Yandex Music API
// @description:ru Расширение для обработки получения токена, необходимого для работы с Yandex Music API
// @author addefan, amirdianov, dasha.ved93
// @match https://music.yandex.ru/
// @match https://melomatch.ru/
// @match http://dev.melomatch.ru/
// @icon https://storage.yandexcloud.net/melomatch/icon/icon.png
// @grant none
// @run-at document-body
// @updateURL https://github.com/melomatch/token-handler/raw/main/token-handler.user.js
// @downloadURL https://github.com/melomatch/token-handler/raw/main/token-handler.user.js
// ==/UserScript==

(function() {
    "use strict";
    const SITE_HOST = "http://dev.melomatch.ru";

    const handleYandexToken = () => {
        const hash = new URLSearchParams(window.location.hash.substring(1));
        const accessToken = hash.get("access_token");

        if (accessToken) {
            window.location.replace(`${SITE_HOST}/callback/yandex?access_token=${accessToken}`);
        }
    };

    switch (window.location.host) {
        case "music.yandex.ru":
            handleYandexToken();
            break;
    }
})();