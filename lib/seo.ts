import type { Metadata } from 'next';
import type { GeographyNode, Lang } from './data';
import { getNodeName } from './data';

export function buildNodeMetadata(lang: Lang, node: GeographyNode): Metadata {
  const nodeName = getNodeName(node, lang);
  const description = lang === 'th' ? node.description_th : node.description_en;

  return {
    title: `${nodeName} | Wine Atlas`,
    description,
    alternates: {
      languages: {
        en: `/en/${node.hierarchy.join('/')}`,
        th: `/th/${node.hierarchy.join('/')}`
      }
    },
    openGraph: {
      title: `${nodeName} Wine Region Guide`,
      description,
      type: 'article'
    }
  };
}
