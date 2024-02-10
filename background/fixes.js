


chrome.windows.onCreated.addListener(()=>{
  chrome.tabs.create({url: "chrome://newtab", selected: true});
})

let Done = false
chrome.extension.onRequest.addListener(
  function(request, sender, sendResponse) {
    switch (request.msg) {
    case ("Init?"):
      if (!Done){
        sendResponse({msg: true});
        Done = true
      }else{
        sendResponse({msg: false});
      }
      break;
    }
  })