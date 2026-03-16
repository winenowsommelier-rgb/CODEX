import Link from 'next/link';
import { notFound } from 'next/navigation';
import { supportedLangs, t } from '@/lib/i18n';

export default function TestPage({ params }: { params: { lang: 'en' | 'th' } }) {
  const { lang } = params;
  if (!supportedLangs.includes(lang)) notFound();

  const text = t(lang);

  return (
    <main className="container">
      <h1>{text.title} - Test Page</h1>
      <p>This page is for quick route verification and smoke testing.</p>
      <ul>
        <li>Language route is working: <strong>{lang}</strong></li>
        <li>Browse route: <Link href={`/${lang}/browse`}>/{lang}/browse</Link></li>
        <li>Sample country route: <Link href={`/${lang}/france`}>/{lang}/france</Link></li>
      </ul>
    </main>
  );
}
