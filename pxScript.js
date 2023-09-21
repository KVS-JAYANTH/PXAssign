(function(n,t,a,e,co){var i="aptrinsic";n[i]=n[i]||function(){
    (n[i].q=n[i].q||[]).push(arguments)},n[i].p=e;n[i].c=co;
    var r=t.createElement("script");r.async=!0,r.src=a+"?a="+e;
    var c=t.getElementsByTagName("script")[0];c.parentNode.insertBefore(r,c)
})(window,document,"https://web-sdk.aptrinsic.com/api/aptrinsic.js","AP-IAM6BOO0JFWX-2");

function validate()
{  
var name=document.loginForm.un.value;  
var password=document.loginForm.pwd.value;
sessionStorage.setItem('username',username);
if((name=="Bhargav" && password=="Bhargav") || (name=="Jayanth" && password=="Jayanth"))
{
    return true;
}
else{
    return false;
}
}  



