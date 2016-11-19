var links = [].slice.apply(document.getElementsByTagName('a'));
links = links.filter(function(element) {
  var href = element.href;
  var downloadIndex = href.indexOf("download");
  if (downloadIndex >= 0) {
    return true;
  } else {
    return false;
  }
});

links = links.map(function(element) {
  return element.href;
});

links.sort();
  
chrome.extension.sendRequest(links);
