let httpGET = (URL) => {
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.open( "GET", URL, false);
    xmlHttp.send( null );
    return xmlHttp.responseText;
}

let imgList = httpGET("./imgList.json");
imgList = JSON.parse(imgList);