import Link from 'next/link';
import { notFound } from 'next/navigation';
import { Breadcrumbs } from '@/components/content/Breadcrumbs';
import { InfoPanel } from '@/components/content/InfoPanel';
import { ProductPanel } from '@/components/content/ProductPanel';
import { getChildren, getNodeByHierarchy } from '@/lib/data';
import { buildNodeMetadata } from '@/lib/seo';
import { supportedLangs } from '@/lib/i18n';

export function generateMetadata({ params }: { params: { lang: 'en' | 'th'; segments: string[] } }) {
  const { lang, segments } = params;
  const node = getNodeByHierarchy(lang, segments);
  if (!node) return {};
  return buildNodeMetadata(lang, node);
}

export default function GeographyPage({ params }: { params: { lang: 'en' | 'th'; segments: string[] } }) {
  const { lang, segments } = params;
  if (!supportedLangs.includes(lang)) notFound();

  const node = getNodeByHierarchy(lang, segments);
  if (!node) notFound();

  const children = getChildren(node.id);

  return (
    <main className="container grid">
      <Breadcrumbs lang={lang} segments={segments} />
      <InfoPanel node={node} lang={lang} />

      {children.length > 0 && (
        <section className="card">
          <h3>Explore Next Level</h3>
          <div className="grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))' }}>
            {children.map((child) => (
              <Link key={child.id} href={`/${lang}/${child.hierarchy.join('/')}`} className="card">
                <h4>{lang === 'th' ? child.name_th : child.name_en}</h4>
                <p style={{ margin: 0 }}>{child.type}</p>
              </Link>
            ))}
          </div>
        </section>
      )}

      <ProductPanel contentId={node.id} lang={lang} />
    </main>
  );
}
