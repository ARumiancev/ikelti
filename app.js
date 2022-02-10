"use strict";

const question = document.getElementById("question");
const button = document.querySelectorAll("button");
const progress = document.getElementById("progress");
var questionNumber = 0;
var resultNumber = 0;
var questions = [
    {
        text: "Kam naudingos morkos?",
        choices: ["Niekam", "Adolfui", "Kepenims", "Odai"],
        answer: "Odai"
    },
    {
    text: "Kam naudingi obuoliai?",
    choices: ["Širdžiai", "Kojoms", "Delfinams", "Virškinimui"],
    answer: "Virškinimui"
    },
    {
    text: "Kokias ligas padeda gydyti agrastai?",
    choices: ["Cukrini diabetą", "Kepenų cirozę", "Nemiga", "Vėžį"],
    answer: "Cukrini diabetą"
    },
    {
    text: "Kokio vitamino gausu apelsinuose?",
    choices: ["Vitamino E", "Vitamino A", "Vitamino C", "Vitamino B"],
    answer: "Vitamino C"
    },
    {
    text: "Kokiais dalykais yra turtingi arbūzai?",
    choices: ["Vitaminais", "Mineralais", "Antioksidantais", "Visi teisingi"],
    answer: "Visi teisingi"
    }
]


// Uzkrauna klausima ir atsakymus
var populate = () => {
    if (questionNumber < questions.length) {
        question.innerText = questions[questionNumber].text;
        button.forEach((x, i) => {
        x.innerText = `${questions[questionNumber].choices[i]}`;
        });
    }  else {
        // uzkrauna rezultatus
        showResults();
    }
}

// Skaiciuoja teisingus atsakymus
var check = guess => {
    if (guess.innerText === questions[questionNumber].answer)
    resultNumber++;
    
}

// Rodo progresa
var showProgress = () => {
    questionNumber++;
        // Uzkrauna progreso skaiciu/ klausimo numeri (maybe..?)
    progress.innerText  = questionNumber + 1;
    console.log(resultNumber);
}


// Priskiria funkcija mygtukams
button.forEach((x) => {
    x.addEventListener("click", function(){
        setTimeout(function(){
            // Rodo progresa
            showProgress();
            // Uzkrauna klausima ir atsakymus
            populate();
        }, 10);
        // Skaiciuoja teisingus atsakymus
        check(this);
    });
})

// Result page

var showResults = () => {
    quiz.innerHTML = `<img src="https://media3.giphy.com/media/K37NyzthNN9zW/giphy.gif?cid=ecf05e47a0qdrt92pkcjcuji8fhe9q4rozxdyseri2vga6ls&rid=giphy.gif&ct=g">`;

    setTimeout(function(){
        const quiz = document.getElementById("quiz");
        quiz.innerHTML = `<h1>Result: ${resultNumber} iš ${questions.length}. </h1>`
    },3000)
    
    
}
// Uzkrauna pirma karta
populate();