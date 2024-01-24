function checkLS() {
    if (localStorage.getItem('cookies') === null) {
        localStorage.setItem('cookies', 0);
    }
}

function res() {
    // let sum = parseInt(localStorage.getItem('cookies'))

    // if (sum == 0) {
    //     window.open('https://www.effectivecpmgate.com/swqh6tcn3k?key=163b8eee7c2fbbbdae754cb90a81d9f7', '_blank');
    // } else {
    validation();
    // }
    // localStorage.setItem('cookies', 1);

}

function welcomeMsg() {
    const welcomeMsgEl = document.querySelector("#welcomeMsg");
    let array = 0;

    const fadddrf = `<a href="https://fadddrf.xyz/" target="_blank">fadddrf.xyz</a>`;
    const fadddrfIG = `<a href="https://www.instagram.com/fadddrf/" target="_blank">fadddrf</a>`;
    const fadddrfabout = `<a href="https://BlmAdaCuy" target="_blank">recovery</a>`;

    let arrayEl = [
        `<p class="animation mb-0 text-truncate">mwhehehe keren kan gess 🗿</p>`,
        `<p class="animation mb-0 text-truncate">IG: ${fadddrfIG}</p>`,
        `<p class="animation mb-0 text-truncate">Gas mabar banh 😅☝</p>`,
    ];
    setInterval(() => {
        welcomeMsgEl.innerHTML = arrayEl[array];

        array++;
        if (array >= arrayEl.length) {
            array = 0;
        }
    }, 5000);
}

window.dataLayer = window.dataLayer || [];

function gtag() { dataLayer.push(arguments); }
gtag('js', new Date());

gtag('config', 'UA-206846692-3');
