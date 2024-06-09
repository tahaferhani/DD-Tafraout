export const addToCart = (produit) => {
    return {
        type: "ADD_TO_CART",
        payload: produit
    }
}

export const removeFromCart = (id) => {
    return {
        type: "REMOVE_FROM_CART",
        payload: id
    }
}

export {
    addToCart,
    removeFromCart
}