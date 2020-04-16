
    chrome.runtime.onMessage.addListener(
        function(message, callback) {
          if (message == 'runContentScript') {
            chrome.tabs.executeScript({
              file: 'contentScript.js'
            });
          }
       });
    chrome.declarativeContent.onPageChanged.removeRules(undefined, function() {
        chrome.declarativeContent.onPageChanged.addRules([{
          conditions: [new chrome.declarativeContent.PageStateMatcher({
            pageUrl: {hostEquals: 'developer.chrome.com'},
          })
          ],
              actions: [new chrome.declarativeContent.ShowPageAction()]
        }]);
      });



    console.log(window.document);
    // document.querySelector('#button').addEventListener('click', function() {
    //     console.log(this);
    // })
