import CONFIG from './config.js';

function createURL(name) {
    return `${CONFIG.BASE_URL}?query=${name}&response=json`
}

export {
    createURL
}