function downloadCheckedLinks() {
  var minIndex = parseInt(document.getElementById('minindex').value);
  var maxIndex = parseInt(document.getElementById('maxindex').value);
  
  var baseURL = document.getElementById('baseURL').value;

  if (validateIndexes(minIndex, maxIndex)) {
    var index = minIndex;
    while (index <= maxIndex) {
      var contentURL = baseURL + "?file_id=" + index;
      chrome.downloads.download({url: contentURL}, function(id){});
      index++;
    }  
  }
}

function validateIndexes(minIndex, maxIndex) {
  if (isNaN(minIndex) || isNaN(maxIndex)) {
    alert("Indexes should be integers");
    return false;
  }

  if (minIndex <= 0 || maxIndex <= 0) {
    alert("Indexes should be positive");
    return false;
  }

  if (minIndex > maxIndex) {
    alert("minIndex should be less than maxIndex");
    return false;
  }

  return true;
}

window.onload = function() {
  document.getElementById('download').onclick = downloadCheckedLinks;
};
