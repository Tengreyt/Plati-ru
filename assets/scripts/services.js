import { createURL } from "./helpers.js";
import { toast } from "./models.js";
import { renderErrorToast } from "./view.js";

// async function postCardOne() {
//     try{
//         const response = await fetch(createURL('/battlefield-v'))
//         const { data } = await response.json()
//         return data
//     } catch (error) {
//         renderErrorToast(error.message)
//     }
// }

// async function postCardTwo(request) {
//     try{
//         const response = await fetch(createURL(request))
//         const { data } = await response.json()
//         return data
//     } catch (error) {
//         renderErrorToast(error.message)
//     }
// }
async function initProducts() {
    const response = await fetch(createURL('/battlefield-v'));
    const { items } = await response.json();
    return items ;
}

async function searchProduct(request) {
    const response = await fetch(createURL(request));
    const { items } = await response.json();
    return items ;
}



export {
    initProducts,
    searchProduct
}