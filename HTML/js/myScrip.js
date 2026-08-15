    let containerImage = document.querySelector("#container-image");
    let add = document.querySelector("#add");
    let remove = document.querySelector("#remove");

    add.addEventListener("click", () => {
        let image = document.createElement("img");
        image.src = "https://picsum.photos/200/300?random=" + (Math.floor(Math.random() * 100) + 1);
        image.setAttribute("class", "rounded-xl shadow-xl");
        containerImage.appendChild(image);
    });

    remove.addEventListener("click", () => {
        containerImage.lastElementChild.remove();
    });