function run_code() {
    document.getElementById('if').contentWindow.document.getElementById('question_text').innerHTML = document.getElementById('q').value;
    if (document.getElementById('tf').value === "0")
        document.getElementById('if').contentWindow.correct_answer = true;
    else
        document.getElementById('if').contentWindow.correct_answer = false;
    document.getElementById('if').contentWindow.right_answer_message = document.getElementById('r_a').value;
    document.getElementById('if').contentWindow.wrong_answer_message = document.getElementById('w_a').value;

    document.getElementById('if').contentWindow.right_answer_message_ = document.getElementById('if').contentWindow.right_image + '<span class="answer_message">' + document.getElementById('if').contentWindow.right_answer_message + "</span>"
    document.getElementById('if').contentWindow.wrong_answer_message_ = document.getElementById('if').contentWindow.wrong_image + '<span class="answer_message">' + document.getElementById('if').contentWindow.wrong_answer_message + "</span>";

    document.getElementById('if').contentWindow.document.getElementById('truebtn').innerHTML = document.getElementById('lbt').value;
    document.getElementById('if').contentWindow.document.getElementById('falsebtn').innerHTML = document.getElementById('rbt').value;
}

function download_code() {
    var ca = true;
    if (document.getElementById('tf').value === "0") ca = true;
    else ca = false;

    var textToSave = `<!DOCTYPE html>
<html lang="en">

<head>
<meta charset="UTF-8">
<meta http-equiv="X-UA-Compatible" content="IE=edge">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title></title>
<script src="src/shepherd.min.js">
</script>
<link rel="stylesheet" href="src/shepherd.css">
<link rel="stylesheet" href="src/style.css">
<script src="src/confetti.js"></script>
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css">
<script src="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/js/materialize.min.js"></script>
</head>

<body>
<div class="container">
    <div id='question' class="center">
        <div id="question_text"></div>
        <div class="row">
        <button title="Option 1" id="truebtn" class="btn_white btn-large grey-text text-darken-4 waves-effect waves-dark blue-grey lighten-4" onclick="true_button_pressed();">TRUE</button>
        <button title="Option 2" id="falsebtn" class="btn_white btn-large grey-text text-darken-4 waves-effect waves-dark blue-grey lighten-4" onclick="false_button_pressed();">FALSE</button>
     </div>
    </div>
</div>
<script>
    var correct_answer = ` + ca + `;
    var question = \`` + document.getElementById('q').value + `\`;
    var right_answer_message = \`` + document.getElementById('r_a').value + `\`;
    var wrong_answer_message = \`` + document.getElementById('w_a').value + `\`;
    var button_1_text = \`` + document.getElementById('lbt').value + `\`;
    var button_2_text = \`` + document.getElementById('rbt').value + `\`;
    document.getElementById("truebtn").innerHTML = button_1_text;
    document.getElementById("falsebtn").innerHTML = button_2_text;
</script>
</body>
<script src="src/random_background.js"></script>
<script src="src/main.js"></script>

</html>`;
    var hiddenElement = document.createElement('a');
    hiddenElement.href = 'data:attachment/text,' + encodeURI(textToSave);
    hiddenElement.target = '_blank';
    hiddenElement.download = document.getElementById('df').value + '.html';
    hiddenElement.click();
}