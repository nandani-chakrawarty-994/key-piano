let pianoKey = document.querySelectorAll('.pianoKey')
let innerKey = document.querySelectorAll('.innerKey')
let btn = document.querySelector('.keyBtn')

let soundMap = {
    "KeyA": "28.mp3",
    "KeyB": "29.mp3",
    "KeyC": "30.mp3",
    "KeyD": "31.mp3",
    "KeyE": "32.mp3",
    "KeyF": "33.mp3",
    "KeyG": "34.mp3",
    "KeyH": "35.mp3",
    "KeyI": "36.mp3",

    "KeyJ": "37.mp3",
    "KeyK": "38.mp3",
    "KeyL": "39.mp3",
    "KeyM": "40.mp3",
    "KeyN": "41.mp3",
    "KeyO": "42.mp3",
    "KeyP": "43.mp3",

    "KeyQ": "44.mp3",
    "KeyR": "45.mp3",
    "Digit1": "46.mp3",
    "Digit2": "47.mp3",
    "Digit3": "48.mp3",
    "Digit4": "49.mp3",
    "Digit5": "50.mp3",
    "Digit6": "51.mp3",
    "Digit7": "52.mp3",
    "Digit8": "28.mp3",
    "Digit9": "29.mp3"
};


document.addEventListener("keydown", (dets) => {
    btn.innerHTML = dets.code;

    // animation find
    let activeKey = document.querySelector(`[data-key="${dets.code}"]`);
    if (activeKey) {
        activeKey.classList.add("active");
        setTimeout(() => activeKey.classList.remove("active"), 150);
    }
    let sound = soundMap[dets.code];


    if (sound) {
        new Audio(sound).play();
        
    }
});


pianoKey.forEach(item  => {
    item.addEventListener('click', () => {
        btn.innerHTML = item.dataset.key;
         // animation
        item.classList.add("active");
        setTimeout(() => item.classList.remove("active"), 150);

        let sound = soundMap[item.dataset.key]
        if(sound){
            new Audio(sound).play()
        }
    })
})

innerKey.forEach(item => {
    item.addEventListener('click', () => {
        btn.innerHTML = item.dataset.key;
         // animation
        item.classList.add("active");
        setTimeout(() => item.classList.remove("active"), 150);
        let sound = soundMap[item.dataset.key];
        if(sound) {
            new Audio(sound).play()
        }
    })
})







// pianoKey.forEach (item => {
//     item.addEventListener('keydown', (dets)=> {
//         console.log(dets)
//     })
// })