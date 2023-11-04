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
  const breed = ["shiba", "akita", "poodle", "rottweiler", "beagle"];

  for (let i = 0; i < 5; i++) {
    let wiki_item = document.createElement("div");
    wiki_item.classList.add("wiki-item");

    let wiki_header = document.createElement("h1");
    wiki_header.classList.add("wiki-header");
    wiki_header.appendChild(document.createTextNode(breed[i]));

    let wiki_content = document.createElement("div");
    wiki_content.classList.add("wiki-content");

    let summary = "";
    fetch("https://en.wikipedia.org/api/rest_v1/page/summary/" + breed[i])
      .then((response) => response.json())
      .then((data) => {
        summary = data.extract;

        let wiki_text = document.createElement("p");
        wiki_text.classList.add("wiki-text");
        wiki_text.appendChild(document.createTextNode(summary));

        let img_container = document.createElement("div");
        img_container.classList.add("img-container");

        let imgURL = "";
        fetch("https://dog.ceo/api/breed/" + breed[i] + "/images/random")
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
      });
  }
}
