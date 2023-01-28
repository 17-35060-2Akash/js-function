var shoppingCart = {
    books: 3,
    sunglass: 1,
    Keyboard: 5,
    mouse: 1,
    pen: 25

}

var penCount = shoppingCart['mouse'];

console.log(penCount);

var properties = Object.keys(shoppingCart);
var propertyValues = Object.values(shoppingCart);

console.log(properties);
console.log(propertyValues);

