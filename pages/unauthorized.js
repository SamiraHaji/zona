import React from 'react';
import Layout from '../components/Layout';
import { useRouter } from 'next/router';

export default function Unauthorized() {
  const router = useRouter();
  const { message } = router.query;
  return (
    <Layout title="Page non autorisée">
      <h1 className="text-xl">Accès Refusé</h1>
      {message && <div className="mb-4 text-red-500">{message}</div>}
    </Layout>
  );
}
