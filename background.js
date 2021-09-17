// background.js
chrome.commands.onCommand.addListener(function(command, tab) {
    if (command === 'open-tab-left') {
        chrome.tabs.create({active: true, index: tab.index})
    }
});

chrome.runtime.onInstalled.addListener((reason) => {
    if (reason === chrome.runtime.OnInstalledReason.INSTALL) {
        alert("OpenTabLeft default shortcut is Alt+T.\nif you want override shortcut of chrome default(`Ctrl+T`), go chrome://extensions/shortcuts and change shortcut of Open Tab Left")
    }
});