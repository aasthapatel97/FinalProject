let myFlashcards = [ 
    {
        "question": "Name this species of bird.",
        "hint": "h1",    
        "skills": ["C#", 'Javascript'],
        "image" : "images/barn-owl-2550068__340.webp",
        "type": 0,
        "answer": [
            "Barn Owl",
            "Dove",
            "Hummingbird"
        ],
        "correct": 0,
        "response": {
            "Jack": 1,
            "Bill": 0
        }
    },
    {
        "question": "Name this species of river.",
        "hint": "h2",    
        "skills": ["NodeJS", 'Python'],
        "image" : "images/barn-owl-2550068__340.webp",
        "type": 0,
        "answer": [
            "Nile",
            "Amazon",
            "Yangtze"
        ],
        "correct": 0,
        "response": {
            "Jack": 1,
            "Bill": 0
        }
    },
    {
        "question": "Name this species of mountain.",
        "hint": "h3",    
        "skills": ["React", 'Python'],
        "image" : "images/barn-owl-2550068__340.webp",
        "type": 0,
        "answer": [
            "Lhotse",
            "Makalu",
            "Manaslu"
        ],
        "correct": 0,
        "response": {
            "Jack": 1,
            "Bill": 0
        }
    },
    {
        "question": "What is the longest river.",
        "hint": "h4",    
        "skills": ["React", 'Angular'],
        "image" : "images/barn-owl-2550068__340.webp",
        "type": 1,
        "answer": "Nile",
        "correct": "Nile",
        "response": {
            "Jack": "River1",
            "Bill": "River2"
        }
    }
];

// Create questions
firebase.database().ref('deck/flashcards').set(myFlashcards);
