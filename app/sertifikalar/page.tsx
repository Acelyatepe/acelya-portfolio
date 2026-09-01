import type { Metadata } from 'next';
import Image from 'next/image';
import { Award, ShieldCheck } from 'lucide-react';
import { PageFrame } from '@/components/page-frame';
import { certificates } from '@/data/site';

export const metadata: Metadata = { title: 'Sertifikalar', description: 'Açelya’nın tamamladığı eğitimler ve sertifikaları.' };
export default function CertificatesPage() { return <PageFrame eyebrow="05 / Sertifikalar" title="Öğrenmeye devam ediyorum." intro="Tasarım, iletişim, sosyal medya ve yabancı dil alanlarında tamamladığım doğrulanmış eğitimler."><section className="section-shell section-block certificates-section"><div className="certificates-intro"><Award/><p>Sertifika görsellerinde kişisel kimlik ve belge numaraları güvenlik amacıyla gösterilmez.</p></div><div className="certificates-grid">{certificates.map((certificate, index) => <article className="certificate-card" key={certificate.title}><div className="certificate-preview"><Image src={certificate.image} alt={`${certificate.title} sertifika önizlemesi`} fill sizes="(max-width: 700px) 100vw, 50vw"/></div><div className="certificate-content"><div><span>0{index + 1}</span><span><ShieldCheck size={15}/> Doğrulanmış eğitim</span></div><h2>{certificate.title}</h2><p>{certificate.issuer}</p><time>{certificate.date}</time></div></article>)}</div></section></PageFrame>; }
