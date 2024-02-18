const app = Vue.createApp({
  data() {
    return {
      cart: 0,
      brand: "Puma",
      product: "Socks",
      selectedVariant: 0,
      description: "A pair of warm, comfortable socks",
      inventory: 12,
      details: ["50% cotton", "30% wool", "20% polyester"],
      variants: [
        {
          id: 2234,
          color: "green",
          image: "./assets/images/socks_green.jpg",
          quantity: 50,
          onSale: false,
        },
        {
          id: 2235,
          color: "blue",
          image: "./assets/images/socks_blue.jpg",
          quantity: 0,
          onSale: true,
        },
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
    updateVariant(index) {
      this.selectedVariant = index;
    },
  },
  computed: {
    title() {
      let saleText = this.variants[this.selectedVariant].onSale
        ? " is on Sale!"
        : "";
      return this.brand + " " + this.product + saleText;
    },
    image() {
      return this.variants[this.selectedVariant].image;
    },
    inStock() {
      return this.variants[this.selectedVariant].quantity;
    },
  },
});
