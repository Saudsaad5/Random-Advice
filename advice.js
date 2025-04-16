const result = document.getElementById("result");
const generateBtn = document.getElementById("generateBtn");

function fetchAdvice() {
    const url = "https://api.adviceslip.com/advice"

    fetch(url)
    .then(res => res.json())
    .then(data => {
        result.innerText = data.slip.advice
    })
    .catch(err => {
        result.innerText = "Failed to fetch advice. Try again.";
    });
}

generateBtn.addEventListener("click",fetchAdvice);