import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import image1 from '../assets/stock1.jpeg';
import image2 from '../assets/stock2.jpeg';
import image3 from '../assets/stock3.jpeg';
import image4 from '../assets/stock4.jpeg';
import image5 from '../assets/stock5.jpeg';
import image6 from '../assets/stock6.jpeg';
import image7 from '../assets/stock7.jpeg';
import image8 from '../assets/stock8.jpeg';
import image9 from '../assets/stock9.jpeg';



export default function StandardImageList() {
  return (
    <ImageList sx={{ width: 500, height: 450 }} cols={3} rowHeight={164}>
        <ImageListItem key={image1}>
          <img
            src={`${image1}?w=164&h=164&fit=crop&auto=format`}
            srcSet={`${image1}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
            alt={"nature"}
            loading="lazy"
          />
        </ImageListItem>
        <ImageListItem key={image2}>
          <img
            src={`${image2}?w=164&h=164&fit=crop&auto=format`}
            srcSet={`${image2}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
            alt={"nature"}
            loading="lazy"
          />
        </ImageListItem>
        <ImageListItem key={image3}>
          <img
            src={`${image3}?w=164&h=164&fit=crop&auto=format`}
            srcSet={`${image3}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
            alt={"nature"}
            loading="lazy"
          />
        </ImageListItem>
        <ImageListItem key={image4}>
          <img
            src={`${image4}?w=164&h=164&fit=crop&auto=format`}
            srcSet={`${image4}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
            alt={"nature"}
            loading="lazy"
          />
        </ImageListItem>
        <ImageListItem key={image5}>
          <img
            src={`${image5}?w=164&h=164&fit=crop&auto=format`}
            srcSet={`${image5}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
            alt={"nature"}
            loading="lazy"
          />
        </ImageListItem>
        <ImageListItem key={image6}>
          <img
            src={`${image6}?w=164&h=164&fit=crop&auto=format`}
            srcSet={`${image6}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
            alt={"nature"}
            loading="lazy"
          />
        </ImageListItem>

        <ImageListItem key={image7}>
          <img
            src={`${image7}?w=164&h=164&fit=crop&auto=format`}
            srcSet={`${image7}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
            alt={"nature"}
            loading="lazy"
          />
        </ImageListItem>
        <ImageListItem key={image8}>
          <img
            src={`${image8}?w=164&h=164&fit=crop&auto=format`}
            srcSet={`${image8}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
            alt={"nature"}
            loading="lazy"
          />
        </ImageListItem>
        <ImageListItem key={image9}>
          <img
            src={`${image9}?w=164&h=164&fit=crop&auto=format`}
            srcSet={`${image9}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
            alt={"nature"}
            loading="lazy"
          />
        </ImageListItem>
    </ImageList>
  );
}