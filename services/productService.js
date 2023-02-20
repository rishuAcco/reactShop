const PRODUCTS = [
    {
        id: 100,
        name: 'iPhone 13',
        price: 70000,
        image: require('../assets/products/iphone.jpg'),
        description: 'The iPhone 13 display has rounded corners that follow a beautiful curved design, and these corners are within a standard rectangle. When measured as a standard rectangular shape, the screen is 6.06 inches diagonally (actual viewable area is less)'
    },
    {
        id: 101,
        name: 'Boat headphone',
        price: 5000,
        image: require('../assets/products/headphone.jpg'),
        description: 'boAt Bass Heads polished metal earphonesare designed to give you an experience that no other brand can match. It has an incredible sonic clarity with "super extra bass". With tangle-free flat cables, you are expected to be hassle-free.'
    },
    {
        id: 102,
        name: 'Nilkon Camera',
        price: 50000,
        image: require('../assets/products/camera.jpg'),
        description: 'A cupcake (also British English: fairy cake; Hiberno-English: bun; Australian English: fairy cake or patty cake[1]) is a small cake designed to serve one person.'
    }
];
export function getProducts() {
    return PRODUCTS;
}
export function getProduct(id) {
    return PRODUCTS.find((product) => (product.id == id));
}