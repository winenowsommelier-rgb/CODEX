import Link from 'next/link';

interface BreadcrumbsProps {
  lang: 'en' | 'th';
  segments: string[];
}

export function Breadcrumbs({ lang, segments }: BreadcrumbsProps) {
  const crumbs = segments.map((_, idx) => segments.slice(0, idx + 1));

  return (
    <nav aria-label="breadcrumb" style={{ marginBottom: '1rem' }}>
      <Link href={`/${lang}`}>Home</Link>
      {crumbs.map((crumb) => (
        <span key={crumb.join('/')}> {' > '} <Link href={`/${lang}/${crumb.join('/')}`}>{crumb[crumb.length - 1]}</Link></span>
      ))}
    </nav>
  );
}
