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

                document.getElementById("1").innerText = "ADVICE" + " # " + receivedid;
                document.getElementById("2").innerText = receivedadvice;
            });

        // animate the border on JSON response
        const container = document.querySelector(".container");
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
        const dicebtncolor = document.getElementById("btn1");
        dicebtncolor.classList.add("dicebtn-color");
        dicebtncolor.addEventListener("animationend", () => {
            dicebtncolor.classList.remove("dicebtn-color");
        });

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

        setTimeout(() => {
            img.src = "assets/dice-game.gif";
        }, 1500);
            
    };

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

        // let speech = null;

        // using the windows voice integration in order to stop the voice is click outside voice btn
        // function speakAdvice() {
        //     const adviceid = document.getElementById("1").innerText;
        //     speech = new SpeechSynthesisUtterance(adviceid);
        //     window.speechSynthesis.speak(speech);

        //     const advicemsg = document.getElementById("2").innerText;
        //     setTimeout(function () {
        //         speech = new SpeechSynthesisUtterance(advicemsg);
        //         window.speechSynthesis.speak(speech);
        //     }, 2500);
        

        //     document.addEventListener("click", function (event) {
        //         if (
        //             !event.target.classList.contains("btn2") &&
        //             !event.target.closest(".btn2")
        //         ) {
        //             if (speech) {
        //                 window.speechSynthesis.cancel();
        //                 speech = null;
        //             }
        //         }
        //     });

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
        const voicebtncolor = document.getElementById("btn2");
        voicebtncolor.classList.add("voicebtn-color");
        voicebtncolor.addEventListener("animationend", () => {
            voicebtncolor.classList.remove("voicebtn-color");
        });
    }

});

