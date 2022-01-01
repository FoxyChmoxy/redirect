const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const href = urlParams.get('href');

$.getJSON('https://api.ipify.org?format=json', function(data){
    let userInfo = {
        ipAddress: data.ip,
        browserName: navigator.appName,
        browserVersion: navigator.appVersion,
        userAgent: navigator.userAgent
    };
    
    confirm(userInfo.ipAddress);
    window.location.href = "https://" + href;
});