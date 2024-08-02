// Ten skrypt tworzy batchowo 5 klientów, cały proces odbywa się zgodnie z Synerise API Reference
(() => {
    const clientNames = ["Ziemowit Olejniczak", "Anton Stolarz", "Rozalia Olejniczak", "Liliana Stepnowska", "Kasandra Bogus"];
    const sexes = ["MALE", "OTHER", "FEMALE", "NOT_SPECIFIED", "FEMALE"];

    const xhr = new XMLHttpRequest();
    xhr.withCredentials = true;

    xhr.addEventListener("readystatechange", function() {
        if (this.readyState === this.DONE) {
            console.log(this.responseText);
        }
    })

    let phoneNumber = 123456789;
    let data = [];

    xhr.open("POST", "https://api.synerise.com/v4/clients/batch");
    xhr.setRequestHeader("content-type", "application/json");
    xhr.setRequestHeader("Accept", "application/json");
    xhr.setRequestHeader("Api-Version", "4.4");
    // Ten token JWT wziąłem z ciasteczek ze strony workspace'a rekrutacyjnego (pewnie już nie działa)
    xhr.setRequestHeader("Authorization", "Bearer eyJjdHkiOiJKV1QiLCJlbmMiOiJBMjU2R0NNIiwiYWxnIjoiUlNBLU9BRVAtMjU2In0.L-qkAD-8L6xAFD2RLc6jE-aLJo9Np44cVOJPCWABs9fodRO_hyAxSCjgyEkvALw9uk0mQvQWQdh5LZetbv1rDMtv6jrcWgczpvSH7eHEDzxQ493opZnJogZSG23n1y6VEeBniaGKggYo90qj2gRM2-nCpvj4D0QYhf3ynE0v_002BddeVVjDWGZ1Z3mUYy6klQx6offqmCM4NAFYXiEvoDWxa4wUHb5x_Ww8cDSGqlb_rwdlOdVGsFwlTd90I6_Fbo5ban_hfxCx8lUZLJGmKwx4mOijvMwJ4eKO7I7EXO75zfS5QJM1nqMfUCpuA8zSprGAQ9JWVcq4Fxt6fdrbF5AJBe_qr7U8drlBccNKHiOUQl5dY3bAKeVqS2_YPfFSYyUXHiGVVAUVOc31_O5_87tVnZCt2ufndye3dCI1smJnqCL1AZVClMCGj8YHKRjzjA9yLLMcCtf9v1tAtfseyUmnBmdmMgBu2NVzL1TrWF7g9uyq4bJfcQbKqtAd_eU9m7-2S7uslDOyDt-SCgny7M4BrZECWO5wmMDKFZQYiPbNR-feKYIaX--l7aaEfyZwH8cYY20Ia7d9tpiO4nq2BcJSHtIoBCehYPslSyP5n2gqwxwpL9VEFZac07tfR0RJQLTcKIzOJdXJpZY_csQwaG2gvD4y6KmgHaaRBpsEEUM.e18KKypaoTDkm406.4_HnDPg4lxFWBdLJYxQ9_C3-0DWsw4fFty1ID-PG2dibf2WQ82vPzyiRO3iyreM8dImpUfd4l8ZXl2saP6_ohR8wZWJ_EjuRd1Dciq_LDSJuirOKhEgVC99eZmViu502ALILGORH__hbIB0u91n0e_d_sjjsQiOyVzTAjSYgNa75ef-4P7lQRWUOozZxMURDoWBFF33yncgLkXImMyf2fkSdzMNruN52yQ--CbiS13_iLCNFKpmC9oJ15FYbkyUSiBNb4eEtpUKwkHCTw0fjmAgnOqJUB5YT6zsyYxasmAVU0YakLA7UlAr-RHGyxHmrQ3BN9HziaZUm4P9ssOWyBOxhLOyR9X87Qvs1xhiWpRcYJQsi2z-GiBgyrEnlb015jMbTLmM9deUDD9uTB2-2kTdjcv2dB2yFktV3SGFZTp6AG2Zk4WSTI9C-S9n1esI5jWMkufjVxrGNv1vi3MKfwhbImgQoDBSYQnNyI4Xc8abaj-d4IsRJpJSzNRM5pGyjp56sj4w54OZSi9a5BNMRuyVrmsFzB-ZB-dVBDWkjYlUQ-l9wR1oo4Q2deIjQVT_oFegbotPJp-8Ovg-NRa4_GgdUbhUUjwK-7o-7Q8mdSCLvVI_g7OqxQshFBh0G4UcpWeasz4Qfs9vU4kINkwxDAIjWfkHCBpcRIrcgmVHKbLnt55BUOgwfGEbdH9cfKoYgAi5Q7fJblY1aVKnxMQ6F2zTfx6g3pGtYqzZzLyEP5nMPmjJdnjGIpJ19S4G2xr1DsT1ji-IPvOqWGDbX645vsLx5ZElX7C9eSMwfNmxMN3G32i0q7LoFWDcrFlq6OltX9UplsSrOELVwhkWgLNGsFb3vbW7UE92EZNSza7IkNQJb-B3KHjViORaunK72vd_bvyeJNJKdnlD2vF_wbMUMFJmgkOPqLMYZMGkMG6HZC6SGxLyf9NNupaOCp5fCRdCFOO8l6e5pLruKfHtOZNddZUXWB3QvZ3qkRIp8ubfklhueLijOx8ALFzBFhSKOkGNPD7pCIQzQhy8vTDL-lqHplPaGuWSxLe_u2YBDu1ET7uW6CVD-WxgJq8bNHgJUR4JCwVsiNlGDNbb4ys9oUQN5KmXauzHi09FQ5zgDVUj2ALqEfyJ_y3F3w2xMcFEBSLHoLUKrDAXwEJB8ckNjCbSBbrC8n_90nFmlU73MM-4m9pai7OmNjn7wMU1DYkJ9cAFFv-F8uXGUd4fpwL1IwSPUvLy1lgO6DbUCdqgHC-9EQi_UHyf6HNaCLE6bwCFZAEMhtkWnBRQrt5LqiNNKdWSHlw7zYs93W96lSUQRKUt4pEWEhXAXtp23S7vxBYXZS1EiuC1BqnoeybrgVx5ul_KMDRRQIx3QOsqJbxayojYIitWkrThEbvf9lQfqIhi8c_qpH5pmZQ.NtM-Q4gvzqhgO4QK5rUxMA");

    for (var i = 0; i < 5; i++) {
        var clientName = clientNames[i].split(' ');
        data.push({
            "firstName": clientName[0],
            "lastName": clientName[1],
            "phone": "+48".concat((phoneNumber + i).toString()),
            "sex": sexes[i],
            "birthDate": (1999 + i).toString().concat("-0", (i + 1).toString(), "-0", (i + 2).toString()),
            "email": clientName[0].toLowerCase().concat(".", clientName[1].toLowerCase(), "@example.net"),
            "agreements": {
                "email": 1,
                "sms": Math.round(Math.random()),
                "push": Math.round(Math.random()),
                "webPush": Math.round(Math.random()),
                "bluetooth": Math.round(Math.random()),
                "rfid": Math.round(Math.random()),
                "wifi": Math.round(Math.random())
            },
            "tags": ["syneriseUS"]
        });


    }
    console.log(data);
    xhr.send(JSON.stringify(data));
})();