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

      <header className="p-4 text-center bg-zinc-400">
        <Link href="/">
            <a className="flex items-center justify-center hover:text-yellow-300">
            <span className="mr-5 material-icons">school</span>
            <h1 className="text-xl">Universities of Mexico</h1>
          </a>
        </Link>
      </header>

      <br />

      {children}
    </>
  );
}
