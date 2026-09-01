import Link from 'next/link';
import { ArrowRight, Code2, MoveUpRight } from 'lucide-react';
import { siteConfig, projects } from '@/data/site';
import { SiteHeader } from '@/components/site-header';
import { SiteFooter } from '@/components/site-footer';
import { ProjectCard } from '@/components/project-card';

export default function Home() {
  const featured = projects.filter((project) => project.featured).slice(0, 3);
  return <><SiteHeader /><main>
    <section className="hero section-shell" aria-labelledby="hero-title">
      <div className="hero-copy reveal"><p className="eyebrow"><span>✦</span> Merhaba, ben</p><h1 id="hero-title">{siteConfig.name}</h1><p className="hero-role">{siteConfig.title}</p><p className="hero-intro">{siteConfig.intro}</p><div className="hero-actions"><Link href="/projeler" className="button button-dark">Projelerimi keşfet <ArrowRight size={18} /></Link><Link href="/iletisim" className="button button-light">Benimle iletişime geç <MoveUpRight size={18} /></Link></div></div>
      <div className="hero-art reveal reveal-delay" aria-hidden="true"><div className="hero-code"><span>&lt;/&gt;</span><small>fikirden ekrana</small></div><div className="orbit orbit-one" /><div className="orbit orbit-two" /><div className="art-note">sade / işlevsel / özenli</div><Code2 className="art-icon" size={30} strokeWidth={1.4} /></div>
    </section>
    <section className="marquee" aria-label="Çalışma yaklaşımı"><div>✦ Kullanıcı odaklı <span>⌁</span> Temiz kod <span>✦</span> Duyarlı tasarım <span>⌁</span> Sürekli öğrenme</div></section>
    <section className="section-shell section-block" aria-labelledby="featured-title"><div className="section-heading"><div><p className="eyebrow">02 / Seçili çalışmalar</p><h2 id="featured-title">Öne çıkan projeler</h2></div><Link href="/projeler" className="text-link">Tüm projeleri gör <ArrowRight size={17} /></Link></div><div className="project-grid">{featured.map((project, index) => <ProjectCard key={project.slug} project={project} index={index} />)}</div></section>
  </main><SiteFooter /></>;
}
