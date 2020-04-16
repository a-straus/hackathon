let changeColor = document.getElementById('changeColor');
console.log(document.body);


changeColor.onclick = function(element) {
    console.log(this)
    let color = element.target.value;
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
      chrome.tabs.executeScript(
          tabs[0].id,
          {code: 'document.body.style.backgroundColor = "' + color + '";'});
    });
  };