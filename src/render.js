const renderPage = () => {
    const mainContent = document.querySelector("div#content");

    const nav = document.createElement("nav");
    const title = document.createElement("h1");
    title.textContent = "The Bannered Mare";
    nav.appendChild(title);

    const logo = document.createElement("img");

    const main = document.createElement("main");
    const quote = document.createElement("h3");
    const desc = document.createElement("p");
    quote.textContent = '"You look tired, friend. The Bannered Mare has beds for rent." ― Whiterun Guards';
    desc.textContent = "The Bannered Mare, serving as Whiterun's most popular gathering place, functions as a tavern and inn in Skyrim that offers mead, food and a warm, welcoming fire. Almost anyone can be found in the tavern after the shops and stalls close. Its sign is that of a horse carrying a banner.";
    main.appendChild(quote);
    main.appendChild(desc);

    const photo = document.createElement("img");

    mainContent.appendChild(nav);
    mainContent.appendChild(logo);
    mainContent.appendChild(main);
    mainContent.appendChild(photo);
}

export { renderPage }