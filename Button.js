(function() {
    const newButton = document.createElement('button');
    newButton.id = 'console-injected-button';
    newButton.textContent = 'START';

    newButton.style.cssText = `
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        padding: 40px 80px;
        font-size: 32px;
        background-color: #e91e63;
        color: white;
        border: none;
        border-radius: 15px;
        cursor: pointer;
        z-index: 10000; 
        box-shadow: 0 8px 16px rgba(0, 0, 0, 0.4);
    `;

    newButton.onclick = function() {
        console.log("Initiated");
        document.querySelector("#thread-bottom > div > div > div.pointer-events-auto.relative.z-1.flex.h-\\[var\\(--composer-container-height\\,100\\%\\)\\].max-w-full.flex-\\[var\\(--composer-container-flex\\,1\\)\\].flex-col > form > div:nth-child(2) > div > div.flex.items-center.gap-2.\\[grid-area\\:trailing\\] > div > div > div > span > button").click(); 
    };

    document.body.appendChild(newButton);
})();
