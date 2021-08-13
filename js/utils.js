let question = {};
let selected = -1;
function displayQuestion(queryData, num) {
    question = queryData[num];
    console.log(question);
    selected = num;

    document.getElementById("title").innerHTML = "<b>" + question["question"]  + "</b>";
    if( question.type == 0 ) // Muliple choice
    {
        let answer = question['answer'];
        var html = '';
        for(var i = 0; i < answer.length; i++) {
            html += '<input name="answer" type="radio" id="answer' + i + '" value="' + i + '" onclick="handleClick(this)"></input>'
            html += '<label for="answer' + i + '">' + answer[i] + '</label><br>';
        }
        document.getElementById("answer").innerHTML = html;
    }
    else
    {

    }
    document.getElementById("hint").innerHTML = question['hint'];

    var skills = question['skills'];
    var html = '';
    for(var i = 0; i < skills.length; i++)
    {
        html += '<li>' + skills[i] + '</li>';   
    }
    document.getElementById("skill").innerHTML = html;
}

function handleClick(myRadio) {
    console.log(myRadio.value);
    let val = parseInt(myRadio.value);
    firebase.database().ref('deck/flashcards/' + selected + '/response/Aastha').set(parseInt(val));   
    
    document.getElementById("feedback").innerHTML = val == question.correct ? 'Answer is correct' : 'Answer is wrong';
}

function submitTextAnswer() {
    let val = document.getElementById("text_answer").value;
    firebase.database().ref('deck/flashcards/' + selected + '/response/Aastha').set(val);   

    document.getElementById("feedback").innerHTML = val == question.correct ? 'Answer is correct' : 'Answer is wrong';
}