import { Main } from "next/document";
import Head from "next/head";
import styles from "./styles.module.scss";

export default function Posts() {
    return (
        <>
            <Head>
                <title>Posts | IGnews</title>
            </Head>
            <main className={styles.conainer}>
                <div className={styles.posts} >
                    <a href="#">
                        <time>
                            23 de janeiro de 2023
                        </time>
                        <strong>
                            Título teste post aleatório 1
                        </strong>
                        <p>Descrição teste post aleatório 123teste post aleatório 123teste post aleatório 123teste post aleatório 123 teste post aleatório 123.</p>
                    </a>
                    <a href="#">
                        <time>
                            28 de janeiro de 2023
                        </time>
                        <strong>
                            Título teste post aleatório 2
                        </strong>
                        <p>Descrição teste post aleatório 123teste post aleatório 123teste post aleatório 123teste post aleatório 123 teste post aleatório 123.</p>
                    </a>
                </div>
            </main>
        </>);
};
