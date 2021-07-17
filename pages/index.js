import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
    return (
        <div className={styles.container}>
            <Head>
                <title>WATFOI - New website coming soon</title>
                <link rel="icon" href="/favicon.ico"/>

                <title>We are the future of IT - Novi veb-sajt stiže brže nego što misliš</title>

                <title>We are the future of IT - Novi veb-sajt stiže brže nego što misliš</title>
                <meta name="title" content="We are the future of IT - Novi veb-sajt stiže brže nego što misliš"/>
                <meta name="description"
                      content="Studentska IT konferencija We are the FUTURE of IT / 11-14. oktobar 2021 / Studentsko odrmaralište Ratko Mitrović, Zlatibor. Vidimo se!"/>

                <meta property="og:type" content="website"/>
                <meta property="og:url" content="https://wearethefutureofit.org/"/>
                <meta property="og:title" content="We are the future of IT - Novi veb-sajt stiže brže nego što misliš"/>
                <meta property="og:description"
                      content="Studentska IT konferencija We are the FUTURE of IT / 11-14. oktobar 2021 / Studentsko odrmaralište Ratko Mitrović, Zlatibor. Vidimo se!"/>
                <meta property="og:image"
                      content="/watfoi.png"/>

                <meta property="twitter:card" content="summary_large_image"/>
                <meta property="twitter:url" content="https://wearethefutureofit.org/"/>
                <meta property="twitter:title"
                      content="We are the future of IT - Novi veb-sajt stiže brže nego što misliš"/>
                <meta property="twitter:description"
                      content="Studentska IT konferencija We are the FUTURE of IT / 11-14. oktobar 2021 / Studentsko odrmaralište Ratko Mitrović, Zlatibor. Vidimo se!"/>
                <meta property="twitter:image"
                      content="/watfoi.png"/>
            </Head>

            <main className={styles.main}>
                <h1 className={styles.title}>
                    <img src="/logo.png" alt="Vercel Logo" className={styles.watfoilogo}/>
                </h1>

                <p className={styles.description}>
                    Naš novi veb-sajt stiže brže nego što misliš 🚀
                </p>

                <p className={styles.description}>
                    Do tada nas možeš pratiti na:
                </p>
                <div className={styles.grid}>
                    <a href="https://www.facebook.com/watfoi/" target="_blank" className={styles.card}>
                        <h3>Facebook</h3>
                    </a>

                    <a href="https://www.instagram.com/wearethefutureofit/" target="_blank" className={styles.card}>
                        <h3>Instagram</h3>
                    </a>

                    <a href="https://www.linkedin.com/company/wearethefutureofit" target="_blank" className={styles.card}>
                        <h3>Linkedin</h3>
                    </a>
                </div>
            </main>

            <footer className={styles.footer}>
                <a
                    href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Powered by WATFOI & {' '}
                    <img src="/vercel.svg" alt="Vercel Logo" className={styles.logo}/>
                </a>
            </footer>
        </div>
    )
}
