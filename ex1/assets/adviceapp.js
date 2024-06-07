document.addEventListener("DOMContentLoaded", () => {
    const button = document.getElementById("btn");
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
    }
});