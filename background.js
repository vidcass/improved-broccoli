// Create a context menu for image elements
browser.contextMenus.create({
  id: "reverse-search",
  title: "Reverse Image Search",
  contexts: ["image"],
});

// Listen for clicks on the context menu
browser.contextMenus.onClicked.addListener((info, tab) => {
  if (info.menuItemId === "reverse-search") {
    // Validate the URL or escape special characters to prevent injection
    const imageUrl = encodeURIComponent(info.srcUrl);
    
    // Open new tabs for the reverse image search
    browser.tabs.create({
      url: `https://lens.google.com/uploadbyurl?url=${imageUrl}`
    });
    browser.tabs.create({
      url: `https://www.bing.com/images/search?q=imgurl:${imageUrl}&view=detailv2&iss=sbi`
    });
  }
});

