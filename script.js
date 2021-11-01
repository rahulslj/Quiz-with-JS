const quizDB = [
    {
        Question: "Q1 : What is the full form of HTML?"
        a: "Hello To My Language",
        b: "Hey Text Markup Language",
        c: "HyperText Markup Language",
        d: "Hypertext Markup Language",
        ans: "ans4"
    },
    {
        Question: "Q2 : What is the full form of CSS?"
        a: "Cascading Style Sheets",
        b: "Cascading Style Sheep",
        c: "Cascading Sheets Style",
        d: "Cascading Super Sheets",
        ans: "ans1"
    },
    {
        Question: "Q3 : What is the full form of HTTP?"
        a: "HyperText Transmision Protocal",
        b: "HyperText Test Protocol",
        c: "HyperText Transfer Protocol",
        d: "Hello Transfer Protocol",
        ans: "ans3"
    },
    {
        Question: "Q4 : What is the full form of JS?"
        a: "JavasScript",
        b: "JavaScript",
        c: "JustScript",
        d: "JavaStyle",
        ans: "ans2"
    }
];

const question = document.querySelector('.question');
const option1 = document.querySelector('#option1');
const option2 = document.querySelector('#option2');
const option3 = document.querySelector('#option3');
const option4 = document.querySelector('#option4');

const submit = document.querySelector('#submit');

let questionCount = 0;

const loadQuestion = () =>{
    const questionList = quizDB[questionCount];

    question.innerText = questionList.question;
    option1.innerText = questionList.a;
    option2.innerText = questionList.b;
    option3.innerText = questionList.c;
    option4.innerText = questionList.d;
}

loadQuestion();
