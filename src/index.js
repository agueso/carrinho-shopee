import * as cartService from "./services/cart.js";
import createItem from "./services/item.js";

const myCart = [];
const myWishList = [];

console.log("Welcome to your shopee Cart!");

const item1 = await createItem("Casaco", 113.9, 3);
const item2 = await createItem("Calça Baggy", 89.9, 1);

await cartService.addItem(myCart, item1);
await cartService.addItem(myCart, item2);

await cartService.removeItem(myCart, 1);

await cartService.displayCart(myCart);

await cartService.calculateTotal(myCart);
