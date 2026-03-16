import Link from 'next/link';
import { notFound } from 'next/navigation';
import { WineMap } from '@/components/map/WineMap';
import { regionNodes } from '@/lib/data';
import { supportedLangs, t } from '@/lib/i18n';

export default function HomePage({ params }: { params: { lang: 'en' | 'th' } }) {
  const { lang } = params;
  if (!supportedLangs.includes(lang)) notFound();
  const text = t(lang);

  return (
    <main className="container grid">
      <header className="card">
        <h1>{text.title}</h1>
        <p>{text.subtitle}</p>
        <div style={{ display: 'flex', gap: 12 }}>
          <Link href={`/${lang}/browse`} className="card">
            {text.browse}
          </Link>
          <Link href={`/${lang}/france`} className="card">
            Start with France
          </Link>
        </div>
      </header>

      <section className="card">
        <h2>{text.map}</h2>
        <WineMap nodes={regionNodes} lang={lang} />
      </section>
    </main>
  );
}
