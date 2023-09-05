const order = () => {
    alert("ordered from order.js");
    const title = document.createElement("h1");
    title.innerHTML = "Testing title";
    document.body.appendChild(title);
}

export { order }