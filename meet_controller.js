
"use strict";

chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    // `sendResponse` (and maybe `sender`) args are used by the browser, do not change the names

    const turnOffMicButton = document.querySelector('[aria-label*="Turn off microphone"]')
    const turnOnMicButton = document.querySelector('[aria-label*="Turn on microphone"]')
    const turnOffCamButton = document.querySelector('[aria-label*="Turn off camera"]')
    const turnOnCamButton = document.querySelector('[aria-label*="Turn on camera"]')

    switch (request.command) {
        case 'toggleMicrophone':
            if (turnOffMicButton !== null) turnOffMicButton.click();
            else turnOnMicButton.click()
            break;
        case 'toggleCamera':
            if (turnOffCamButton !== null) turnOffCamButton.click();
            else turnOnCamButton.click()
            break;
        default:
            break;
    }
})
