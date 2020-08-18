const { I } = inject();

module.exports = {
  
  
  clickAddToCart(itemName) {
    I.scrollTo("//a[@title='"+itemName+"']");
    I.moveCursorTo("//a[@title='"+itemName+"']");
    I.click("//a[@title='"+itemName+"']/ancestor::li//a[@title='Add to cart']")

    I.addMochawesomeContext("Adding item to Cart")
    let screenshotName = "add_to_cart.png";
    I.saveScreenshot(screenshotName, false);
    I.addMochawesomeContext(screenshotName);
  },

  clickMore(itemName) {
    I.moveCursorTo("//a[@title='"+itemName+"']");
    I.click("//a[@title='"+itemName+"']/ancestor::li//a[@title='More']")
  },
  
}