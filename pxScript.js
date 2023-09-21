(function(n,t,a,e,co){var i="aptrinsic";n[i]=n[i]||function(){
    (n[i].q=n[i].q||[]).push(arguments)},n[i].p=e;n[i].c=co;
    var r=t.createElement("script");r.async=!0,r.src=a+"?a="+e;
    var c=t.getElementsByTagName("script")[0];c.parentNode.insertBefore(r,c)
})(window,document,"https://web-sdk.aptrinsic.com/api/aptrinsic.js","AP-IAM6BOO0JFWX-2");

function validate()
{  
var name=document.loginForm.un.value;  
var password=document.loginForm.pwd.value;
if(name=="bhargav@gmail.com" && password=="bhargav")
{
    aptrinsic("identify",
    {
        "id": name+"$1",
        "email": name,
        "firstName": "Bhargav"
    },
    {
        "id":"12",
        "name":"International Business Machine"
    });
    return true;
}
if(name=="jayanth@gmail.com" && password=="jayanth")
{
    aptrinsic("identify",
    {
        "id": name+"$1",
        "email": name,
        "firstName": "Jayanth"
    },
    {
        "id":"123",
        "name":"GS"
    });
    return true;
}
else{
    return false;
}
} 



