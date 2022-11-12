import Layout from '../components/Layout';
import ProductItem from '../components/productItem';
import data from '../outils/data';

export default function Accueil() {
  return (
    <Layout title="Accueil">
      <div className="grid grid-cols-1 gap-4 md:grid-cols-3 lg:grid-cols-4">
        {data.products.map((product) => (
          <ProductItem product={product} key={product.slug}></ProductItem>
        ))}
      </div>
    </Layout>
  );
}
