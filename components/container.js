import Head from 'next/head'
import Link from 'next/link'

export default function Container({ children }) {
    return <>
        <Head>
            <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet" />
            <title>Universities</title>
        </Head>

        <header>
            <Link href="/">
                <a>
                    <span className="material-icons">
                        school
                    </span>

                    Universities from México
                </a>
            </Link>
        </header>

        <br/>

        { children }
    </>
}
