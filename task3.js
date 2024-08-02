// Ten skrypt tworzy 5 eventów zgodnie z wymaganiami. Cała proces odbywa się tak jak w Synerise API Reference
(async () => {
    // Funkcja zamienia datę na format wymagany przez endpoint
    function toIsoString(date) {
        var tzo = -date.getTimezoneOffset(),
            dif = tzo >= 0 ? '+' : '-',
            pad = function(num) {
                return (num < 10 ? '0' : '') + num;
            };
      
        return date.getFullYear() +
            '-' + pad(date.getMonth() + 1) +
            '-' + pad(date.getDate()) +
            'T' + pad(date.getHours()) +
            ':' + pad(date.getMinutes()) +
            ':' + pad(date.getSeconds()) +
            '.' + pad(date.getMilliseconds()) +
            dif + pad(Math.floor(Math.abs(tzo) / 60)) +
            ':' + pad(Math.abs(tzo) % 60);
    }

    // ID klientów stworzonych w poprzednim tasku
    const clientIds = [8699944037, 8699944037, 8699944041, 8699944041, 8699943828];

    const xhr = new XMLHttpRequest();
    xhr.withCredentials = true;

    xhr.addEventListener("readystatechange", function () {
    if (this.readyState === this.DONE) {
        console.log(this.responseText);
    }
    });

    let data = "";
    let customDate = new Date();    
    customDate.setMonth(6);

    for (var i = 0; i < 5; ++i) {
        xhr.open("POST", "https://api.synerise.com/v4/events/custom");
        xhr.setRequestHeader("content-type", "application/json");
        xhr.setRequestHeader("Api-Version", "4.4");
        // Ten token JWT wziąłem z ciasteczek ze strony workspace'a rekrutacyjnego (pewnie już nie działa)
        xhr.setRequestHeader("Authorization", "Bearer eyJjdHkiOiJKV1QiLCJlbmMiOiJBMjU2R0NNIiwiYWxnIjoiUlNBLU9BRVAtMjU2In0.JCHJuyXM27HqarsxpnWgLbfiQk1D04EJsmqgClAZmnpnozVbgpBw3sdIBGq1DUXicCEnd8Jz7t33CBOwjBZduOyMu7kqegnG0CA-yzUb1Lva6K1xN5a_PW9rRdnqGZl3PC_i7XFIMKOkGJ2JavotEoJxfS3OvSHSSHjRK2R0nV1wjL605TqO7KOSS68783BrzSsgTWQxSHz4MVN5LNXZ0coEMFx8NOBsTUwHqSpqBYQZMCMxG_y-HUULRGgNlcgBcSOQcr11f3eW-eU-v3Z4q0-ZZRMQDGIzwr71UIWFcx9br38SpDDUYxyw3KGqjmahDN9WiwzS2QjGwg3rzmsKtlFzrOh4R7x1-0qG4gHsOpFyg-hRdMegZU9pB_W5P914L0pkN9mxWkEmB81oxVdi-hH54L9lyZJwa6F8tcRJL06Z_z5Wxe8LvE9bQXFBy1TU6_f6lTMLJyaWYjdLV9nPpF-b5WdafF0I9TSs_4RTBhnmlyew2o8D0qfxGMTXKB9ICtJgMJK7-IKUSUd7dYQ1Vb_TsH0KmMFKx5Uh01Z21lSBDQZ-b0X0kWnEu2-vfz54neJ0E-jUgJ2IE6wWM9-TWOQux6ShU1pR_XaAbJkXcB3BgHcTxl0-l04nhPEfnEqolo65YDr0NOiGt1cEdus9jgnwzlOUYVSRIi_0pMuuFf4.xdlxwQ9-62OvTCo9.5S286lMi6Q1tSK8clZjT_imzLMv0KNMwW-9Y8YYhhNSp38JRkd_O875nNf_95C11N2ity6B72Pn4eHPixFkuh6gMEXArXnpPkJHAMOiUEKOS1njBp8ORcIhOkB9nOnUpULa6cK70vcalwaLtiId9zCPVBiUv372ryc02DkglGFvM_sEWg5FuFEvTXcajlWAHxLWCjlELvZC32YMVIOZclHhNjfLfdxVGbMeh5oxeklIeynwrqFIv1fBBNXHxMvogDmQApF_5qyrn1pDpvzZhdyZmZnrH1SiYePd6abIfmlxzG1Uvk-aLMf5OA38qylyGHd3GboYfdKsz6N0BcbTQzUjtp-_ibmBu6ZvXZadq_8nOsuL1rWqDjPRqIC-EshLOaQAxRO4YDcoRe8ptCrbFOJdXlQsAQEELhstDrMq8qjptGEJ_y2uxAGdnOzdFlHsmcgEzlaaEOmih4P99HzgHbWea_KfsLatYchizMmgoO_nLA2rkyvKijzft90LjMEMVqAnJ3es-rVzNh7uUgwODLEyGT8E_LDW4f6HoqkUs4xIuSR-be7g8tgtYtdUT72PAfZKImi5Sd3CIjSXBz5eXt8_vKatFKqwxk9enkkTy_vILyk0XF4K98W3HPRieTJKAIkD_pXxMdxFXd6UNYTSajoPMs4fW8oSBLvHuWo7Sl1URaEdfxe0ijyv8Nomc-NqtxMjTQ1dChsN8W4n4wNXxijaEgzws85OopqWDT7bKM6V0UeiQaJ1UyzV7LEAVloqSavCQpFLHc9Sl0dYr-QGpD2w3nU-KqmnKGC1fu8GHpnDgytWFWQeHUHrZuLM6Apl2uYXt6goySi0gzUDUqgaTkQourg44rjN_Rx3P6DXyu07D87wh0-CEpinDaIe7NFrwmkeLAQXFYA66vqvNfkwkalaHKdPs4Tygnry1aOeECNiZR82IzoMm1YcZ8JPvmGGVFcWcqBJAXC9Nna2jeFHJ38CZg68_j7KQ3BVwja8AbYDG7Fmwup04W9ewAe25JyhoLb9yXCb-LAuipUGPzAJHAXm2IjTgiM6Vztjfixw-LXWgvDsX0UMQiWwNYsC4-KknKuBbEzLhnG-FR0bLQ1fyRb7iX3yWjSSQ7VHqqLIR2HBGuDLnefgA0xDJ13rE_TM1e2iVH3WvkSI-iTb5VauIc1V2M7RqTdIzeplfdgcAcoKG9vbyackFeXUSVWLN_y1xUfmJ63T3vOKpQvSGG5qEUPLs6504cwqkJUML7U5qi0ktaOjxHhYcdNuAxhD-8I61QzBRWQOJf9V667i134Fw8CqhWGyhAE6dYUCBH9DVvZjAMgwyeY-A8zvFY05sTqfinSba9OdSXje_ss1WDFGsCju0sS0PHjT0vd33uZ2XmHyWVgROHTRikGii5Wpvg3EilZ-FYA.O-Lc_1PIpXyzaZNrxBFeUg");

        customDate.setDate(20 + i);

        data = JSON.stringify({
            "label": "favourite a product",
            "client": {
                "id": clientIds[i]
            },
            "time": toIsoString(customDate),
            "action": "favourite.product",
            "params": {
                "productName": ((i == 4) ? "demoProduct" : (i % 2 == 0) ? "Smartphone ".concat(i.toString()) : "TV ".concat(i.toString())),
                "price": (i + 1) * 1000 - 1,
                "currency": "PLN",
                "guaranteeMonths": (i + 1) * 6,
                "rating": 4 + 0.2 * i
            }
        })
        console.log(data);
        xhr.send(data);
        // Działa jak sleep, robię to bo nie chcę wysłać 5 requestów naraz
        await new Promise(r => setTimeout(r, 5000));
    }
})();