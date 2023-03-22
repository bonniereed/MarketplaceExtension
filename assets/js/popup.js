let currentListing = document.getElementById("current-listings");
let createListing = document.getElementById("create-listings");
let directMessages = document.getElementById("direct-messages");

export function newTab(newTabURL) {
    let newTab = {
        active: true,
        url: newTabURL,
    };
    chrome.tabs.create(newTab);
}

document.addEventListener("click", function (e) {
    urlSwitch(e.target.id);
});

function urlSwitch(targetId) {
    switch (targetId) {
        case "current-listing":
            let currentListTab = `https://www.facebook.com/marketplace/you/selling`;
            newTab(currentListTab);
            break;
        case "create-listing":
            let createListTab = `https://www.facebook.com/marketplace/create`;
            newTab(createListingTab);
            break;
        case "direct-message":
            let directMessageTab = `https://www.facebook.com/messages`;
            newTab(directMessageTab);
            break;
        default:
            break;
    }
}
