document.cookie = "cookieKey";

const acceptBtn = document.getElementById('accept')

acceptBtn.addEventListener('click', () => {

    document.getElementById("cookieCard").className = "cookies-card hidden";

})
