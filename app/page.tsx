import { ArrowRight, Braces, MoveUpRight, MousePointer2 } from 'lucide-react';
import { projects, siteConfig } from '@/data/site';
import { ProjectCard } from '@/components/project-card';
import { SiteFooter } from '@/components/site-footer';
import { SiteHeader } from '@/components/site-header';

export default function Home() {
  const featured = projects.filter((project) => project.featured).slice(0, 4);
  return <><SiteHeader/><main>
    <section className="hero section-shell" aria-labelledby="hero-title">
      <div className="hero-copy reveal"><p className="eyebrow"><span>✦</span> Merhaba, ben</p><h1 id="hero-title">{siteConfig.name}</h1><p className="hero-role">{siteConfig.title}</p><p className="hero-intro">{siteConfig.intro}</p><div className="hero-actions"><a href="/projeler" target="_top" className="button button-dark">Projelerimi keşfet <ArrowRight size={18}/></a><a href="/iletisim" target="_top" className="button button-light">Benimle iletişime geç <MoveUpRight size={18}/></a></div></div>
      <div className="hero-studio reveal reveal-delay" aria-label="Tasarım ve geliştirme sürecini temsil eden dekoratif arayüz kompozisyonu">
        <div className="studio-orbit" aria-hidden="true"/><div className="browser-card" aria-hidden="true"><div className="browser-top"><i/><i/><i/><span>portfolio.local</span></div><div className="browser-body"><div className="code-label"><Braces size={15}/> tasarım + kod</div><strong>Fikirleri<br/><em>arayüzlere</em><br/>dönüştür.</strong><div className="code-lines"><i/><i/><i/></div></div></div>
        <div className="ui-note note-one" aria-hidden="true"><span>✦</span><small>DETAY</small><strong>Özenli</strong></div><div className="ui-note note-two" aria-hidden="true"><MousePointer2 size={17}/><small>YAKLAŞIM</small><strong>Kullanıcı odaklı</strong></div><div className="studio-chip" aria-hidden="true">⌁ öğren / tasarla / geliştir</div>
      </div>
    </section>
    <section className="marquee" aria-label="Çalışma yaklaşımı"><div>✦ Kullanıcı odaklı <span>⌁</span> Temiz kod <span>✦</span> Duyarlı tasarım <span>⌁</span> Sürekli öğrenme</div></section>
    <section className="section-shell section-block" aria-labelledby="featured-title"><div className="section-heading"><div><p className="eyebrow">02 / Seçili çalışmalar</p><h2 id="featured-title">Öne çıkan projeler</h2></div><a href="/projeler" target="_top" className="text-link">Tüm projeleri gör <ArrowRight size={17}/></a></div><div className="project-grid featured-grid">{featured.map((project,index)=><ProjectCard key={project.slug} project={project} index={index}/>)}</div></section>
  </main><SiteFooter/></>;
}
