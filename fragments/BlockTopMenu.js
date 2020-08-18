const { I } = inject();

module.exports = {
  
  
  clickCategory(categoryName) {
    I.click("//a[.='"+categoryName+"']");
  },
  
  expandCategoryAndChooseSubcategory(categories) {
    for(let i = 0; i < categories.length; i++) {
      if(i+1 == categories.length) {
        //click on the last item in categories
        I.click("//a[.='"+categories[i]+"']");
      }
      else {
        //move cursor if item is not last on categories
        I.moveCursorTo("//a[.='"+categories[i]+"']");
      }
    }
    I.addMochawesomeContext("Choosing Category and Sub Category")
    let screenshotName = "choosing_categories.png";
    I.saveScreenshot(screenshotName, false);
    I.addMochawesomeContext(screenshotName);
  }
}