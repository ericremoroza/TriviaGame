$("#startGame").on("click", function () {
    game.start(); //executes function listed below
});

$(document).on("click", "#submit-game", function() {
    game.over();
});

var questions = [{
    question: "Who was the first actor cast in Iron Man?",
    answers: ["Robert Downey Jr.", "Terrence Howard", "Jon Favreau", "Jeff Bridges"],
    correct: "Terrence Howard"
}, {
    question: "Where was Black Panther filmed?",
    answers: ["Atlanta, GA", "Lagos, Nigeria", "Oakland, CA", "Berlin, Germany"],
    correct: "Atlanta, GA"
}, {
    question: "Who has produced every film in the Marvel Cinematic Universe?",
    answers: ["Avi Arad", "Stan Lee", "Kevin Feige", "Joss Whedon"],
    correct: "Kevin Feige"
}, {
    question: "Which scene was unscripted?",
    answers: ['"Why is Gamora?" (Avengers: Infinity War)',
        '"I am Iron Man" (Iron Man)',
        "Peggy touching post-serum Steve (Captain America: The First Avenger)",
        "All of the Above"],
    correct: "All of the Above"
}, {
    question: "In Captain America: The Winter Soldier, who was the Smithsonian narrator?",
    answers: ["Gary Sinise", "Chris Evans", "Robert Redford", "Samuel L. Jackson"],
    correct: "Gary Sinise"
}, {
    question: "Who replaced Edward Norton as Bruce Banner/The Hulk?",
    answers: ["Zachary Levi", "John Slattery", "Mark Ruffalo", "Josh Brolin"],
    correct: "Mark Ruffalo"
}, {
    question: "Which MCU actor shares the same name as his/her character?",
    answers: ["Benedict Wong", "Georges St-Pierre", "Abraham Attah", "All of the Above"],
    correct: "All of the Above"
}, {
    question: "Who did Peyton Reed replace as director of Ant-Man?",
    answers: ["The Russo Brothers", "Joss Whedon", "Edgar Wright", "Jon Favreau"],
    correct: "Edgar Wright"
}];

var game = {
    right: 0,
    wrong: 0,
    counter: 90,
    countDown: function () {
        game.counter--;
        $("#counter").html(game.counter);
        if (game.counter <= 0) {
            console.log("TIME IS UP!");
            game.over();
        }
    },
    start: function () {
        clock = setInterval(game.countDown, 1000);
        $("#wrapGame").prepend("<h2>Time Remaining: <span id='counter'>90</span> Seconds </h2>")
        $("#startGame").remove(); // removes start button
        for (var i = 0; i < questions.length; i++) {
            $("#wrapGame").append('<h2>' + questions[i].question + '</h2>');
            for (var j = 0; j < questions[i].answers.length; j++) {
                $("#wrapGame").append("<input type='radio' name='question-" + i + "' value='" + questions[i].answers[j] + "'>" + questions[i].answers[j]);
            };
        }
        $("#wrapGame").append("<br><button id='submit-game'>Submit!</button>");
    },

    over: function () {
        $.each($("input[name='question-0']:checked"), function() {
            if($(this).val()==questions[0].correct) {
                game.right++;
            } else {
                game.wrong++;
            }
        });

        $.each($("input[name='question-1']:checked"), function() {
            if($(this).val()==questions[1].correct) {
                game.right++;
            } else {
                game.wrong++;
            }
        });

        $.each($("input[name='question-2']:checked"), function() {
            if($(this).val()==questions[2].correct) {
                game.right++;
            } else {
                game.wrong++;
            }
        });

        $.each($("input[name='question-3']:checked"), function() {
            if($(this).val()==questions[3].correct) {
                game.right++;
            } else {
                game.wrong++;
            }
        });

        $.each($("input[name='question-4']:checked"), function() {
            if($(this).val()==questions[4].correct) {
                game.right++;
            } else {
                game.wrong++;
            }
        });

        $.each($("input[name='question-5']:checked"), function() {
            if($(this).val()==questions[5].correct) {
                game.right++;
            } else {
                game.wrong++;
            }
        });

        $.each($("input[name='question-6']:checked"), function() {
            if($(this).val()==questions[6].correct) {
                game.right++;
            } else {
                game.wrong++;
            }
        });

        $.each($("input[name='question-7']:checked"), function() {
            if($(this).val()==questions[7].correct) {
                game.right++;
            } else {
                game.wrong++;
            }
        });
        this.result();
    },

    result: function() {
        clearInterval(clock);
        $("#wrapGame h2").remove();

        $("#wrapGame").html("<h2 id='gameOver'>Game Over!</h2>");

        $("#wrapGame").append("<h3>Answered Right: "+this.right+"</h3>");
        $("#wrapGame").append("<h3>Answered Wrong: "+this.wrong+"</h3>");
        $("#wrapGame").append("<h3>Unanswered: "+(questions.length -(this.wrong+this.right))+"</h3>");
    }
}