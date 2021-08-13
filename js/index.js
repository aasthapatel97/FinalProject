let myFlashcards = [ 
    {
        "question": "Q. How many total syllables are there in a Haiku?",
        "hint": "If the syllable pattern is A-B-C, total syllables = A+B+C [Haiku's syllable pattern is 5-7-5]",    
        "skills": ["Literary interpretation", 'Close reading of literature'],
        "image" : "images/barn-owl-2550068__340.webp",
        "type": 0,
        "answer": [
            "25",
            "17",
            "10"
        ],
        "correct": 0,
        "response": {
            "Jack": 1,
            "Bill": 0
        }
    },
    {
        "question": "Q. Which line(s) have 7 syllables? ",
        "hint": "Celebration (Ce-le-bra-tion) has 4 syllables",    
        "skills": ["Syllable counting", 'Recognition of the conventions of traditional Japanese haiku'],
        "image" : "images/barn-owl-2550068__340.webp",
        "type": 0,
        "answer": [
            "My bunny is named June",
            "What is your favorite color",
            "I love giraffes and rabbits"
        ],
        "correct": 2,
        "response": {
            "Jack": 1,
            "Bill": 0
        }
    },
    {
        "question": "Q. Complete the Haiku: [1] An ocean voyage [2] As waves break over the bow",
        "hint": "Count the number syllables",    
        "skills": ["Creative Writing", 'Writing concretely and vividly'],
        "image" : "images/barn-owl-2550068__340.webp",
        "type": 0,
        "answer": [
            "the sea welcomes me.",
            "I'm free to ride the waves",
            "My boat suddenly, sinks."
        ],
        "correct": 0,
        "response": {
            "Jack": 1,
            "Bill": 0
        }
    },
    {
        "question": "Q. How many total syllables are there in a Haiku?",
        "hint": "If the syllable pattern is A-B-C, total syllables = A+B+C [Haiku's syllable pattern is 5-7-5]",    
        "skills": ["Literary interpretation", 'Close reading of literature'],
        "image" : "images/barn-owl-2550068__340.webp",
        "type": 0,
        "answer": [
            "25",
            "17",
            "10"
        ],
        "correct": 0,
        "response": {
            "Jack": 1,
            "Bill": 0
        }
    },
    {
        "question": "Q. Which line(s) have 7 syllables? ",
        "hint": "Celebration (Ce-le-bra-tion) has 4 syllables",    
        "skills": ["Syllable counting", 'Recognition of the conventions of traditional Japanese haiku'],
        "image" : "images/barn-owl-2550068__340.webp",
        "type": 0,
        "answer": [
            "My bunny is named June",
            "What is your favorite color",
            "I love giraffes and rabbits"
        ],
        "correct": 2,
        "response": {
            "Jack": 1,
            "Bill": 0
        }
    },
    {
        "question": "Q. Complete the Haiku: [1] An ocean voyage [2] As waves break over the bow",
        "hint": "Count the number syllables",    
        "skills": ["Creative Writing", 'Writing concretely and vividly'],
        "image" : "images/barn-owl-2550068__340.webp",
        "type": 0,
        "answer": [
            "the sea welcomes me.",
            "I'm free to ride the waves",
            "My boat suddenly, sinks."
        ],
        "correct": 0,
        "response": {
            "Jack": 1,
            "Bill": 0
        }
    },
    {
        "question": "Write a haiku",
        "hint": "Unleash your creativity",    
        "skills": ["Creative Writing", 'Writing concretely and vividly'],
        "image" : "images/barn-owl-2550068__340.webp",
        "type": 1,
        "answer": "HAIKU",
        "correct": "HAIKU",
        "response": {
            "Jack": "River1",
            "Bill": "River2"
        }
    }
];

// Create questions
firebase.database().ref('deck/flashcards').set(myFlashcards);
