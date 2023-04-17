function setCookie(cname, cvalue, exdays) {
    const d = new Date();
    d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
    let expires = "expires=" + d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function getScore() {
    let name = "score" + "=";
    let decodedCookie = decodeURIComponent(document.cookie);
    let split = decodedCookie.split(';');
    for (let i = 0; i < split.length; i++) {
        let c = split[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}

const scoreText = document.getElementById('score')
const resetBtn = document.getElementById('reset')
let scoreValue = getScore();


scoreText.innerText = `Current High Score: ${scoreValue}`;

resetBtn.addEventListener('click', () => {
    setCookie("score", 0, 2)
    window.location.replace("moduleList.html");
})
