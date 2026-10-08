const changeNmBtn = document.getElementById('changeName');
const sName = document.getElementById('studentName');
const backgroundBtn = document.getElementById('changeBackground');
const profile = document.getElementById('profile');
const toggleDetailsBtn = document.getElementById('toggleDetails');
const info = document.getElementById('details');
let isBackgroundChanged = false;
let isNameChanged = false;

changeNmBtn.addEventListener("click", function () {
    if (isNameChanged === false) {
        sName.textContent = "Maria Santos";
        isNameChanged = true;
    } else {
        sName.textContent = "Juan Dela Cruz";
        isNameChanged = false;
    }
});

backgroundBtn.addEventListener("click", function () {
    if (isBackgroundChanged === false) {
        profile.style.backgroundColor = "#abece1e1";
        isBackgroundChanged = true;
    } else {
        profile.style.backgroundColor = "";
        isBackgroundChanged = false;
    }
});

toggleDetailsBtn.addEventListener("click", function () {
    info.classList.toggle("hidden");

    if (info.classList.contains("hidden")) {
        toggleDetailsBtn.textContent = "Show Details";
    } else {
        toggleDetailsBtn.textContent = "Hide Details";
    }
});