import bcrypt from 'bcryptjs';

const data = {
  users: [
    {
      name: 'Giovanni',
      email: 'giovanni@gmail.com',
      password: bcrypt.hashSync('123456'),
      isAdmin: true,
    },
    {
      name: 'User1',
      email: 'user1@hotmail.com',
      password: bcrypt.hashSync('123456'),
      isAdmin: false,
    },
  ],
  bannerImages: [
    {
      id: 1,
      bigImg: 'https://i.imgur.com/B2EmrK0.png',
    },
    {
      id: 2,
      bigImg: 'https://i.imgur.com/s4Wty9Q.jpg',
    },
    {
      id: 3,
      bigImg: 'https://i.imgur.com/ZUpWIvt.jpg',
    },
    {
      id: 4,
      bigImg: 'https://i.imgur.com/krRWSTa.jpg',
    },
  ],

  categories: [
    {
      id: 1,
      category: 'new-arrives',
      src: 'https://i.imgur.com/cPWA3LU.jpg',
    },
    {
      id: 2,
      category: 'pop-culture',
      src: 'https://i.imgur.com/UVrYNAX.jpg',
    },
    {
      id: 3,
      category: 'anime',
      src: 'https://i.imgur.com/lDquift.jpg',
    },
    {
      id: 4,
      category: 'retro',
      src: 'https://i.imgur.com/0LleoQs.jpg',
    },
  ],
  products: [
    {
      name: 'Free Shirt',
      slug: 'free-shirt',
      category: 'Shirts',
      image: 'https://i.imgur.com/tkg3nlL.jpg',
      price: 59,
      brand: '-',
      rating: 4.5,
      numReviews: 8,
      countInStock: 20,
      description: 'A popular shirt',
      size: 'L',
      isFeatured: true,
    },
    {
      name: 'Fit Shirt',
      slug: 'fit-shirt',
      category: 'Shirts',
      image: 'https://i.imgur.com/8phPaXE.png',
      price: 59,
      brand: '-',
      rating: 3.2,
      numReviews: 10,
      countInStock: 20,
      description: 'A popular shirt',
      size: 'L',
      isFeatured: true,
    },
    {
      name: 'Slim Shirt',
      slug: 'slim-shirt',
      category: 'Shirts',
      image: 'https://i.imgur.com/hquDHD7.png',
      price: 59,
      brand: '-',
      rating: 4.5,
      numReviews: 3,
      countInStock: 20,
      description: 'A popular shirt',
      size: 'L',
    },
  ],
};

export default data;
