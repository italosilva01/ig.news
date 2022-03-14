import Head from "next/head"; //função do Next
import { SubscribeButton } from "../components/SubscribeButton";
import style from "./home.module.scss";

export default function Home() {
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
            Get acess to all the publications <span>for $9,90 month</span>
          </p>
          <SubscribeButton />
        </section>
        <img src="/images/avatar.svg" alt="Girl coding" />
      </main>
    </>
  );
}
