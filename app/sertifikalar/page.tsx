import type { Metadata } from 'next';
import { Award, FileText, ShieldCheck } from 'lucide-react';
import { PageFrame } from '@/components/page-frame';
import { certificates } from '@/data/site';

export const metadata: Metadata = { title: 'Sertifikalar', description: 'Açelya’nın tamamladığı eğitimler ve sertifikaları.' };
export default function CertificatesPage() { return <PageFrame eyebrow="05 / Sertifikalar" title="Öğrenmeye devam ediyorum." intro="Web geliştirme, yapay zekâ, tasarım, iletişim, sosyal medya ve yabancı dil alanlarında tamamladığım eğitimler."><section className="section-shell section-block certificates-section"><div className="certificates-intro"><Award/><div><strong>Eğitim ve sertifika arşivi</strong><p>Sertifika belgeleri talep üzerine paylaşılır.</p></div></div><div className="certificates-grid">{certificates.map((certificate, index) => <article className="certificate-card" key={certificate.title}><div className="certificate-icon" aria-hidden="true"><FileText/></div><div className="certificate-content"><div><span>{String(index + 1).padStart(2, '0')}</span><span><ShieldCheck size={15}/> Doğrulanmış eğitim</span></div><h2>{certificate.title}</h2><p>{certificate.issuer}</p>{certificate.date && <time>{certificate.date}</time>}</div></article>)}</div></section></PageFrame>; }
