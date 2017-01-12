export function LoadProducts() {
    return {
        type: "LOAD_PRODUCTS",
        payload: [{
            name: "Cookies",
            id: "FD-01",
            price: 12.22
        }, {
            name: "Soft Drink",
            id: "FD-02",
            price: 3.22
        }]
    };
}