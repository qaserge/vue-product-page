const app = Vue.createApp({
  data() {
    return {
      product: "Socks",
      image: "./assets/images/socks_green.jpg",
      description: "A pair of warm, comfortable socks",
      inventory: 55,
      onSale: false,
    };
  },
});
