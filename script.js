const titles = ["Google", "Bing", "Yahoo!", "DuckDuckGo", "Yandex", "Brave", "Baidu"];
const ids = ["google", "bing", "yahoo", "duck", "yandex", "brave", "baidu"];

chrome.runtime.onInstalled.addListener(() => {
  titles.forEach((engineTitle, index) => {
    chrome.contextMenus.create({
      title: engineTitle,
      contexts: ["selection"],
      id: ids[index],
    })
  }) 
});


chrome.contextMenus.onClicked.addListener((info, tab) => {
  if (!info.selectionText) return;

  var selText = encodeURIComponent(info.selectionText);
	var url = "";
  
  switch (info.menuItemId) {
    case "google":
      url = "https://www.google.com/search?q=" + selText;
      break;
    case "bing":
      url = "https://www.bing.com/search?q=" + selText;
      break;
    case "yahoo":
      url = "https://www.search.yahoo.com/search?q=" + selText;
      break;
    case "duck":
      url = "https://www.duckduckgo.com/search?q=" + selText;
      break;
    case "yandex":
      url = "https://yandex.com/search/?text=" + selText;
      break;
    case "brave":
      url = "https://search.brave.com/search?q=" + selText;
      break;
    case "baidu":
      url = "https://www.baidu.com/s?wd=" + selText;
      break;
  }
  
  if (url) chrome.tabs.create({ url: url });

});