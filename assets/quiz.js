const quizData = [
    {
        question: "What does the I in the CIA Triad stand for?",
        a: "Integrity",
        b: "Intelligence",
        c: "Integrated",
        d: "Important",
        correct: "a",
    },
    {
        question: "Accountability is:",
        a: "Knowing the responsibilities of a person or process.",
        b: "The process of determining who or what something is.",
        c: "The process of determining whether someone is allowed to gain access to something.",
        d: "The process of managing money for a person or organization.",
        correct: "a",
    },
    {
        question: " Security systems can be evaluated to discover potential risks before they become realized. These evaluations are called:",
        a: "Risk Checks",
        b: "Risk Assessments",
        c: "Risk Aggregates",
        d: "Risk Searches",
        correct: "b",
    },
    {
        question: "An Asset is:",
        a: "Something put in place to protect against digital threats.",
        b: "The location where important information is stored.",
        c: "Anything that is of value to a person or organisation.",
        d: "A flaw in the security system of an organization.",
        correct: "c",
    },
    {
        question: "An example of a Physical Control is: ",
        a: "Staff Training",
        b: "Clear desk policy",
        c: "Antivirus software",
        d: "On-site security",
        correct: "d",
    },
    {
        question: "An example of a Technical Control is: ",
        a: "Biometric Scanning",
        b: "Security Teams",
        c: "Cybersecurity Policies",
        d: "None of the above",
        correct: "d",
    },
    {
        question: "Preventative Controls: ",
        a: "Stop incidents from occuring",
        b: "Minimize the impact from a cyber-attack",
        c: "Recognize attacks as they are in progress",
        d: "None of the above",
        correct: "a",
    },
];
const quiz = document.getElementById('quiz')
const answerEls = document.querySelectorAll('.answer')
const questionEl = document.getElementById('question')
const a_text = document.getElementById('a_text')
const b_text = document.getElementById('b_text')
const c_text = document.getElementById('c_text')
const d_text = document.getElementById('d_text')
const submitBtn = document.getElementById('submit')
let currentQuiz = 0
let score = 0
loadQuiz()
function loadQuiz() {
    deselectAnswers()
    const currentQuizData = quizData[currentQuiz]
    questionEl.innerText = currentQuizData.question
    a_text.innerText = currentQuizData.a
    b_text.innerText = currentQuizData.b
    c_text.innerText = currentQuizData.c
    d_text.innerText = currentQuizData.d
}
function deselectAnswers() {
    answerEls.forEach(answerEl => answerEl.checked = false)
}
function getSelected() {
    let answer
    answerEls.forEach(answerEl => {
        if (answerEl.checked) {
            answer = answerEl.id
        }
    })
    return answer
}

function setCookie(cname, cvalue, exdays) {
    const d = new Date();
    d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
    let expires = "expires=" + d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function getScore() {
    let name = "score" + "=";
    let decodedCookie = decodeURIComponent(document.cookie);
    let split = decodedCookie.split(';');
    for (let i = 0; i < split.length; i++) {
        let c = split[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}

let currentScore = "";

submitBtn.addEventListener('click', () => {
    const answer = getSelected()
    if (answer) {
        if (answer === quizData[currentQuiz].correct) {
            score++
        }
        currentQuiz++
        if (currentQuiz < quizData.length) {
            loadQuiz()
        } else {
            quiz.innerHTML = `
           <h2>You answered ${score}/${quizData.length} questions correctly</h2>
           <button style="color: white;" onclick="location.reload()">Reload</button>
           `
            currentScore = getScore();
            if (score > currentScore) {
                setCookie("score", score, 2);
            }
        }
    }
})