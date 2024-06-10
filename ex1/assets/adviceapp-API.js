document.addEventListener("DOMContentLoaded", () => {
    // defined event and function for dice button, get random advice

    const button = document.getElementById("btn1");
    button.addEventListener("click", getAdvice);

    function getAdvice() {
        fetch("https://api.adviceslip.com/advice")
            .then((response) => response.json())

            .then((data) => {
                let adviceData = data;
                console.log(adviceData);

                const receivedadvice = data.slip.advice;
                console.log(receivedadvice);

                const receivedid = data.slip.id;
                console.log(receivedid);

                document.getElementById("1").innerText =
                    "ADVICE" + " # " + receivedid;
                document.getElementById("2").innerText = receivedadvice;
            });

        // css colorization of container-border, dice button-border, dice button-background
        let container = document.querySelector(".container");
        let dicebutton = document.getElementById("btn1");

        container.classList.add("dice-animation");
        dicebutton.classList.add("dice-animation");

        container.addEventListener("animationend", () => {
            container.classList.remove("dice-animation");
            dicebutton.classList.remove("dice-animation");
        });

        let diceid = document.getElementById("1");
        diceid.classList.add("diceid-colorize");
        diceid.addEventListener("animationend", () => {
            diceid.classList.remove("diceid-colorize");
        });

        // code to get a random dice number when dice button is pressed
        const img = document.getElementById("btnimage");
        const staticImages = [
            "assets/1.png",
            "assets/2.png",
            "assets/3.png",
            "assets/4.png",
            "assets/5.png",
            "assets/6.png",
        ];

        const randomIndex = Math.floor(Math.random() * staticImages.length);
        img.src = staticImages[randomIndex];

        // code to retrieve original spinning dice.gif
        setTimeout(() => {
            img.src = "assets/dice-game.gif";
        }, 1500);
    }

    //....................................................................
    // defined event and function for voice button
    const voiceButton = document.getElementById("btn2");
    voiceButton.addEventListener("click", speakAdvice);

    let currentAudioElement = null;
    let documentClickListener = null;

    //VOICE API CODE
    const speak = (message) => {
        VoiceRSS.speech({
            key: "52bfbd75e1c24955831329926a53c5ed",
            src: message,
            hl: "en-us",
            v: "Nancy",
            r: 0,
            c: "mp3",
            f: "22khz_16bit_stereo",
            ssml: false,
            onready: (audio) => {
                currentAudioElement = document.createElement("audio");
                currentAudioElement.src = audio.src;
                currentAudioElement.play();
                addDocumentClickListener();
            },
        });
    };

    // code for the voice api (limited number of api import data)
    function speakAdvice() {
        
        const adviceid = document.getElementById("1").innerText;
        speak(adviceid);

        const advicemsg = document.getElementById("2").innerText;
        setTimeout(function () {
            speak(advicemsg);
        }, 2500);

        // stop function when click outside an object wich doesn`t have the class=".btn2"
        document.addEventListener("click", function (e) {
            if (
                (!e.target.classList.contains("btn2") &&
                    !e.target.closest(".btn2")) ||
                e.target.classList.contains("btn1") ||
                e.target.closest(".btn1")
            ) {
                if (currentAudioElement) {
                    try {
                        currentAudioElement.pause();
                        currentAudioElement.src = "";
                        currentAudioElement = null;
                    } catch (error) {
                        console.error("Error pausing audio:", error);
                        throw error;
                    }
                }
                document.removeEventListener("click", documentClickListener);
            };
            document.addEventListener("click", documentClickListener);
        });

        // animate the border on JSON response
        const container = document.querySelector(".container");
        container.classList.add("animate-border-voice");
        // Remove the class after animation is complete
        container.addEventListener("animationend", () => {
            container.classList.remove("animate-border-voice");
        });
        const voicebutton = document.getElementById("btn2");
        voicebutton.classList.add("animate-border-voice");
        voicebutton.addEventListener("animationend", () => {
            voicebutton.classList.remove("animate-border-voice");
        });
        const voiceid = document.getElementById("1");
        voiceid.classList.add("voiceid-colorize");
        voiceid.addEventListener("animationend", () => {
            voiceid.classList.remove("voiceid-colorize");
        });
    }
});

