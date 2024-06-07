document.addEventListener("DOMContentLoaded", () => {
    const button = document.getElementById("btn"); // corrected getElementByid to getElementById
    button.addEventListener("click", getAdvice);

    function getAdvice() {
        fetch("https://api.adviceslip.com/advice")
            .then((response) => response.json())
            .then((data) => {
                let adviceData = data;
                const receivedadvice = data.slip.advice;
                const receivedid = data.slip.id;
                console.log(adviceData);
                console.log(receivedadvice);
                console.log(receivedid);
                
                document.getElementById("1").innerText = "ADVICE" + " # " + receivedid;
                document.getElementById("2").innerText = receivedadvice;
            
            });
    }
});