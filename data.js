const faker = require("faker");

faker.seed(123);

const productsData = [...Array(50)].map((item) => ({
    productId: faker.datatype.uuid(),
    name: faker.commerce.productName(),
    author: faker.random.arrayElement([
        "Napoleon Hill",
        "J.K Rowling",
        "Dr Joseph Murphy",
        "Dale Carnegie",
        "George S. Clason",
        "Francesc Miralles",
        "Hector Garcia",
    ]),
    image: faker.random.arrayElement([
        "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1595674533l/23692271._SY475_.jpg",
        "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1405259930l/18774964.jpg",
        "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1447957962l/25744928._SY475_.jpg",
        "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1546910265l/2.jpg",
        "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1581625286l/10664113._SX318_.jpg",
        "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1391275636l/6732019.jpg",
        "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1581527774l/41881472._SY475_.jpg",
        "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1535115320l/40121378._SY475_.jpg",
        "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1400863577l/18077903.jpg",
        "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1506026635l/35133922._SY475_.jpg",
        "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1457284880l/27220736.jpg",
        "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1486131451l/853510._SY475_.jpg",
        "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1496398176l/34272550.jpg",
        "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1529358577l/39939417._SY475_.jpg",
        "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1394798630l/99561.jpg",
        "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1360206420l/11870085.jpg",
        "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1503002776l/35504431._SY475_.jpg",
        "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1483412266l/865.jpg",
        "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1414347376l/18050143.jpg",
        "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1511288482l/11084145._SY475_.jpg",
    ]),
    price: faker.commerce.price(),
    priceDiscounted: faker.commerce.price(),
    inStock: faker.datatype.boolean(),
    fastDelivery: faker.datatype.boolean(),
    dateAdded: faker.date.past().getTime(),
    salesCount: faker.datatype.number(),
    ratings: faker.random.arrayElement([
        0.5,
        1,
        1.5,
        2,
        2.5,
        3,
        3.5,
        4,
        4.5,
        5,
    ]),
    offer: faker.random.arrayElement([
        "Save 50",
        "70% bonanza",
        "Republic Day Sale",
    ]),
    genre: faker.random.arrayElement([
        "Biography",
        "Business",
        "Fantasy",
        "Fiction",
        "Historical Fiction",
        "Humor and Comedy",
        "Mystery",
        "Nonfiction",
    ]),
}));

const cart = [
    {
        userId: "f3d3a67b-a4a9-4a42-aaeb-9802732be21d",
        cart: [],
    },
];
const wishList = [
    {
        userId: "f3d3a67b-a4a9-4a42-aaeb-9802732be21d",
        wishList: [],
    },
];
const credentials = [
    {
        userId: "f3d3a67b-a4a9-4a42-aaeb-9802732be21d",
        username: "rohit",
        password: "rohit",
    },
];

module.exports = { productsData, credentials, cart, wishList };
