import bcrypt from 'bcryptjs';
const data = {
  users: [
    {
      name: 'Ankit',
      email: 'admin@example.com',
      password: bcrypt.hashSync('123456'),
      isAdmin: true,
    },
    {
      name: 'Ayush',
      email: 'user@example.com',
      password: bcrypt.hashSync('1234567'),
      isAdmin: false,
    },
  ],
  products: [
    {
      //_id: 1,
      name: 'REGISTAR',
      slug: 'register',
      image: '/images/p6.jpeg', //679px*829px
      price: 85,
      countinstock: 98,
      rating: 4.5,
      numReviews: 21,
      description: 'highs quality product ',
    },
    {
      // _id: 2,
      name: 'CLOTH HOLDER',
      slug: 'cloth holder',
      image: '/images/p7.jpeg',
      price: 145,
      countinstock: 90,
      rating: 4.5,
      numReviews: 26,
      description: 'high quality product ',
    },
    {
      //_id: 3,
      name: 'SHAMPOO',
      slug: 'shampoo',
      image: '/images/p3.jpeg',
      price: 135,
      countinstock: 90,
      rating: 4.5,
      numReviews: 23,
      description: 'high quality product ',
    },
    {
      //_id: 4,
      name: 'WATER BOTTLES',
      slug: 'water bottles',
      image: '/images/p4.jpeg',
      price: 85,
      countinstock: 100,
      rating: 4.5,
      numReviews: 34,
      description: 'high quality product ',
    },
    {
      //_id: 1,
      name: 'DEODARANT',
      slug: 'deodarant',
      image: '/images/p5.jpeg', //679px*829px
      price: 1099,
      countinstock: 48,
      rating: 4.5,
      numReviews: 21,
      description: 'highs quality product ',
    },
    {
      //_id: 1,
      name: 'TOMATO',
      slug: 'tomato',
      image: '/images/p1.jpeg', //679px*829px
      price: 45,
      countinstock: 48,
      rating: 4.5,
      numReviews: 21,
      description: 'highs quality product ',
    },
    {
      //_id: 1,
      name: 'ONION',
      slug: 'onion',
      image: '/images/p2.jpeg', //679px*829px
      price: 35,
      countinstock: 48,
      rating: 4.5,
      numReviews: 21,
      description: 'highs quality product ',
    },
    {
      //_id: 1,
      name: 'RICE',
      slug: 'rice',
      image: '/images/p8.jpeg', //679px*829px
      price: 105,
      countinstock: 65,
      rating: 4.5,
      numReviews: 21,
      description: 'highs quality product ',
    },
  ],
};
export default data;
