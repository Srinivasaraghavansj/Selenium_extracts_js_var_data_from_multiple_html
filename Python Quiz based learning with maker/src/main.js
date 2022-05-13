document.getElementById("question_text").innerHTML = question;

var right_images = {
    1: "assets/ra/1.png",
    2: "assets/ra/2.png",
    3: "assets/ra/3.png",
    4: "assets/ra/4.png",
    5: "assets/ra/5.png",
    6: "assets/ra/6.png",
}

var wrong_images = {
    1: "assets/wa/1.png",
    2: "assets/wa/2.png",
    3: "assets/wa/3.png",
    4: "assets/wa/4.png",
}

function hide_show() {
    var x = document.getElementById("question");
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}

var right_image = '<img src="' + right_images[Math.ceil(Math.random() * 6)] + '" class="responsive_imgg"><br>';
var right_answer_message_ = right_image + '<span class="answer_message">' + right_answer_message + "</span>";

var wrong_image = '<img src="' + wrong_images[Math.ceil(Math.random() * 4)] + '" class="responsive_imgg"><br>';
var wrong_answer_message_ = wrong_image + '<span class="answer_message">' + wrong_answer_message + "</span>";

function true_button_pressed() {
    hide_show();
    if (correct_answer) {
        const tour = new Shepherd.Tour({
            defaultStepOptions: {
                cancelIcon: {
                    enabled: true
                },
                classes: 'class-1 class-2',
                scrollTo: {
                    behavior: 'smooth',
                    block: 'center'
                },
            }
        });

        tour.addStep({
            title: 'Correct Answer!',
            arrow: true,
            text: right_answer_message_,
            attachTo: {
                on: 'left'
            },
            buttons: [{
                action() {
                    return this.next();
                },
                text: 'Ok'
            }],
            id: 'creating'
        });
        tour.start();
        startConfetti();
    } else {
        stopConfetti();
        const tour = new Shepherd.Tour({
            defaultStepOptions: {
                cancelIcon: {
                    enabled: true
                },
                classes: 'class-1 class-2',
                scrollTo: {
                    behavior: 'smooth',
                    block: 'center'
                }
            }
        });

        tour.addStep({
            title: 'Wrong Answer!',
            arrow: true,
            text: wrong_answer_message_,
            attachTo: {
                on: 'left'
            },
            buttons: [{
                action() {
                    return this.next();
                },
                text: 'Try again'
            }],
            id: 'creating'
        });
        tour.start();
    }
    setTimeout(() => { hide_show(); }, 5000);

}

function false_button_pressed() {
    hide_show();
    if (!correct_answer) {
        stopConfetti();
        const tour = new Shepherd.Tour({
            defaultStepOptions: {
                cancelIcon: {
                    enabled: true
                },
                classes: 'class-1 class-2',
                scrollTo: {
                    behavior: 'smooth',
                    block: 'center'
                }
            }
        });

        tour.addStep({
            title: 'Correct Answer!',
            arrow: true,
            text: right_answer_message_,
            attachTo: {
                on: 'left'
            },
            buttons: [{
                action() {
                    return this.next();
                },
                text: 'Ok'
            }],
            id: 'creating'
        });
        tour.start();
        startConfetti();


    } else {
        const tour = new Shepherd.Tour({
            defaultStepOptions: {
                cancelIcon: {
                    enabled: true
                },
                classes: 'class-1 class-2',
                scrollTo: {
                    behavior: 'smooth',
                    block: 'center'
                }
            }
        });

        tour.addStep({
            title: 'Wrong Answer!',
            arrow: true,
            text: wrong_answer_message_,
            attachTo: {
                on: 'left'
            },
            buttons: [{
                action() {
                    return this.next();
                },
                text: 'Try again'
            }],
            id: 'creating'
        });
        tour.start();
    }
    setTimeout(() => { hide_show(); }, 5000);
}