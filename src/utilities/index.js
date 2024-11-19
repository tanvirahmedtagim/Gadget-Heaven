import { toast } from "react-toastify";

const getStoredCartList = () => {
  const storedListStr = localStorage.getItem("cart-list");
  if (storedListStr) {
    const storedList = JSON.parse(storedListStr);
    return storedList;
  } else {
    return [];
  }
};

const addToStoredCartList = (product) => {
  const storedList = getStoredCartList();
  if (storedList.includes(product.id)) {
    toast.warning("already exists in the cart list");
  } else {
    storedList.push(product.id);
    const storedListStr = JSON.stringify(storedList);
    localStorage.setItem("cart-list", storedListStr);
    toast.success("Product is added to Cart list.");
  }
};

const getStoredWishList = () => {
  const storedWishListStr = localStorage.getItem("wish-list");
  if (storedWishListStr) {
    const storedWishList = JSON.parse(storedWishListStr);
    return storedWishList;
  } else {
    return [];
  }
};

const addToStoredWishList = (product) => {
  const storedWishList = getStoredWishList();
  if (storedWishList.includes(product.id)) {
    toast.warning("already exists in the wish list");
  } else {
    storedWishList.push(product.id);
    const storedWishListStr = JSON.stringify(storedWishList);
    localStorage.setItem("wish-list", storedWishListStr);
    toast.success("Product is  added to Wish list.");
  }
};
const removeCartItem = (id) => {
  const carts = getStoredCartList();
  const remaining = carts.filter((cart) => cart != id);
  localStorage.setItem("cart-list", JSON.stringify(remaining));
  toast.success("Successfully Removed From Cart List!");
};
const removeWishList = (id) => {
  const wishes = getStoredWishList();
  const remaining = wishes.filter((wish) => wish != id);
  localStorage.setItem("wish-list", JSON.stringify(remaining));
  toast.success("Successfully Removed From Wish List!");
};
export {
  addToStoredCartList,
  addToStoredWishList,
  getStoredCartList,
  getStoredWishList,
  removeCartItem,
  removeWishList,
};
