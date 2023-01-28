var shoppingCart = {
    books: 3,
    sunglass: 1,
    Keyboard: 5,
    mouse: 1,
    pen: 25,
    shoes: 2

}



/* for (var i = 0; i < keys.length; i++) {
    // console.log(keys[i]);
    // console.log(values[i]);

    var propertyName = keys[i];
    var propertyValues = values[i];
    console.log(propertyName, propertyValues);


} */

// for (var propertyName in shoppingCart) {
//     const value = shoppingCart[propertyName];
//     console.log(propertyName, value);
// }


function average(avgArr) {
    var total = 0;
    for (var i = 0; i < avgArr.length; i++) {

        total = total + avgArr[i];
    }
    return total / avgArr.length;
}

var avgArr = [10, 20, 30, 40, 50];

console.log(average(avgArr));