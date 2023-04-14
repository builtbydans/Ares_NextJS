import React from 'react'
import { client } from '../lib/client';
import Image from 'next/image';
import Link from 'next/link';
import { Header, Hero, Cart, Footer, Layout, TopSelling, ProductCard } from '../components';

const Home = ({ products }) => {
  return (
    <>
      <Link href={'/'}>
        <Image
          src="/images/ares-logo.png"
          height={22}
          width={100}
          alt="ares logo"
        />
      </Link>

      <div className="d-flex">
        {products?.map((product) =>
        <>
          <ProductCard key={product._id} product={product} />
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
