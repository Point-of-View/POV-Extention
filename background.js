chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
    if (request.message === 'get_current_url') {
      chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
        var currentUrl = tabs[0].url;
        sendResponse({currentUrl: currentUrl});
      });
      return true;
    }
  });