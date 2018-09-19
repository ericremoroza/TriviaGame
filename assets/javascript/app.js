$(document).ready(function () {
    //function for main screen and start button
    function mainScreen() {
        startMenu = "<p class='text-center main-button-container'><a id='startGame' role='button'>Start Game</a></p>";
        $("#startGame").html(startMenu);
    }

    mainScreen();

    $("body").on("click", "#startGame", function (event) {
        event.preventDefault();

        generateHTML();

        timerWrapper();

    }); // Closes start-button click



    function addWin() {
        if (options === answers) {
            correct++;
            $("#quiz").html(gameHTML);
        }


    }

    function addLoss() {
        if (options != answers) {
            incorrect++;
            $("#quiz").html(gameHTML);
        }
    }

    function generateHTML() {
        gameHTML = "<p class='text-center timer-p'>Time Remaining: <span class='timer'></span></p><p class='text-center'>" + questions[questionCounter] + "</p><button class='first-answer answer'>A. " + choices[questionCounter][0] + "</button><button class='answer'>B. " + choices[questionCounter][1] + "</button><button class='answer'>C. " + choices[questionCounter][2] + "</button><button class='answer'>D. " + choices[questionCounter][3] + "</button>";
        $("#quiz").html(gameHTML);
        currentQA;
    }

    function timerWrapper() {
        theClock = setInterval(thirtySeconds, 1000);
        function thirtySeconds() {
            if (timer === 0) {
                clearInterval(theClock);
                addLossDueToTimeOut();
            }
            if (timer > 0) {
                timer--;
            }
            $(".timer").html(timer);
        }

    }

    function addLossDueToTimeOut() {
        unanswered++;
        gameHTML = "<p>Out of time! The correct answer is: " + answers[questionCounter] + "</p>"; 
        $("#quiz").html(gameHTML);

    }

});
var startMenu;
var theClock;
var gameHTML;
var correct = 0;
var incorrect = 0;
var unanswered = 0;
var currentQA = 0;
var questionCounter = 0;
var timer = 15;
var timerOn = false;
var timerId = "";

var questions = [
    "Who was the first actor cast in Iron Man?",
    "Where was Black Panther filmed?",
    "Who has produced every film in the Marvel Cinematic Universe?",
    "Which scene was unscripted?",
    "In Captain America: The Winter Soldier, who was the Smithsonian narrator?",
    "Who replaced Edward Norton as Bruce Banner/The Hulk?",
    "Which MCU actor shares the same name as his/her character?",
    "Who did Peyton Reed replace as director of Ant-Man?"
];
var choices = [
    ["Robert Downey Jr.", "Terrence Howard", "Jon Favreau", "Jeff Bridges"],
    ["Atlanta, GA", "Lagos, Nigeria", "Oakland, CA", "Berlin, Germany"],
    ["Avi Arad", "Stan Lee", "Kevin Feige", "Joss Whedon"],
    ['"Why is Gamora?" (Avengers: Infinity War)',
        '"I am Iron Man" (Iron Man)',
        "Peggy touching post-serum Steve (Captain America: The First Avenger)",
        "All of the Above"],
    ["Gary Sinise", "Chris Evans", "Robert Redford", "Samuel L. Jackson"],
    ["Zachary Levi", "John Slattery", "Mark Ruffalo", "Josh Brolin"],
    ["Benedict Wong", "Georges St-Pierre", "Abraham Attah", "All of the Above"],
    ["The Russo Brothers", "Joss Whedon", "Edgar Wright", "Jon Favreau"]
];
var answers = ["Terrence Howard",
    "Atlanta, GA",
    "Kevin Feige",
    "All of the Above",
    "Gary Sinise",
    "Mark Ruffalo",
    "All of the Above",
    "Edgar Wright"
];