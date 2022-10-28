import Head from 'next/head';
import Link from 'next/link';
import React from 'react';

export default function Layout({ title, children }) {
  return (
    <>
      <Head>
        <title>{title ? title + ' - Zona' : 'Zona'}</title>
        <meta
          name="description"
          content="Ecommerce Website amazon clone Zona"
        />
        <link rel="icon" href="/zona.png" />
      </Head>
      <div className="flex min-h-screen flex-col justify-between ">
        {/* justify between pour espacé entre header /main / footer */}
        <header className="">
          <nav className="flex h-12 items-center px-4 justify-between shadow-md">
            <Link href="/" className="text-lg font-bold">
              zona
            </Link>
            <div className="">
              <Link href="/paiement" className="p-2">
                Paiement
              </Link>
              <Link href="/connexion" className="p-2">
                Connexion
              </Link>
            </div>
          </nav>
        </header>
        <main className="container m-auto mt-4 px-4">{children}</main>
        <footer className="flex h-10 justify-center items-center shadow-inner">
          Footer
        </footer>
      </div>
    </>
  );
}
