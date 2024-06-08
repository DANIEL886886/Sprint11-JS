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
        
        // animate the border on JSON response
        const container = document.querySelector(".container")
        container.classList.add("animate-border-dice");
        // Remove the class after animation is complete
        container.addEventListener("animationend", () => {
            container.classList.remove("animate-border-dice");
        });
        const dicebutton = document.getElementById("btn1");
        dicebutton.classList.add("animate-border-dice");
        dicebutton.addEventListener("animationend", () => {
            dicebutton.classList.remove("animate-border-dice");
        });
        const diceid = document.getElementById("1");
        diceid.classList.add("diceid-colorize");
        diceid.addEventListener("animationend", () => {
            diceid.classList.remove("diceid-colorize");
        });
    }

    // defined event and function for voice button

    const voiceButton = document.getElementById("btn2");
    voiceButton.addEventListener("click", speakAdvice);

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
        });
    };

    function speakAdvice() {
        const adviceid = document.getElementById("1").innerText;
        speak(adviceid);

        const advicemsg = document.getElementById("2").innerText;
        setTimeout(function () {
            speak(advicemsg);
        }, 2500);

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

