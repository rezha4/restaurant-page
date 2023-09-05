import { clearNode } from "./clear";
import { renderNav } from "./nav";

const renderContact = () => {
    clearNode(document.querySelector("#content"));
    renderNav();

    const mainContent = document.querySelector("#content");
    const main = document.createElement("main");

    const title = document.createElement("h3");
    title.textContent = `something something contact`;
    main.appendChild(title);

    const menu = document.createElement("div");
    menu.id = "menu";

    mainContent.appendChild(main);
}

export { renderContact }