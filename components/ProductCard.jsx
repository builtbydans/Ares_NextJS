import Image from 'next/image';
import Link from 'next/link';
import Card from 'react-bootstrap/Card';
import styled from 'styled-components';
import { urlFor } from '../lib/client';

export const StyledCard = styled(Card)`
  width: '25rem';
  border: none;
`;

const ProductCard = ({ product: {name, image, slug, price} }) => {
  return (
    <>
      <Link href={`/product/${slug.current}`}>
        <StyledCard >
          <Card.Body>
            <img
              src={urlFor(image && image[0])}
              height={500}
              width={400}
              alt="image"
            />
            <p>{name}</p>
            <p>£{price}</p>
          </Card.Body>
        </StyledCard>
      </Link>
    </>
  )
}

export default ProductCard;
