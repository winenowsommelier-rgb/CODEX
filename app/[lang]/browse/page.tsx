import { notFound } from 'next/navigation';
import { BrowseSection } from '@/components/browse/BrowseSection';
import { regionNodes } from '@/lib/data';
import { supportedLangs } from '@/lib/i18n';

export default function BrowsePage({ params }: { params: { lang: 'en' | 'th' } }) {
  const { lang } = params;
  if (!supportedLangs.includes(lang)) notFound();

  const countries = regionNodes.filter((n) => n.type === 'country');
  const famousRegions = regionNodes.filter((n) => n.type === 'region').slice(0, 8);
  const appellations = regionNodes.filter((n) => n.type === 'appellation').slice(0, 8);

  return (
    <main className="container">
      <h1>Browse Wine Atlas</h1>
      <BrowseSection title="Browse by Country" nodes={countries} lang={lang} />
      <BrowseSection title="Browse by Famous Regions" nodes={famousRegions} lang={lang} />
      <BrowseSection title="Browse by Appellation" nodes={appellations} lang={lang} />
    </main>
  );
}
