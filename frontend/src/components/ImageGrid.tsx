import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';

export default function StandardImageList() {
  return (
    <ImageList sx={{ width: 500, height: 450 }} cols={3} rowHeight={164}>
      {itemData.map((item) => (
        <ImageListItem key={item.img}>
          <img
            src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
            srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
            alt={item.title}
            loading="lazy"
          />
        </ImageListItem>
      ))}
    </ImageList>
  );
}

const itemData = [
  {
    img: `/${process.env.PUBLIC_URL}/assets/stock1.jpeg`,
    title: 'Breakfast',
  },
  {
    img: '../assets/stock2.jpeg',
    title: 'Burger',
  },
  {
    img: '../assets/stock3.jpeg',
    title: 'Camera',
  },
  {
    img: '../assets/stock4.jpeg',
    title: 'Coffee',
  },
  {
    img: '../assets/stock5.jpeg',
    title: 'Hats',
  },
  {
    img: '../assets/stock6.jpeg',
    title: 'Honey',
  },
  {
    img: '../assets/stock7.jpeg',
    title: 'Basketball',
  },
  {
    img: '../assets/stock8.jpeg',
    title: 'Fern',
  },
  {
    img: '../assets/stock9.jpeg',
    title: 'Mushrooms',
  },
  {
    img: '../assets/stock1.jpeg',
    title: 'Tomato basil',
  },
  {
    img: '../assets/stock2.jpeg',
    title: 'Sea star',
  },
  {
    img: '../assets/stock3.jpeg',
    title: 'Bike',
  },
];