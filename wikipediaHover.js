$(document).ready(function(){
    var response = "";
    $('a').hover(function(){
        var addressValue = $(this).attr("href");
        var xmlhttp;

        xmlhttp=new XMLHttpRequest();

        xmlhttp.onreadystatechange=function()
        {
            if (xmlhttp.readyState==4 && xmlhttp.status==200)
            {
                response = xmlhttp.responseText;
                var index1 = response.indexOf("<p>");
                var index2 = response.indexOf("</p>") - index1;
                response = response.substr(index1, index2);
                //$('html').html(response);
                response = $(response).text();
                $('a:hover').attr("title", response);
            }
        }
        xmlhttp.open("GET",addressValue,true);
        xmlhttp.send();
        
    });
});