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
    
        displayQuestion(queryData, 1);
    } else {
      console.log("No data available");
    }
}).catch((error) => {
    console.error(error);
});

