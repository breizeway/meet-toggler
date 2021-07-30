
"use strict";

chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    let icon = `notmuted.png` // default icon for notification
    let message = `Could not locate Mute control in Google Meeting.` // default notification message

    // find mute or unmute button on this Meeting page. only one of these will exist at a time
    const muteButton = document.querySelector("[aria-label=’Turn off microphone’]")
    const unmuteButton = document.querySelector("[aria-label=’Turn on microphone’]")

    // function for muting
    const mute = () => {
        const btn = muteButton
        if (btn !== null) {
            btn.click()
            message = `Microphone is OFF`
            icon = `muted.png`
            sendResponse({
                notification: {
                    type: `basic`,
                    iconUrl: icon,
                    title: message,
                    message: ``
                }
            })
        }
    }

    // function for unmuting
    const unmute = () => {
        const btn = unmuteButton
        if (btn !== null) {
            btn.click()
            message = `Microphone is ON`
            icon = `notmuted.png`
            sendResponse({
                notification: {
                    type: `basic`,
                    iconUrl: icon,
                    title: message,
                    message: ``
                }
            })
        }
    }


    if (request.command === `toggle`) {
        if (muteButton !== null) { // if the mute button exists, then the Mic is currently unmuted.
            mute()
        }
        else { // … and vice-versa.
            unmute()
        }
    }
})
