chrome.runtime.onInstalled.addListener(function () {
  chrome.tabs.executeScript({
    file: 'contentScript.js'
  });
  chrome.contextMenus.create({
    id: 'ContextMenu',
    title: 'Share page with friends',
    contexts: ['all']
  });
});
chrome.declarativeContent.onPageChanged.removeRules(undefined, function () {
  chrome.declarativeContent.onPageChanged.addRules([
    {
      conditions: [
        new chrome.declarativeContent.PageStateMatcher({
          pageUrl: { urlMatches: '' }
        })
      ],
      actions: [new chrome.declarativeContent.ShowPageAction()]
    }
  ]);
});

function commentsPopup() {
  chrome.tabs.executeScript({
    code: 'console.log(document)'
    // code: 'comment();'
    // file: 'contentScript.js',
    // code: `let menu = document.createElement("div");
    // menu.innerHTML = ('<div id="comment-menu">
    //     <input id="comment-field"></input>
    //     <button>Add comment</button>
    // </div>');
    // document.body.appendChild(menu);
    // console.log(document)`
  });

  let comment = prompt('enter a comment');
}

// chrome.runtime.onInstalled.addListener(function() {
//     chrome.contextMenus.create({
//         "id": "ContextMenu",
//         "title": "Annotate",
//         "contexts": ["all"],
//       });
// });

chrome.contextMenus.onClicked.addListener(function () {
  commentsPopup();
});

chrome.runtime.onMessage.addListener(function () {
  chrome.tabs.executeScript({
    file: 'contentScript.js'
  });
});

// chrome.declarativeContent.onPageChanged.removeRules(undefined, function () {
//   chrome.declarativeContent.onPageChanged.addRules([
//     {
//       conditions: [
//         new chrome.declarativeContent.PageStateMatcher({
//           pageUrl: { hostEquals: 'developer.chrome.com' }
//         })
//       ],
//       actions: [new chrome.declarativeContent.ShowPageAction()]
//     }
//   ]);
// });
