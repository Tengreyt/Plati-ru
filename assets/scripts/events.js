import { renderCard, renderTwoCard } from "./view.js";
import { input, body } from "./ui.js";

window.onload = () => renderCard();

input.addEventListener('input', async (e) => renderTwoCard(e.target.value));
body.addEventListener('click', (e) => {
    if(e.target && e.target.classList.contains('toast')) window.location.reload();
})