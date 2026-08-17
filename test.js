/* =========================================================
   MULTILINGUAL PORTFOLIO INTRO
========================================================= */

document.addEventListener("DOMContentLoaded", function () {


    /* =====================================================
       ELEMENTS
    ===================================================== */

    const greetingScreen =
        document.getElementById("greetingScreen");

    const greetingText =
        document.getElementById("greetingText");

    const language =
        document.getElementById("introLanguage");

    const progressBar =
        document.getElementById("introProgressBar");

    const percent =
        document.getElementById("introPercent");

    const skipButton =
        document.getElementById("introSkip");


    if (
        !greetingScreen ||
        !greetingText
    ) {
        return;
    }


    /* =====================================================
       GREETINGS
    ===================================================== */

    const greetings = [

        {
            text: "Hello",
            lang: "EN"
        },

        {
            text: "नमस्ते",
            lang: "HI"
        },

        {
            text: "ನಮಸ್ಕಾರ",
            lang: "KN"
        },

        {
            text: "வணக்கம்",
            lang: "TA"
        },

        {
            text: "నమస్కారం",
            lang: "TE"
        },

        {
            text: "നമസ്കാരം",
            lang: "ML"
        },

        {
            text: "নমস্কার",
            lang: "BN"
        },

        {
            text: "નમસ્તે",
            lang: "GU"
        },

        {
            text: "ਨਮਸਤੇ",
            lang: "PA"
        },

        {
            text: "ନମସ୍କାର",
            lang: "OR"
        },

        {
            text: "Namaste",
            lang: "SA"
        },

        {
            text: "Bonjour",
            lang: "FR"
        },

        {
            text: "Hola",
            lang: "ES"
        },

        {
            text: "Ciao",
            lang: "IT"
        },

        {
            text: "Hallo",
            lang: "DE"
        },

        {
            text: "Olá",
            lang: "PT"
        },

        {
            text: "Привет",
            lang: "RU"
        },

        {
            text: "你好",
            lang: "ZH"
        },

        {
            text: "こんにちは",
            lang: "JA"
        },

        {
            text: "안녕하세요",
            lang: "KO"
        },

        {
            text: "สวัสดี",
            lang: "TH"
        },

        {
            text: "Xin chào",
            lang: "VI"
        },

        {
            text: "Halo",
            lang: "ID"
        },

        {
            text: "Merhaba",
            lang: "TR"
        },

        {
            text: "مرحبا",
            lang: "AR"
        },

        {
            text: "שלום",
            lang: "HE"
        },

        {
            text: "Γεια σου",
            lang: "EL"
        },

        {
            text: "Cześć",
            lang: "PL"
        },

        {
            text: "Ahoj",
            lang: "CS"
        },

        {
            text: "Bună",
            lang: "RO"
        },

        {
            text: "Hej",
            lang: "SV"
        },

        {
            text: "Jambo",
            lang: "SW"
        },

        {
            text: "Sawubona",
            lang: "ZU"
        },

        {
            text: "Kia ora",
            lang: "MI"
        },

        {
            text: "Namaste 🙏",
            lang: "IN"
        }

    ];


    /* =====================================================
       SETTINGS
    ===================================================== */

    let currentIndex = 0;

    let introFinished = false;

    /*
        Each greeting stays for 1.6 seconds.

        The actual fade is only 0.42 seconds.

        So the text remains completely still
        for most of the time.
    */

    const displayTime = 1600;

    const fadeTime = 420;


    /*
        35 greetings × 1.6 seconds
        ≈ 56 seconds.

        We don't want that.

        Instead, show a selected sequence
        for a much shorter premium intro.
    */

    const selectedGreetings = [

        greetings[0],   // Hello
        greetings[1],   // Hindi
        greetings[2],   // Kannada
        greetings[3],   // Tamil
        greetings[4],   // Telugu
        greetings[11],  // French
        greetings[12],  // Spanish
        greetings[13],  // Italian
        greetings[17],  // Chinese
        greetings[18],  // Japanese
        greetings[19],  // Korean
        greetings[24],  // Arabic
        greetings[29],  // Swedish
        greetings[31],  // Zulu
        greetings[34]   // Namaste
    ];


    /*
        15 greetings × 550ms
        ≈ 8.25 seconds
    */

    const greetingDuration = 550;

    const totalDuration =
        selectedGreetings.length *
        greetingDuration;


    /* =====================================================
       INITIAL GREETING
    ===================================================== */

    greetingText.textContent =
        selectedGreetings[0].text;

    language.textContent =
        selectedGreetings[0].lang;


    /* =====================================================
       CHANGE GREETING
       SAME POSITION
    ===================================================== */

    function changeGreeting() {

        if (introFinished) {
            return;
        }


        /*
            Fade the current word out.
        */

        greetingText.classList.add(
            "greeting-changing"
        );


        setTimeout(function () {


            currentIndex++;


            /*
                End intro after final greeting.
            */

            if (
                currentIndex >=
                selectedGreetings.length
            ) {

                finishIntro();

                return;

            }


            /*
                Change ONLY the text.

                Position remains exactly the same.
            */

            greetingText.textContent =
                selectedGreetings[
                    currentIndex
                ].text;


            language.textContent =
                selectedGreetings[
                    currentIndex
                ].lang;


            /*
                Allow browser to register
                the changed text.
            */

            requestAnimationFrame(function () {

                greetingText.classList.remove(
                    "greeting-changing"
                );

            });


        }, fadeTime);

    }


    /* =====================================================
       GREETING LOOP
    ===================================================== */

    const greetingTimer =
        setInterval(
            changeGreeting,
            greetingDuration
        );


    /* =====================================================
       PROGRESS
    ===================================================== */

    const startTime =
        performance.now();


    function updateProgress(currentTime) {

        if (introFinished) {
            return;
        }


        const elapsed =
            currentTime - startTime;


        const percentage =
            Math.min(
                100,
                Math.round(
                    (
                        elapsed /
                        totalDuration
                    ) * 100
                )
            );


        progressBar.style.width =
            percentage + "%";


        percent.textContent =
            percentage + "%";


        if (percentage < 100) {

            requestAnimationFrame(
                updateProgress
            );

        }

    }


    requestAnimationFrame(
        updateProgress
    );


    /* =====================================================
       FINISH INTRO
    ===================================================== */

    function finishIntro() {

        if (introFinished) {
            return;
        }


        introFinished = true;


        clearInterval(
            greetingTimer
        );


        /*
            Complete progress.
        */

        progressBar.style.width =
            "100%";

        percent.textContent =
            "100%";


        /*
            Give final greeting a moment.
        */

        setTimeout(function () {


            greetingScreen.classList.add(
                "intro-finished"
            );


            /*
                Restore page scrolling.
            */

            document.body.style.overflow =
                "";


            /*
                Completely remove intro
                after transition.
            */

            setTimeout(function () {

                greetingScreen.remove();

            }, 1000);


        }, 450);

    }


    /* =====================================================
       SKIP BUTTON
    ===================================================== */

    if (skipButton) {

        skipButton.addEventListener(
            "click",
            function () {

                finishIntro();

            }
        );

    }


    /* =====================================================
       ESC KEY
    ===================================================== */

    document.addEventListener(
        "keydown",
        function (event) {

            if (
                event.key === "Escape" &&
                !introFinished
            ) {

                finishIntro();

            }

        }
    );


    /* =====================================================
       LOCK SCROLL WHILE INTRO IS ACTIVE
    ===================================================== */

    document.body.style.overflow =
        "hidden";

});