import Head from "next/head";
import Link from "next/link";

export default function Container({ children }) {
  return (
    <>
      <Head>
        <link
          href="https://fonts.googleapis.com/icon?family=Material+Icons"
          rel="stylesheet"
        />
        <title>Universities</title>
      </Head>

      <header className="p-4 text-center">
        <Link href="/">
          <a className="flex items-center justify-center">
            <span className="mr-5 material-icons">school</span>
            Universities from México
          </a>
        </Link>
      </header>

      <br />

      {children}
    </>
  );
}
