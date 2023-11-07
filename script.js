const gK = document.getElementById("genKno");
const geo = document.getElementById("geogr");
const his = document.getElementById("hist");
const sci = document.getElementById("sci");
const apt = document.getElementById("apt");

const questionElem = document.getElementById("question");
const ansBtn = document.getElementById("ansbtn");
const nextBtn = document.getElementById("nextbtn");
const homeBtn = document.getElementById("homebtn");
const pct = document.getElementById("per");

const GKquestions = [
    {
        question: "Giddha is the folk dance of?",
        answers: [
            { text: "Haryana", correct: false},
            { text: "Jammu Kashmir", correct: false},
            { text: "Punjab", correct: true},
            { text: "Gujarat", correct: false},
        ]    
    },
    {
        question: "Which country are the Giza Pyramids in?",
        answers: [
            { text: "Afghanisthan", correct: false},
            { text: "India", correct: false},
            { text: "South Africa", correct: false},
            { text: "Egypt", correct: true},
        ]    
    },
    {
        question: "Martyrs'Day is celebrated every year on?",
        answers: [
            { text: "30th January", correct: true},
            { text: "8th March", correct: false},
            { text: "30th March", correct: false},
            { text: "8th January", correct: false},
        ]    
    },
    {
        question: "Which is the longest river on the earth?",
        answers: [
            { text: "Godavari", correct: false},
            { text: "Nile", correct: true},
            { text: "Amazon", correct: false},
            { text: "Rhine", correct: false},
        ]    
    },
    {
        question: "Gir National park in Gujarat is famous for?",
        answers: [
            { text: "Tiger", correct: false},
            { text: "Giraffe", correct: false},
            { text: "Cheetah", correct: false},
            { text: "Lion", correct: true},
        ]    
    }
];
const Geoquestions = [
    {
        question: "Hirakud Dam is located on which river?",
        answers: [
            { text: "Rihand", correct: false},
            { text: "Mahanadi", correct: true},
            { text: "Subarnrekha", correct: false},
            { text: "Bhargavi", correct: false},
        ]    
    },
    {
        question: "The word \u0022Mangal\u0022 is used for which among the following kinds of vegetations?",
        answers: [
            { text: "Aquatic Plants", correct: false},
            { text: "Algal Blooms", correct: false},
            { text: "Mediterranean forests", correct: false},
            { text: "Mangroves", correct: true},
        ]    
    },
    {
        question: "Which of the following is the highest peak of the Kumayun Himalayas?",
        answers: [
            { text: "Nanda Devi", correct: true},
            { text: "Dunagiri", correct: false},
            { text: "Kamet", correct: false},
            { text: "Trisul", correct: false},
        ]    
    },
    {
        question: "What is the length of the Siachen Glacier?",
        answers: [
            { text: "35kms", correct: false},
            { text: "78kms", correct: true},
            { text: "56kms", correct: false},
            { text: "69kms", correct: false},
        ]    
    },
    {
        question:"Which of the following is the characterstic feature of Narmada Valley?",
        answers: [
            { text: "Glacial origin", correct: false},
            { text: "Aeolian origin", correct: false},
            { text: "Structural origin", correct: true},
            { text: "Volcanic origin", correct: false},
        ]
    },
    {
        question: "As per Census 2011, the concentration of the Scheduled Caste population is the highest in which of the following states?",
        answers: [
            { text: "Madhya Pradesh", correct: false},
            { text: "Uttar Pradesh", correct: true},
            { text: "Punjab", correct: false},
            { text: "Haryana", correct: false},
        ]    
    }
];
const Histquestions = [
    {
        question: "Who among the following ruler was defeated by Seleucus?",
        answers: [
            { text: "Chandra Gupta Maurya", correct: true},
            { text: "Vikramaditya", correct: false},
            { text: "Chanakya", correct: false},
            { text: "None of the above", correct: false},
        ]
    },
    {
        question: "Where did \u201BTebhega\u201B movement occur in 1946?",
        answers: [
            { text: "Maharashtra", correct: false},
            { text: "Karnataka", correct: false},
            { text: "Bengal", correct: true},
            { text: "Tamil Nadu", correct: false},
        ]
    },
    {
        question: "When was Indian National Anthem was first sung?",
        answers: [
            { text: "August 15, 1947, Independence of India", correct: false},
            { text: "December 27, 1911 Calcutta", correct: true},
            { text: "1857 revolt", correct: false},
            { text: "1919, Jallianwala Bagh Massacre", correct: false},
        ]
    },
    {
        question: "The Indus Valley Civilization flourished during which period?",
        answers: [
            { text: "2nd century BC", correct: false},
            { text: "5th century AD", correct: false},
            { text: "10th century AD", correct: false},
            { text: "3000-1500 BC", correct: true},
        ]
    },
    {
        question: "The Mughal Empire reached its peak under the rule of which emperor?",
        answers: [
            { text: "Babur", correct: false},
            { text: "Aurangzeb", correct: false},
            { text: "Shah Jahan", correct: false},
            { text: "Akbar", correct: true},
        ]
    }
];
const Sciquestions = [
    {
        question: "Which of the following is NOT correct about units of work?",
        answers: [
            { text: "1 joule = 10<sup>7</sup> ergs", correct: false},
            { text: "1 kg-m = 9.8 joule", correct: false},
            { text: "1 joule = 1 Nm", correct: false},
            { text: "1 kg-m = 1 joule", correct: true},
        ]
    },
    {
        question: "\u0022Gnathology\u0022 is the study of which among the following?",
        answers: [
            { text: "Teeth", correct: false},
            { text: "Masticatory System", correct: true},
            { text: "Jaws", correct: false},
            { text: "Tounge", correct: false},
        ]
    },
    {
        question: "What is the S.I unit of Stefan-Boltzmann constant?",
        answers: [
            { text: "5.67 x 10<sup>-8</sup> W m<sup>-2</sup>K<sup>-4</sup>", correct: true},
            { text: "3.99 x 10<sup>-7</sup> W m<sup>-2</sup>K<sup>-4</sup>", correct: false},
            { text: "1.44 x 10<sup>-6</sup> W m<sup>-2</sup>K<sup>-4</sup>", correct: false},
            { text: "2.34 x 10<sup>-4</sup> W m<sup>-2</sup>K<sup>-4</sup>", correct: false},
        ]
    },
    {
        question: "Flowering in long day plants is related to which of the following?",
        answers: [
            { text: "Auxin", correct: false},
            { text: "Cytokinin", correct: false},
            { text: "Gibberlin", correct: true},
            { text: "Ethylene", correct: false},
        ]
    },
    {
        question: "Which of these is the force required to move a body uniformly in a circle?",
        answers: [
            { text: "Centrifugal force", correct: false},
            { text: "Centripetal force", correct: true},
            { text: "Kinetic force", correct: false},
            { text: "None of the above", correct: false},
        ]
    }
];
const Aptquestions = [
    {
        question: "A train running at the speed of 60 km/hr crosses a pole in 9 seconds. What is the length of the train?",
        answers: [
            { text: "120 metres", correct: false},
            { text: "180 metres", correct: false},
            { text: "150 metres", correct: true},
            { text: "324 metres", correct: false},
        ]
    },
    {
        question: "A person crosses a 600m long street in 5 minutes. What is his speed in km/hr?",
        answers: [
            { text: "7.2", correct: true},
            { text: "3.6", correct: false},
            { text: "8.4", correct: false},
            { text: "10", correct: false},
        ]
    },
    {
        question: "What will be the day of the week 15<sup>th</sup> August, 2010?",
        answers: [
            { text: "Monday", correct: false},
            { text: "Sunday", correct: true},
            { text: "Tuesday", correct: false},
            { text: "Friday", correct: false},
        ]
    },
    {
        question: "A clock is started at noon. By 10 minutes past 5, the hour hand has turned through:",
        answers: [
            { text: "145\u00B0", correct: false},
            { text: "150\u00B0", correct: false},
            { text: "155\u00B0", correct: true},
            { text: "160\u00B0", correct: false},
        ]
    },
    {
        question: "A vendor bought toffees at 6 for a rupee. How many for a rupee must he sell to gain 20%?",
        answers: [
            { text: "4", correct: false},
            { text: "3", correct: false},
            { text: "6", correct: false},
            { text: "5", correct: true},
        ]
    }
];


let currQueIndex = 0;
let score = 0;
let questions = [];

function gkselect() {
    document.getElementById("startpage").style.display = "none";
    questions = [...GKquestions];
    startQuiz();
}
function geoselect() {
    document.getElementById("startpage").style.display = "none";
    questions = [...Geoquestions];
    startQuiz();
}
function histselect() {
    document.getElementById("startpage").style.display = "none";
    questions = [...Histquestions];
    startQuiz();
}
function sciselect() {
    document.getElementById("startpage").style.display = "none";
    questions = [...Sciquestions];
    startQuiz();
}
function aptselect() {
    document.getElementById("startpage").style.display = "none";
    questions = [...Aptquestions];
    startQuiz();
}


function startQuiz(){
    currQueIndex = 0;
    score = 0;
    nextBtn.innerHTML = "Next";
    showQuestion(); 
}

function showQuestion(){
    rstState();
    let currQue = questions[currQueIndex];
    let queNo = currQueIndex + 1;
    questionElem.innerHTML = queNo + ". " + currQue.question;

    currQue.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        ansBtn.appendChild(button);
        if(answer.correct){
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click", selectAnswer);
    });
}

function rstState(){
    nextBtn.style.display = "none";
    homeBtn.style.display = "none";
    while (ansBtn.firstChild) {
        ansBtn.removeChild(ansBtn.firstChild);
    }
}

function selectAnswer(e){
    const selectedbtn = e.target;
    const isCorrect = selectedbtn.dataset.correct === "true";
    if(isCorrect){
        selectedbtn.classList.add("correct");
        score++;
    }else{
        selectedbtn.classList.add("incorrect");
    }
    Array.from(ansBtn.children).forEach(button =>{
        if(button.dataset.correct === "true"){
            button.classList.add("correct");
            let span = document.createElement("i");
            span.innerHTML = "\u2713";
            button.appendChild(span);
        }
        else{
            let span = document.createElement("span");
            span.innerHTML = "\u00d7";
            button.appendChild(span);
        }
        button.disabled = true;
    });
    nextBtn.style.display = "block";
}

function showScore(){
    rstState();
    const per = ((score/questions.length)*100);
    if(per >= 70){
        questionElem.innerHTML = "Congratulations!";
        questionElem.style.fontSize = "20px";
    }
    else if(per >= 50){
        questionElem.innerHTML = "Good!";
        questionElem.style.fontSize = "20px";
    }
    else{
        questionElem.innerHTML = "Opps! Better luck next time";
        questionElem.style.fontSize = "20px"
    }
    ansBtn.style.padding = "10px";
    ansBtn.style.fontSize = "18px";
    ansBtn.innerHTML =`You answered ${score}/${questions.length} correctly and scored ${per}%`;
    nextBtn.innerHTML = "Try Again";
    nextBtn.style.display = "block";
    homeBtn.style.display = "block";
}

function handleNextButton(){
    currQueIndex++;
    if(currQueIndex < questions.length){
        showQuestion();
    }else{
        showScore();
    }
}

nextBtn.addEventListener("click", () =>{
    if(currQueIndex < questions.length){
        handleNextButton();
    }else{
        startQuiz();
    }
});
