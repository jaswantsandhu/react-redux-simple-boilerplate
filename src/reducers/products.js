export default function Account(state = [], action) {
    switch (action.type) {
        case 'LOAD_PRODUCTS':
            console.log(action.payload);
            return Object.assign([], state, action.payload);
        default:
            return state;
    }
}