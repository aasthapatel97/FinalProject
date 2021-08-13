let fc = firebase.database().ref('deck/flashcards');
let jsonString;
fc.get().then((snapshot) => {
    if (snapshot.exists()) {        
        let queryData = snapshot.val();
    
        displaySummary(queryData);
    } else {
      console.log("No data available");
    }
}).catch((error) => {
    console.error(error);
});

function displaySummary(questions) {
    var html = '';
    for(var i = 0; i < questions.length; i++)
    {
        let item = questions[i];
        let res = item.response;

        var count = 0;
        for (const key in res){
            if(res.hasOwnProperty(key)){
                if( res[key] == item.correct)
                    count++;
            }
        }
        
        
        html += '<tr>';
        html += '<td>' + (i + 1) + '</td>';
        html += '<td>' + item.question + '</td>';
        html += '<td>' + count + '</td>';
        html += '</tr>';
    }

    document.getElementById("result").innerHTML = html;
}