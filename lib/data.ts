import regions from '@/data/regions.sample.json';
import products from '@/data/products.sample.json';

export type Lang = 'en' | 'th';

export type GeographyNodeType = 'country' | 'region' | 'subregion' | 'appellation';

export interface GeographyNode {
  id: string;
  type: GeographyNodeType;
  parentId: string | null;
  slug: string;
  name_en: string;
  name_th: string;
  description_en: string;
  description_th: string;
  hierarchy: string[];
  facts: {
    classification?: string;
    climate?: string;
    soil?: string;
    grapes?: string[];
    wineStyle?: string;
  };
  center: [number, number];
}

export interface Product {
  sku: string;
  name: string;
  image: string;
  priceTHB: number;
  url: string;
  regionContentIds: string[];
}

export const regionNodes = regions as GeographyNode[];
export const productCatalog = products as Product[];

export function getNodeByHierarchy(lang: Lang, segments: string[]): GeographyNode | null {
  const node = regionNodes.find((item) =>
    item.hierarchy.every((value, idx) => value === segments[idx]) && item.hierarchy.length === segments.length
  );
  if (!node) return null;
  return node;
}

export function getChildren(parentId: string): GeographyNode[] {
  return regionNodes.filter((item) => item.parentId === parentId);
}

export function getNodeName(node: GeographyNode, lang: Lang): string {
  return lang === 'th' ? node.name_th : node.name_en;
}

export function searchNodes(lang: Lang, query: string): GeographyNode[] {
  const q = query.toLowerCase();
  return regionNodes.filter((node) => {
    const name = lang === 'th' ? node.name_th : node.name_en;
    return name.toLowerCase().includes(q);
  });
}
