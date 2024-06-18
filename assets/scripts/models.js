function getCard({name, url, price_rur, image}) {
    return `
       <div class="card">
            <img src="${image}" alt="url-product">
            <div class="title">${name}</div>
            <div class="price">${price_rur} ₽</div>
            <a class="btn-bay btn" href="${url}" target="_blank">Посмотреть</a>
        </div>
        `
}

function toast(message) {
    return `
      <div class="toast">
        <div class="toast__message">Ошибка: ${message}</div>
        <div class="toast__prompt">Нажмите на сообщение, чтобы перезагрузить страницу</div>
      </div>
    `;
}

export {
    getCard,
    toast
}

