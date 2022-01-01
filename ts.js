const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const img = urlParams.get('img');

$.getJSON('https://api.ipify.org?format=json', function(data){
    let userInfo = {
        ipAddress: data.ip,
        browserName: navigator.appName,
        browserVersion: navigator.appVersion,
        userAgent: navigator.userAgent
    };
    
    console.log(userInfo.ipAddress);
    window.location.href = img;
});