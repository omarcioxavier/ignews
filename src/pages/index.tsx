import Head from "next/head";
import { SubscribeButton } from "../components/SubscribeButton";
import styles from "./home.module.scss";

export default function Home() {
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
            for <span>$ 9.90</span> per month.
          </p>
          <SubscribeButton />
        </section>
        <img src="/images/avatar.svg" alt="Girl code" />
      </main>
    </>
  )
}
