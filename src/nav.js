import { renderHome } from "./home";
import { renderMenu } from "./menu";
import { renderContact } from "./contact";

const renderNav = () => {
    const mainContent = document.querySelector("div#content");

    const nav = document.createElement("nav");
    const title = document.createElement("h1");
    title.textContent = "The Bannered Mare";
    nav.appendChild(title);

    const ul = document.createElement("ul");

    const homeNav = document.createElement("a");
    homeNav.href = "#";
    homeNav.onclick = renderHome;
    homeNav.textContent = "Home";

    const menuNav = document.createElement("a");
    menuNav.href = "#";
    menuNav.onclick = renderMenu;    
    menuNav.textContent = "Menu";

    const contactNav = document.createElement("a");
    contactNav.href = "#";
    contactNav.onclick = renderContact;
    contactNav.textContent = "Contact";

    ul.appendChild(homeNav);
    ul.appendChild(menuNav);
    ul.appendChild(contactNav);
    nav.appendChild(ul);

    mainContent.appendChild(nav);
}

export { renderNav }