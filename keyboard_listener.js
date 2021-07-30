// —- listen for the keyboard shortcut to be pressed
chrome.commands.onCommand.addListener(command => {
    // —- we want to find all Chrome tabs that have Google Meet open
    chrome.tabs.query({url: `https://meet.google.com/*`}, tabs => {
        tabs.forEach(tab => {
            // —- callback that is invoked by the recipient of the message that we will send next.
            // —- we expect the recipient to give us some text present in a notification bubble.
            const responseHandler = response => {
                chrome.notifications.create(undefined, response.notification, function(notificationId) {})
            }
            // —- send each Meet tab a message, which is the hotkey command from manifest.json.
            // —- this will always be “toggle”, since that’s the only one we defined.
            chrome.tabs.sendMessage(tab.id, {command: command}, responseHandler)
        })
    })
})
