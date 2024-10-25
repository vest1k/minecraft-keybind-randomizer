document.addEventListener('DOMContentLoaded', function () {
    const originalKeybinds = {
        jump: "Space",
        sneak: "Left Shift",
        sprint: "Left Control",
        left: "A",
        right: "D",
        backward: "S",
        forward: "W",
        attackdestroy: "Left Button",
        pickblock: "Middle Button",
        useitem: "Right Button",
        drop: "Q",
        hotbar1: "1",
        hotbar2: "2",
        hotbar3: "3",
        hotbar4: "4",
        hotbar5: "5",
        hotbar6: "6",
        hotbar7: "7",
        hotbar8: "8",
        hotbar9: "9",
        opencloseinv: "E",
        swap: "F",
        loadhotbar: "X",
        savehotbar: "C",
        listplayers: "Tab",
        chat: "T",
        command: "-",
        social: "P",
        advancements: "L",
        highlight: "Not Bound",
        screenshot: "F2",
        cinematic: "Not Bound",
        fullscreen: "F11",
        perspective: "F5",
    };

    const keys = [
        "1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "+", "'", 
        "Backspace", "§", "Tab", "Q", "W", "E", "R", "T", "Y", "U", 
        "I", "O", "P", "\"", "Enter", "Caps Lock", "A", "S", "D", 
        "F", "G", "H", "J", "K", "L", "'", "Left Shift", "<", "Z", 
        "X", "C", "V", "B", "N", "M", ".", ",", "-", "Right Shift", 
        "Left Control", "Left Win", "Left Alt", "Space", "Alt Gr", 
        "Right Win", "Menu", "Right Control", "Up Arrow", "Down Arrow", 
        "Left Arrow", "Right Arrow", "Scroll Lock", "Insert", "Home", 
        "Page Up", "Page Down", "Delete", "End", "Num Lock", "F1", 
        "F2", "F3", "F4", "F5", "F6", "F7", "F8", "F9", "F10", "F11", 
        "F12"
    ];

    function randomizeKeybinds() {
      
        const randomizedKeys = [...keys];
        
        Object.keys(originalKeybinds).forEach(key => {
  
            const randomKeyIndex = Math.floor(Math.random() * randomizedKeys.length);
            const randomKey = randomizedKeys[randomKeyIndex];
            document.getElementById(key).innerText = randomKey;

        
            randomizedKeys.splice(randomKeyIndex, 1);
        });
    }

    function resetKeybinds() {
        Object.keys(originalKeybinds).forEach(key => {
            document.getElementById(key).innerText = originalKeybinds[key];
        });
    }

    function playRandomizeSound() {
        const sound = document.getElementById('randomize-sound');
        if (sound) {
            sound.play();
        }
    }

    function attachEventListeners() {
        document.getElementById('randomize-button').addEventListener('click', function () {
            randomizeKeybinds();
            playRandomizeSound();
        });

        document.getElementById('reset-button').addEventListener('click', function () {
            resetKeybinds();
            playRandomizeSound();
        });
    }

    attachEventListeners();
});
