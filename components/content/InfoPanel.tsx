import type { GeographyNode, Lang } from '@/lib/data';
import { getNodeName } from '@/lib/data';
import { t } from '@/lib/i18n';

export function InfoPanel({ node, lang }: { node: GeographyNode; lang: Lang }) {
  const text = t(lang);
  const description = lang === 'th' ? node.description_th : node.description_en;

  return (
    <aside className="card">
      <h2>{getNodeName(node, lang)}</h2>
      <p>{description}</p>
      <h3>{text.facts}</h3>
      <ul>
        {node.facts.classification && <li>Classification: {node.facts.classification}</li>}
        {node.facts.climate && <li>Climate: {node.facts.climate}</li>}
        {node.facts.soil && <li>Soil: {node.facts.soil}</li>}
        {node.facts.grapes && node.facts.grapes.length > 0 && <li>Grapes: {node.facts.grapes.join(', ')}</li>}
        {node.facts.wineStyle && <li>Wine style: {node.facts.wineStyle}</li>}
      </ul>
    </aside>
  );
}
