const roll = document.getElementById("roll");

roll.onclick = function() {
    const utterance = new SpeechSynthesisUtterance('roll');
    window.speechSynthesis.speak(utterance);

    const x = Math.floor((Math.random() * 6) + 1);
    const y = Math.floor((Math.random() * 6) + 1);
    const z = Math.floor((Math.random() * 6) + 1);

    document.getElementById("r1").textContent = x;
    document.getElementById("r2").textContent = y;
    document.getElementById("r3").textContent = z;
}
