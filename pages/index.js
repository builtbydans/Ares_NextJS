import React from 'react'
import { client, urlFor } from '../lib/client';
import Image from 'next/image';
import Link from 'next/link';
import { Header, Hero, Cart, Footer, Layout, TopSelling, ProductCard } from '../components';

const Home = ({ products }) => {
  return (
    <>
      <Link href={'https://google.com'}>
        <Image
          src="/images/ares-logo.png"
          height={22}
          width={100}
          alt="ares logo"
        />
      </Link>

      <div>
        {products?.map((product) =>
        <>
          <ProductCard
            name = {product.name}
            image = {urlFor(product.image[0]).width(400).url()}
            price = '50'
          />
        </>
        )}
      </div>
    </>
  );
};

export const getServerSideProps = async () => {
  const query = '*[_type == "product"]';
  const products = await client.fetch(query);

  return {
    props: {products}
  };
};

export default Home;
