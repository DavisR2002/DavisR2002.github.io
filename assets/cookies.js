document.cookie = "cookieKey=cookieValue; Path=/; SameSite=None; Secure; domain: .app.localhost; Expires=Sun, 24 Apr 2022 09:39:48 GMT; ";

function showCookies() {
    const output = document.getElementById("cookies");
    allCookies = document.cookie;
    output.textContent = ">" + allCookies;
}

function clearOutputCookies() {
    const output = document.getElementById("cookies");
    output.textContent = "";
}

const acceptBtn = document.getElementById('accept')

acceptBtn.addEventListener('click', () => {

    document.getElementById("cookieCard").className = "cookies-card hidden";

})

const denyBtn = document.getElementById('deny')

denyBtn.addEventListener('click', () => {

    document.getElementById("cookieCard").className = "cookies-card hidden";

})