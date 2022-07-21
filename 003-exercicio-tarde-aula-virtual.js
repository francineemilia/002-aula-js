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

let totalQtyStorage = 0;

products.push({
    name: 'Smartphone',price:1000,quantity:200,colors: ['pink','blue','red','black']
});

const cleanStorage = (product) => {
    if (product.quantity == 0){
        products.pop();
    }
};

const checkQtyStorage = products.forEach(function(product){
    totalQtyStorage =+ product.quantity;
});

console.log(`A quantidade total de produtos no estoque é de ${totalQtyStorage}`);

const showProductAboveValue = (product, value) =>  product.price > value ? console.log(product) : null;

products.forEach(function(product){
    showProductAboveValue(product,300);
})

const printProductsWithAnOInTheName = products.filter(function(product){
    return product.name.includes('o',0)
})
console.log(printProductsWithAnOInTheName)