// —- listen for the keyboard shortcut to be pressed
chrome.commands.onCommand.addListener(command => {
    chrome.tabs.query({url: 'https://meet.google.com/*'}, tabs => {
        tabs.forEach(tab => {
            chrome.tabs.sendMessage(tab.id, {command: command});
        });
    });
});
