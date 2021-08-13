// Create/Update to database
// firebase.database().ref('deck/flashcards').set(myFlashcards);

// Remove myFlashcards from the database
// firebase.database().ref('deck/flashcards').remove();

// Read database
let fc = firebase.database().ref('deck/flashcards');
let jsonString;
fc.get().then((snapshot) => {
    if (snapshot.exists()) {        
        let queryData = snapshot.val();
    
        displayQuestion(queryData, 3);
        displayQuestion(queryData, 4);
        displayQuestion(queryData, 5);
        displayQuestion(queryData, 6);
    } else {
      console.log("No data available");
    }
}).catch((error) => {
    console.error(error);
});
