import Image from 'next/image';
import React from 'react';

const ProductCard = ({name, image, price}) => {
  return (
    <>
      <p>{name}</p>
      <Image
        src={image}
        layout='fill'
        alt="image"
      />
      <p>£{price}</p>
    </>
  )
}

export default ProductCard;
