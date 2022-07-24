import Head from "next/head"; //função do Next
import {GetStaticProps} from 'next';
import { SubscribeButton } from "../components/SubscribeButton";
import style from "./home.module.scss";
import { stripe } from "../services/stripe";

interface Products{
  priceid:string,
  amount:number

}

export default function Home({priceid,amount}:Products) {
  return (
    <>
      <Head>
        <title>Inicio | ig.news</title>
      </Head>

      <main className={style.contentContainer}>
        <section className={style.hero}>
          <span>👏 Hey, welcome </span>
          <h1>
            News about the <span>React world</span>
          </h1>
          <p>
            Get acess to all the publications <span>for {amount} month</span>
          </p>
          <SubscribeButton priceId={priceid} />
        </section>
        <img src="/images/avatar.svg" alt="Girl coding" />
      </main>
    </>
  );
}

export const getStaticProps:GetStaticProps = async() =>{
  //Função executa no lado do servidor

  const price = await stripe.prices.retrieve('price_1KCRg6Cbmklckrvo18wmRrF0') 

  const product = {
    priceId : price.id,
    amount:price.unit_amount,
  }

  return {
    props:{
      product,
    },
    revalidate: 60*60*24 //24hours 
  }

}

