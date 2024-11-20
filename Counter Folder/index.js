//Method 1
const increaseBtn = document.getElementById("increaseBtn");
const decreaseBtn = document.getElementById("decreaseBtn");
const resetBtn = document.getElementById("resetBtn");
const countLabel = document.getElementById("countLabel");
const speakBtn = document.getElementById("speakBtn");
let count = 0;

increaseBtn.onclick = function(){
    count++;
    document.getElementById("countLabel").textContent = count;
    count.value
    const utterance = new SpeechSynthesisUtterance(count);
    window.speechSynthesis.speak(utterance);
}
decreaseBtn.onclick = function(){
    count--;
    document.getElementById("countLabel").textContent = count;
    count.value
    const utterance = new SpeechSynthesisUtterance(count);
    window.speechSynthesis.speak(utterance);
}
resetBtn.onclick = function(){
    count = 0;
    document.getElementById("countLabel").textContent = count;
    count.value
    const utterance = new SpeechSynthesisUtterance(count);
    window.speechSynthesis.speak(utterance);
}

// speakBtn.onclick = function() {
//     const text = document.getElementById("countLabel").value;
//     const utterance = new SpeechSynthesisUtterance(text);
//     window.speechSynthesis.speak(utterance);
    
//     count++;
//     document.getElementById("countLabel").textContent = count;
// }









//Method 2

// document.getElementById("increaseBtn").onclick = function(){
//     count++;
//     document.getElementById("countLabel").textContent = count;
// }
// document.getElementById("decreaseBtn").onclick = function(){
//     count--;
//     document.getElementById("countLabel").textContent = count;
// }
// document.getElementById("resetBtn").onclick = function(){
//     count = 0;
//     document.getElementById("countLabel").textContent = count;
// }