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
    let sound = soundMap[dets.code];
    if (sound) {
        new Audio(sound).play();
        console.log("Playing:", sound);
    }
});


pianoKey.forEach(item  => {
    item.addEventListener('click', () => {
        btn.innerHTML = item.dataset.key;
        let sound = soundMap[item.dataset.key]
        if(sound){
            new Audio(sound).play()
        }
    })
})

innerKey.forEach(item => {
    item.addEventListener('click', () => {
        btn.innerHTML = item.dataset.key;
        let sound = soundMap[item.dataset.key];
        
        if(sound) {
            new Audio(sound).play()
        }
    })
})








let aud1 = new Audio('28.mp3')
let aud2 = new Audio('29.mp3')
let aud3 = new Audio('30.mp3')
let aud4 = new Audio('31.mp3')
let aud5 = new Audio('32.mp3')
let aud6 = new Audio('33.mp3')
let aud7 = new Audio('34.mp3')
let aud8 = new Audio('35.mp3')
let aud9 = new Audio('36.mp3')
let aud10 = new Audio('37.mp3')
let aud11 = new Audio('38.mp3')
let aud12 = new Audio('39.mp3')
let aud13 = new Audio('40.mp3')
let aud14 = new Audio('41.mp3')
let aud15 = new Audio('42.mp3')
let aud16 = new Audio('43.mp3')
let aud17 = new Audio('44.mp3')
let aud18 = new Audio('45.mp3')
let aud19 = new Audio('46.mp3')
let aud20 = new Audio('47.mp3')
let aud21 = new Audio('48.mp3')
let aud22 = new Audio('49.mp3')
let aud23 = new Audio('50.mp3')
let aud24 = new Audio('51.mp3')
let aud25 = new Audio('52.mp3')
let aud26 = new Audio('28.mp3')
let aud27 = new Audio('29.mp3')


// pianoKey.forEach (item => {
//     item.addEventListener('keydown', (dets)=> {
//         console.log(dets)
//     })
// })