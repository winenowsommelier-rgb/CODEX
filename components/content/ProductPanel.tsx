import { getRelatedProducts } from '@/lib/product-linking';
import { t } from '@/lib/i18n';
import type { Lang } from '@/lib/data';

export function ProductPanel({ contentId, lang }: { contentId: string; lang: Lang }) {
  const products = getRelatedProducts(contentId, 8);
  const text = t(lang);

  return (
    <section className="card">
      <h3>{text.relatedProducts}</h3>
      <div className="grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))' }}>
        {products.map((product) => (
          <a key={product.sku} href={product.url} target="_blank" rel="noreferrer" className="card">
            <img src={product.image} alt={product.name} style={{ width: '100%', borderRadius: 8 }} />
            <div>{product.name}</div>
            <strong>฿{product.priceTHB.toLocaleString()}</strong>
          </a>
        ))}
      </div>
    </section>
  );
}
