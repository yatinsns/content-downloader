function parseReadMoreLinks() {
  chrome.windows.getCurrent(function (currentWindow) {
    chrome.tabs.query({active: true, windowId: currentWindow.id},
                      function(activeTabs) {
      chrome.tabs.executeScript(
        activeTabs[0].id, {file: 'parse_links.js', allFrames: true});
    });
  });
}

function downloadLinks(links) {
  links.forEach(function(link) {
    chrome.downloads.download({url: link}, function(id){});  
  });
}

window.onload = function() {
  parseReadMoreLinks();
};

chrome.extension.onRequest.addListener(function(links) {
  downloadLinks(links);
});
