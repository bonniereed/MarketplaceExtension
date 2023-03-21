let currentListing = document.getElementById("current-listings");
let createListing = document.getElementById("create-listings");
let directMessages = document.getElementById("direct-messages");

export function newTab(newTabURL) {
    let newTab = {
        active: true,
        url: newTabURL,
    };
    chrome.windows.create(newTabURL);
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
            let directMessageTab = `https://www.facebook.com/marketplace/you/selling`;
            newTab(directMessageTab);
            break;
        case createListing:
            newTab = `https://www.facebook.com/marketplace/you/selling`;
            break;
        case directMessages:
            newTab = `https://www.facebook.com/marketplace/you/selling`;
            break;
        default:
            break;
    }
}
