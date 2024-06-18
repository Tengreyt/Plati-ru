import { initProducts,searchProduct} from './services.js';
import { getCard,toast } from './models.js';
import { container, body } from './ui.js';

async function renderErrorToast(message) {
    body.innerHTML = toast(message)
}

async function renderCard() {
    try {
        const cards = await initProducts();
        container.innerHTML = '';
        cards.forEach(card => container.innerHTML += getCard(card))
    } catch (error) {
        console.error('Error in renderGif:', error);
    }
}


async function renderTwoCard(request) {
    if (request.length > 2) {
        try {
            const cards = await searchProduct(request)
            container.innerHTML = '';
            cards.forEach(card => container.innerHTML += getCard(card))
        } catch (error) {
            console.error('Error in renderSearchGifs:', error);
        }
    }
    if(request.length === 0) renderCard();
}

export {
    renderCard,
    renderErrorToast,
    renderTwoCard
}