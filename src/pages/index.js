import Head from 'next/head';

import Hero from '@/components/Hero';
import Navbar from '@/components/nav';
import Features from '@/components/Features';
import ForYou from '@/components/ForYou';
import Teams from '@/components/Teams';
import Hiring from '@/components/Hiring';
import Help from '@/components/Help';


export default function Home() {
  return (
    <>
      <Head>
        <title>Kayana</title>
        <meta name='description' content='Generated by create next app' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <Navbar />
      <Hero />
      <Features/>
      <ForYou/>
      <Teams/>
      <Hiring/>
      <Help/>
      
    </>
  );
}
