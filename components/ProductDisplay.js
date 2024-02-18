app.component("product-display", {
  props: {
    premium: {
      type: Boolean,
      required: true,
    },
    cartLength: Number,
  },
  template:
    /*html*/
    `
      <div class="product-display">
          <div class="product-container">
            <div class="product-image">
              <img
                :class="{ 'out-of-stock-img': inventory === 0 }"
                v-bind:src="image"
              />
            </div>
            <div class="product-info">
              <h1>{{ title }}</h1>
              <p v-if="inStock">In Stock</p>
              <p v-else-if="inventory <= 10 && inventory > 0">Almost sold out!</p>
              <p v-else>Out of Stock</p>
              <p>Shipping: {{ shipping }}</p>

              <product-details :details="details"></product-details>
              
              <div
                v-for="(variant, index) in variants"
                :key="variant.id"
                @mouseover="updateVariant(index)"
                class="color-circle"
                :style="{ backgroundColor: variant.color }"
              ></div>
              <button
                class="button"
                v-on:click="addToCart"
                :class="{ disabledButton: !inStock }"
                :disabled="!inStock"
              >
                Add to Cart
              </button>              
              <button v-if="cartLength > 0" class="button" @click="removeFromCart">
                Remove Item
              </button>
            </div>
          </div>
        </div>
      `,
  data() {
    return {
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
      this.$emit("add-to-cart", this.variants[this.selectedVariant].id);
    },
    removeFromCart() {
      this.$emit("remove-from-cart", this.variants[this.selectedVariant].id);
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
    shipping() {
      if (this.premium) {
        return "Free";
      }
      return 2.99;
    },
  },
});
