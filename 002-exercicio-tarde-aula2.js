let products = [
    { name: 'Macbook', price: 1300, quantity: 40, colors: ['silver', 'black', 'white'] },
    { name: 'Iphone', price: 1000, quantity: 50, colors: ['silver', 'red', 'white'] },
    { name: 'Pendrive', price: 10, quantity: 10, colors: [] },
    { name: 'Headset', price: 50, quantity: 0, colors: ['black'] },
    { name: 'Mouse', price: 20, quantity: 5, colors: ['white', 'black', 'blue'] },
    { name: 'Tablet', price: 500, quantity: 20, colors: ['white', 'black'] },
    { name: 'USB adaptor', price: 5, quantity: 0, colors: [] },
    { name: 'Keyboard', price: 30, quantity: 35, colors: ['white'] },
    { name: 'Gamepad', price: 30, quantity: 25, colors: ['black', 'silver'] },
    { name: 'Monitor', price: 200, quantity: 3, colors: [] },
    ];

let index = 1;

const addIndex = (product, index) => {
    product.index = index
}

const printName = (product) => {
    console.log(product.name);
}

const printBlackProducts = products.filter(function(product){
    return product.colors.includes('black',0)
})

const printNoColorProducts =  products.filter(function(product){
    return !product.colors.length;
})

products.forEach(function(product){
    addIndex(product,index);
    index+=1;
})

products.forEach(function(product){
    printName(product)
})

const printIndex3 = products.find(product => product.index === 3);
console.log(printIndex3);
console.log(printBlackProducts);
console.log(printNoColorProducts);