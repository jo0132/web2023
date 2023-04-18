const mainResult = document.querySelector("#myresult");
const resultQuote = mainResult.querySelector(".myquote");
const resultAuthor = mainResult.querySelector(".myauthor");

let resultAll = [];

const dataresult = (value) => {
    fetch("json/dummy01.json")
    .then(res => res.json())
    .then(items => {
        const randomIndex = Math.floor(Math.random() * items.length);
        // const forPhrase = {
        //     quote: items[0].quote,
        //     author: items[0].author
        // };
        resultQuote.textContent = items[randomIndex].quote;
        resultAuthor.textContent = "- "+items[randomIndex].author;
        // document.body.style.transition= "all 2s";
    })

    .catch((err) => console.log(err));
};

const randomBg = (value) => {
    fetch("https://source.unsplash.com/random/?yellow")
    .then(res => {
        document.body.style.backgroundImage = `url(${res.url})`
        document.body.style.transition= "ease 2s";

    })
    .catch((err) => console.log(err));
};

dataresult();
randomBg();
setInterval(randomBg, 10000);
setInterval(dataresult, 10000);



// console.log(items);
