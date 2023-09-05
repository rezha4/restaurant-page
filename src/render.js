import { order } from "./order";

const render = () => {
    const body = document.querySelector("body");
    const btn = document.createElement("button");
    btn.innerText = "Order";
    body.appendChild(btn);

    btn.addEventListener("click", order);
}

export { render }