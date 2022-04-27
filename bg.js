var facts =
    [
        ['https://ibb.co/wNMxQ1Y']
        ['https://ibb.co/McSbqqF']
        ['https://ibb.co/G2z9YNd']
        ['https://ibb.co/JrcSLMR']
        ['https://ibb.co/7RcWvLV']
        ['https://ibb.co/SfSYv4Z']
        ['https://ibb.co/CtjcBH9']
        ['https://ibb.co/R7Zytk2']
    ];

function chooseFact(category) {
    if (theme == "facts") {
            return 0; } 
    else {
        console.log('Error');
    } 

var currCategory;
chrome.webRequest.onBeforeRequest.addListener(
    function (details) {
        var ran = Math.floor(Math.random() * 8);
        var URL = facts[chooseFact(currCategory)][ran][0];
        var width = facts[chooseFact(currCategory)][ran][1];
        var length = facts[chooseFact(currCategory)][ran][2];
        if (URL != "none") {
            chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
                chrome.tabs.sendMessage(tabs[0].id, {
                    call: "resize",
                    url: URL,
                    width: width,
                    length: length });
                    });
            return { 
                redirectUrl: URL };
        }
    },
    { urls: ["*://*.doubleclick.net/*"] }, // a legitimate advertising service 
    ["blocking"]
);

chrome.tabs.reload()
}
