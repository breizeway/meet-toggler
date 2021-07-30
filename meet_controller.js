
"use strict";

chrome.runtime.onMessage.addListener((request, _, sendResponse) => {

    const turnOffMicButton = document.querySelector('[aria-label="Turn off microphone (⌘ + d)"]')
    const turnOnMicButton = document.querySelector('[aria-label="Turn on microphone (⌘ + d)"]')
    const turnOffCamButton = document.querySelector('[aria-label="Turn off camera (⌘ + e)"]')
    const turnOnCamButton = document.querySelector('[aria-label="Turn on camera (⌘ + e)"]')

    // function for muting
    // const mute = () => {
    //     const btn = muteButton
    //     if (btn !== null) {
    //         btn.click()
    //         message = `Microphone is OFF`
    //         icon = `muted.png`
    //         sendResponse({
    //             notification: {
    //                 type: `basic`,
    //                 iconUrl: icon,
    //                 title: message,
    //                 message: ``
    //             }
    //         })
    //     }
    // }

    // // function for unmuting
    // const unmute = () => {
    //     const btn = unmuteButton
    //     if (btn !== null) {
    //         btn.click()
    //         message = `Microphone is ON`
    //         icon = `notmuted.png`
    //         sendResponse({
    //             notification: {
    //                 type: `basic`,
    //                 iconUrl: icon,
    //                 title: message,
    //                 message: ``
    //             }
    //         })
    //     }
    // }

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

    // if (request.command === `toggleMicrophone`) {
    //     if (muteButton !== null) { // if the mute button exists, then the Mic is currently unmuted.
    //         mute()
    //     }
    //     else { // … and vice-versa.
    //         unmute()
    //     }
    // }
})
