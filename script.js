
var header=document.getElementById('h1');
var siteData= {
    siteName: 'My Site',
    siteDescription: 'A JS site'
},
    localData;

localStorage.setItem('siteData', JSON.stringify(siteData));

localData=JSON.parse(localStorage.getItem('siteData'))

console.log(localData)
console.log(localStorage.getItem('siteData'))

header.innerHTML=localData.siteName