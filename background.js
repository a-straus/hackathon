chrome.runtime.onInstalled.addListener(function () {
  chrome.tabs.executeScript({
    file: 'contentScript.js'
  });
  chrome.contextMenus.create({
    id: 'ContextMenu',
    title: 'Context Menu',
    contexts: ['selection']
  });
});
chrome.declarativeContent.onPageChanged.removeRules(undefined, function () {
  chrome.declarativeContent.onPageChanged.addRules([
    {
      conditions: [
        new chrome.declarativeContent.PageStateMatcher({
          pageUrl: { hostEquals: 'developer.chrome.com' }
        })
      ],
      actions: [new chrome.declarativeContent.ShowPageAction()]
    }
  ]);
});

// document.querySelector('#button').addEventListener('click', function() {
//     console.log(this);
// })
