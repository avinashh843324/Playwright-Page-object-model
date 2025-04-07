export class ProductPage {
    constructor(page) {
      this.page = page;
      this.cartIcon = '.shopping_cart_link';
    }
  
    async addProduct(productName) {
      const formattedName = productName.toLowerCase().replaceAll(' ', '-');
      const locator = `[data-test="add-to-cart-${formattedName}"]`;
      await this.page.locator(locator).click();
    }
    
  
    async goToCart() {
      await this.page.click(this.cartIcon);
    }
  }
  
 