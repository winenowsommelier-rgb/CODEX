import { productCatalog } from './data';

export function getRelatedProducts(contentId: string, limit = 10) {
  return productCatalog
    .filter((product) => product.regionContentIds.includes(contentId))
    .slice(0, Math.max(1, Math.min(limit, 10)));
}
