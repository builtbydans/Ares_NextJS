import Image from 'next/image';
import { useState } from 'react';
import Link from 'next/link';
import Card from 'react-bootstrap/Card';
import styled from 'styled-components';
import { urlFor } from '../lib/client';

export const StyledCard = styled(Card)`
  width: '25rem';
  border: none;
`;

const ProductCard = ({ product: {name, image, slug, price} }) => {

  const mainImage = urlFor(image && image[0]);

  return (
    <>
      <Link href={`/product/${slug.current}`}>
        <StyledCard >
          <Card.Body>
            <>
              <img
                src={mainImage}
                onMouseOver={(e) => e.currentTarget.src = urlFor(image && image[1])}
                onMouseOut={(e) => e.currentTarget.src = mainImage}
                height={350}
                alt="image"
              />
            </>
            <p>{name}</p>
            <p>£{price}</p>
          </Card.Body>
        </StyledCard>
      </Link>
    </>
  )
}

export default ProductCard;
