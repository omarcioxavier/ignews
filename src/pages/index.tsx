import { GetServerSideProps, GetStaticProps } from "next";
import Head from "next/head";
import { SubscribeButton } from "../components/SubscribeButton";
import { stripe } from "../services/stripe";
import styles from "./home.module.scss";

interface HomeProps {
  product: {
    priceId: string,
    amount: number
  }
}

export default function Home({ product }: HomeProps) {
  return (
    <>
      <Head>
        <title>
          Ignews - Home
        </title>
      </Head>
      <main className={styles.contentContainer}>
        <section className={styles.hero}>
          <span>👏 Hey, welcome</span>
          <h1>News about the <span>React</span> world.</h1>
          <p>
            Get access to all the publications <br />
            for <span>{product.amount}</span> per month.
          </p>
          <SubscribeButton priceId={product.priceId} />
        </section>
        <img src="/images/avatar.svg" alt="Girl code" />
      </main>
    </>
  )
}

/// Usa static page
export const getStaticProps: GetStaticProps = async () => {
  const price = await stripe.prices.retrieve("price_1MMgEFANInSjkmaFJ9AFV3MD", {
    expand: ["product"]
  });

  const product = {
    priceId: price.id,
    amount: new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD"
    }).format((price.unit_amount ?? 0) / 100)
  };

  return {
    props: {
      product
    },
    revalidate: 60 * 60 * 24 // 24 horas
  }
}
/// Não usa static page
/*
export const getServerSideProps: GetServerSideProps = async () => {
  const price = await stripe.prices.retrieve("price_1MMgEFANInSjkmaFJ9AFV3MD", {
    expand: ["product"]
  });
  
  const product = {
    priceId: price.id,
    amount: new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD"
    }).format((price.unit_amount ?? 0) / 100)
  };
  
  return {
    props: {
      product
    }
  }
}
*/