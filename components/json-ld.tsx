import { faqs, services } from '@/lib/content';
import { absoluteUrl, site } from '@/lib/site';

export function JsonLd() {
  const businessId = absoluteUrl('/#business');
  const data = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'LocalBusiness',
        '@id': businessId,
        name: `طلاکوب ${site.name}`,
        alternateName: [site.name, site.nameEn, `${site.nameEn} Gold Foil Stamping`],
        description: `خدمات طلاکوب روی کارتن، جعبه، لیبل، کارت ویزیت و ساک دستی در ${site.city}`,
        url: absoluteUrl('/'),
        logo: absoluteUrl('/icon-512.png'),
        image: absoluteUrl('/og.png'),
        telephone: site.phone,
        email: site.email,
        priceRange: '$$',
        address: {
          '@type': 'PostalAddress',
          streetAddress: site.address,
          addressLocality: site.city,
          addressRegion: site.region,
          addressCountry: 'IR',
        },
        areaServed: { '@type': 'Country', name: 'Iran' },
        openingHours: site.openingHoursSchema,
        sameAs: [`https://instagram.com/${site.instagram}`, `https://t.me/${site.telegram}`],
        knowsAbout: ['طلاکوب', 'Hot Foil Stamping', 'فویل طلایی', 'کلیشه طلاکوب', 'طلاکوب برجسته', 'بسته‌بندی'],
        hasOfferCatalog: {
          '@type': 'OfferCatalog',
          name: 'خدمات طلاکوبی',
          itemListElement: services.map((s) => ({
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: s.title,
              description: s.description,
              serviceType: 'Hot Foil Stamping',
              provider: { '@id': businessId },
              areaServed: { '@type': 'Country', name: 'Iran' },
            },
          })),
        },
      },
      {
        '@type': 'WebSite',
        '@id': absoluteUrl('/#website'),
        url: absoluteUrl('/'),
        name: `طلاکوب ${site.name}`,
        inLanguage: 'fa-IR',
        publisher: { '@id': businessId },
      },
      {
        '@type': 'WebPage',
        '@id': absoluteUrl('/#webpage'),
        url: absoluteUrl('/'),
        name: `طلاکوب ${site.name} | ${site.tagline}`,
        isPartOf: { '@id': absoluteUrl('/#website') },
        about: { '@id': businessId },
        inLanguage: 'fa-IR',
        primaryImageOfPage: absoluteUrl('/og.png'),
      },
      {
        '@type': 'FAQPage',
        '@id': absoluteUrl('/#faq'),
        mainEntity: faqs.map((f) => ({
          '@type': 'Question',
          name: f.q,
          acceptedAnswer: { '@type': 'Answer', text: f.a },
        })),
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      // JSON-LD must be raw JSON; escape "<" so content can never close the tag.
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, '\\u003c') }}
    />
  );
}
