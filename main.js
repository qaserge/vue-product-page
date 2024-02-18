const app = Vue.createApp({
  data() {
    return {
      cart: 0,
      product: "Socks",
      image: "./assets/images/socks_green.jpg",
      description: "A pair of warm, comfortable socks",
      inventory: 12,
      onSale: false,
      details: ["50% cotton", "30% wool", "20% polyester"],
      variants: [
        { id: 2234, color: "green", image: "./assets/images/socks_green.jpg" },
        { id: 2235, color: "blue", image: "./assets/images/socks_blue.jpg" },
      ],
    };
  },
  methods: {
    addToCart() {
      this.cart += 1;
    },
    removeFromCart() {
      this.cart -= 1;
    },
    updateImage(variantImage) {
      this.image = variantImage;
    },
    increaseInventory() {
      this.inventory += 1;
    },
    decreaseInventory() {
      this.inventory -= 1;
    },
    addToCartAndUpdateInventory() {
      this.addToCart();
      this.decreaseInventory();
    },
    removeFromCartAndUpdateInventory() {
      this.removeFromCart();
      this.increaseInventory();
    },
  },
});
