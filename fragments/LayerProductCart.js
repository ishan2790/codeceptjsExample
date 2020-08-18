const { I } = inject();

module.exports = {
  
  root: "#layer_cart",

  verifyProductAddedMessage() {

    within(this.root , () => {
        I.seeElement("//h2[normalize-space(.)='Product successfully added to your shopping cart']")
    })

    I.addMochawesomeContext("Verify item added to Cart");
    let screenshotName = "verifyProductInCart.png";
    I.saveScreenshot(screenshotName, false);
    I.addMochawesomeContext(screenshotName);
  },

  clickCloseCross() {
    within(this.root , () => {
        I.click("//*[@title='Close window']")
    })
  }


}