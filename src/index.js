import "./styles.css";

if (document.readyState !== "loading") {
  initializeCode();
} else {
  document.addEventListener("DOMContentLoaded", function () {
    initializeCode();
  });
}

function initializeCode() {
  let container = document.getElementById("container");
  let breed = "Shiba";

  for (let i = 0; i < 5; i++) {
    let wiki_item = document.createElement("div");
    wiki_item.classList.add("wiki-item");

    let wiki_header = document.createElement("h1");
    wiki_header.classList.add("wiki-header");
    wiki_header.appendChild(document.createTextNode(breed));

    let wiki_content = document.createElement("div");
    wiki_content.classList.add("wiki-content");

    let wiki_text = document.createElement("p");
    wiki_text.classList.add("wiki-text");
    wiki_text.appendChild(
      document.createTextNode(`The Shiba Inu is double coated, with the outer coat
   being stiff and straight and the undercoat soft and thick. Fur is short and even on the fox-like 
   face, ears, and legs. Guard hairs stand off the body and are about 4 to 5 cm (1+1⁄2 to 2 in) 
   long at the withers. 
   The purpose of the guard hairs is to protect their underlying skin and to repel rain or snow. 
   Tail hair is slightly longer and stands open in a brush. Their tails are a defining characteristic 
   and makes them stand apart from other dog breeds. Their tails help to protect them from the 
   harsh winter weather. When they sleep, Shiba Inus curl up and use their tails to shield their 
   face and nose in order to protect their sensitive areas from the cold.`)
    );

    let img_container = document.createElement("div");
    img_container.classList.add("img-container");

    let imgURL = "";
    fetch("https://dog.ceo/api/breed/shiba/images/random")
      .then((response) => response.json())
      .then((data) => {
        imgURL = data.message;
        let wiki_img = document.createElement("img");
        wiki_img.classList.add("wiki-img");
        wiki_img.src = imgURL;
        console.log(imgURL);
        img_container.appendChild(wiki_img);
        wiki_content.appendChild(img_container);
        wiki_content.appendChild(wiki_text);

        wiki_item.appendChild(wiki_header);
        wiki_item.appendChild(wiki_content);
        container.appendChild(wiki_item);
      });
  }
}
