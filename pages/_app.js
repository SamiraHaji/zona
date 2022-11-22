import { StoreProvider } from '../utils/Store';
import { SessionProvider, useSession } from 'next-auth/react';
import '../styles/globals.css';
import { useRouter } from 'next/router';

function MyApp({ Component, pageProps: { session, ...pageProps } }) {
  return (
    <SessionProvider session={session}>
      <StoreProvider>
        {Component.auth ? (
          <Auth>
            <Component {...pageProps} />
          </Auth>
        ) : (
          <Component {...pageProps} />
        )}
      </StoreProvider>
    </SessionProvider>
  );
}
function Auth({ children }) {
  const router = useRouter();
  const { status } = useSession({
    required: true,
    onUnauthenticated() {
      router.push('/unauthorized?message=Une connexion est obligatoire.....');
    },
  });
  if (status === 'En cours de chargement') {
    return <div>En cours de chargement...</div>;
  }

  return children;
}
export default MyApp;
