const instagram = document.querySelector(".instagram");

function setLocation() {
    instagram.addEventListener("click", () => {
        window.open("https://naver.com");
    });
}

function init() {
    setLocation();
}

window.onload = init;