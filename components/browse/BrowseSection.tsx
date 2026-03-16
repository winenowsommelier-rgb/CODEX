import Link from 'next/link';
import type { GeographyNode, Lang } from '@/lib/data';
import { getNodeName } from '@/lib/data';

export function BrowseSection({
  title,
  nodes,
  lang
}: {
  title: string;
  nodes: GeographyNode[];
  lang: Lang;
}) {
  return (
    <section style={{ marginBottom: '2rem' }}>
      <h2>{title}</h2>
      <div className="grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))' }}>
        {nodes.map((node) => (
          <Link key={node.id} href={`/${lang}/${node.hierarchy.join('/')}`} className="card">
            <h3>{getNodeName(node, lang)}</h3>
            <p style={{ margin: 0, opacity: 0.8 }}>{node.type}</p>
          </Link>
        ))}
      </div>
    </section>
  );
}
