const jokeBtn = document.getElementById('jokeBtn');
const jokeDiv = document.getElementById('joke');
const jokeImage = document.getElementById('jokeImage');
const quoteBtn = document.getElementById('quoteBtn');
const quote = document.getElementById('quote');
const jokeApiUrl = "https://official-joke-api.appspot.com/random_joke";

jokeBtn.onclick = () => {
    fetch(jokeApiUrl)
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            return response.json();
        })
        .then(joke => {
            jokeDiv.textContent = `${joke.setup} - ${joke.punchline}`;
            jokeImage.src = "c1.png";

            setTimeout(() => {
                jokeImage.src = "comedy.png";
            }, 3000);
        })
        .catch(error => {
            console.error(error);
            jokeDiv.textContent = "Oops! Couldn't fetch a joke. Try again later.";
        });
};



const randomImageBtn = document.getElementById('randomImageBtn');
const randomUserImage = document.getElementById('randomUserImage');
const randomDogImage = document.getElementById('randomDogImage');

randomImageBtn.onclick = () => {

    axios.get('https://dog.ceo/api/breeds/image/random')
        .then(response => {
            randomDogImage.src = response.data.message;
        })
        .catch(error => console.error(error));
};

quoteBtn.onclick = () => {
    axios.get('https://api.adviceslip.com/advice')
        .then(function(res) {
            quote.innerHTML = res.data.slip.advice;
            quoteBtn.textContent = "Next";
        })
        .catch(function(err) {
            console.error(err);
            quote.innerHTML = "Could not fetch a quote. Please try again later.";
        });
};
