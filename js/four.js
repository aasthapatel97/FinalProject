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
    } else {
      console.log("No data available");
    }
}).catch((error) => {
    console.error(error);
});

fc.get().then((snapshot) => {
    if (snapshot.exists()) {        
        let queryData = snapshot.val();
    
        displayQuestion(queryData, 4);
    } else {
      console.log("No data available");
    }
}).catch((error) => {
    console.error(error);
});


fc.get().then((snapshot) => {
    if (snapshot.exists()) {        
        let queryData = snapshot.val();
    
        displayQuestion(queryData, 5);
    } else {
      console.log("No data available");
    }
}).catch((error) => {
    console.error(error);
});

fc.get().then((snapshot) => {
    if (snapshot.exists()) {        
        let queryData = snapshot.val();
    
        displayQuestion(queryData, 6);
    } else {
      console.log("No data available");
    }
}).catch((error) => {
    console.error(error);
});
