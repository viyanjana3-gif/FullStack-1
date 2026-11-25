document.getElementById("welcome").innerHTML = "Welcome!";

// Arrow function to update banner
const updateBanner = (message, color) => {
    let banner = document.getElementById("banner");
    banner.innerHTML = message;
    banner.style.backgroundColor = color;
};

// Promise to check system status
function checkStatus() {

    updateBanner("System is Checking...", "lavender");

    let promise = new Promise((resolve, reject) => {
        setTimeout(() => {
            let online = true;

            if (online)
                resolve();
            else
                reject();
        }, 2000);
    });

    promise
        .then(() => updateBanner("System is Online", "skyblue"))
        .catch(() => updateBanner("System is Offline", "red"));
}

checkStatus();