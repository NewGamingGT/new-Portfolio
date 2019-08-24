let images = document.querySelector(".images");

for (let key in imgList)
{
    let img = imgList[key].img;
    let description = imgList[key].description;
    let link = imgList[key].link;
    let title = imgList[key].title;

    addImage(img, description, link, title);
}

function addImage(img, description, link, title) 
{
    let imageDiv = document.createElement("div");
    imageDiv.className = "image";

    let image = document.createElement("img");
    image.src = img;

    let overlayDiv = document.createElement("div");
    overlayDiv.className = "overlay";

    let overlayTextDiv = document.createElement("div");
    overlayTextDiv.className = "text";

    let h2 = document.createElement("h2");
    h2.textContent = title;
    
    let p = document.createElement("p");
    p.textContent = description;
    
    let a = document.createElement("a");
    a.href = link;
    a.target = "_blank";

    images.appendChild(imageDiv);
    imageDiv.appendChild(a);
    a.appendChild(image);
    a.appendChild(overlayDiv);
    overlayDiv.appendChild(overlayTextDiv);
    overlayTextDiv.appendChild(h2);
    overlayTextDiv.appendChild(p);
}
