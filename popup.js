console.log(document);
const changeColor = document.getElementsByTagName('button')[0];
const button = document.getElementById('changeColor');

button.onclick = function (element) {
  console.log(this);
  let color = element.target.value;
  chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
    chrome.tabs.executeScript(tabs[0].id, {
      code: 'document.body.style.backgroundColor = "' + color + '";'
    });
  });
};
