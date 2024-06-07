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

    }
    
});

