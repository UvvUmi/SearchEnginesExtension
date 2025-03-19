// 2025-03 Daniilas Komogorcevas https://github.com/UvvUmi
//This part adds context menu buttons
chrome.runtime.onInstalled.addListener(() => {
  
  chrome.contextMenus.create({
    title: "Google",
    contexts: ["selection"],
    id: "google",
  });
  
  chrome.contextMenus.create({
	title: "Bing",
	contexts: ["selection"],
	id: "bing",
  });

  chrome.contextMenus.create({
    title: "Yahoo!",
    contexts: ["selection"],
    id: "yahoo",
  });
  
  chrome.contextMenus.create({
    title: "DuckDuckGo",
    contexts: ["selection"],
    id: "duck",
  });

  chrome.contextMenus.create({
    title: "Yandex",
    contexts: ["selection"],
    id: "yandex",
  });

  chrome.contextMenus.create({
    title: "Brave",
    contexts: ["selection"],
    id: "brave",
  });

  chrome.contextMenus.create({
    title: "Baidu",
    contexts: ["selection"],
    id: "baidu",
  });

});

//This part is responsible for logic
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