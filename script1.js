var request=new XMLHttpRequest();
request.open("GET","https://api.covid19api.com/total/country/india");
request.send();
request.onload=function(){
    var dataa=JSON.parse(request.response);
    //console.log(data);
    for(var i=0;i<dataa.length;i++)
    {
        console.log(dataa[i].Deaths+" "+ dataa[i].Active+" "+dataa[i].Recovered);
    }
}