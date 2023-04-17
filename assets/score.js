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
const scoreValue = getScore();

scoreText.innerText = `Current High Score: ${scoreValue}`;
