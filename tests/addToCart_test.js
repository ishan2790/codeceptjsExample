Feature('Add to Cart')
const {I, BlockTopMenuFragment, LayerProductCartFragment, ItemDisplayFragment} = inject();


Scenario('Select Dress and Add To Cart', (I, BlockTopMenuFragment ) => {
    I.amOnPage('/');
    BlockTopMenuFragment.expandCategoryAndChooseSubcategory(['Women','Tops','T-shirts']);
    
    ItemDisplayFragment.clickAddToCart("Faded Short Sleeve T-shirts")

    LayerProductCartFragment.verifyProductAddedMessage();

    LayerProductCartFragment.clickCloseCross();
  
});