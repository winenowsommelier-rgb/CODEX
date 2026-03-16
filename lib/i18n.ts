import type { Lang } from './data';

export const supportedLangs: Lang[] = ['en', 'th'];

const dictionary = {
  en: {
    title: 'Wine Atlas',
    subtitle: 'Explore wine regions from country to appellation.',
    browse: 'Browse Mode',
    map: 'Map Mode',
    relatedProducts: 'Related Wines',
    facts: 'Key Facts'
  },
  th: {
    title: 'แผนที่ไวน์',
    subtitle: 'สำรวจภูมิภาคไวน์ตั้งแต่ประเทศถึงแอปเปลลาซิยง',
    browse: 'โหมดสำรวจ',
    map: 'โหมดแผนที่',
    relatedProducts: 'ไวน์ที่เกี่ยวข้อง',
    facts: 'ข้อมูลสำคัญ'
  }
} as const;

export function t(lang: Lang) {
  return dictionary[lang];
}
