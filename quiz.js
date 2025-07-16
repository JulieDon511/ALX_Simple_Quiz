function checkAnswer() {
    // Function body
    let correctAnswer ="4";
    const selectedInput = document.querySelector(".quiz :checked");
    const userAnswer= selectedInput.value ;
    const feedback = document.getElementById("feedback");
    if (userAnswer === correctAnswer){
        feedback.textContent ="correct! well done.";
    }else{
        feedback.textContent="That's incorrect. Try again!";
    }

}