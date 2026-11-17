import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { ArrowLeft, ArrowRight, ExternalLink, GitFork } from 'lucide-react';
import { SiteFooter } from '@/components/site-footer';
import { SiteHeader } from '@/components/site-header';
import { projects } from '@/data/site';

export function generateStaticParams() { return projects.map(({slug})=>({slug})); }
export async function generateMetadata({params}:{params:Promise<{slug:string}>}):Promise<Metadata>{ const {slug}=await params; const project=projects.find((item)=>item.slug===slug); if(!project)return{}; return {title:project.title,description:project.summary,openGraph:{title:project.title,description:project.summary,images:[]},twitter:{card:'summary',title:project.title,description:project.summary,images:[]}}; }

export default async function ProjectDetail({params}:{params:Promise<{slug:string}>}) {
  const {slug}=await params; const index=projects.findIndex((item)=>item.slug===slug); const project=projects[index]; if(!project)notFound();
  if (!project.demo && !project.github) return <><SiteHeader/><main className="development-page"><section className={`development-card ${project.accent}`}><span className="development-symbol" aria-hidden="true">{project.symbol}</span><p className="eyebrow">Geliştirme Aşamasında</p><h1>{project.title}</h1><p>Bu proje şu anda geliştiriliyor. Çok yakında canlı olarak incelenebilecek.</p><a href="/projeler" target="_top" className="button button-dark"><ArrowLeft size={17}/> Projelere Dön</a></section></main><SiteFooter/></>;
  const previous=projects[(index-1+projects.length)%projects.length]; const next=projects[(index+1)%projects.length];
  return <><SiteHeader/><main>
    <header className="project-detail-head section-shell reveal"><a href="/projeler" target="_top" className="back-link"><ArrowLeft size={16}/> Tüm projeler</a><div className="detail-kicker"><p className="eyebrow">{project.category}</p><span>{project.status}</span></div><h1>{project.title} <em>{project.symbol}</em></h1><p>{project.summary}</p><div className="detail-actions">{project.github&&<a className="button button-light" href={project.github} target="_blank" rel="noopener noreferrer"><GitFork size={17}/> GitHub</a>}{project.demo&&<a className="button button-dark" href={project.demo} target="_blank" rel="noopener noreferrer">Canlı demo <ExternalLink size={17}/></a>}</div></header>
    <section className={`detail-visual ${project.accent}`} aria-label={`${project.title} proje görseli`}><img src={project.image} alt={project.imageAlt} style={{width:'100%',height:'100%',objectFit:'cover',borderRadius:'inherit'}}/></section>
    <section className="section-shell detail-content section-block"><div className="detail-index"><span>01</span><p>Proje özeti</p></div><div className="detail-main">
      <article><h2>Projenin amacı</h2><p>{project.purpose}</p></article>
      <article><h2>Özellikler</h2><ul className="feature-list">{project.features.map((feature)=><li key={feature}><span>✦</span>{feature}</li>)}</ul></article>
      <article><h2>Kullanılan teknolojiler</h2>{project.technologies.length?<div className="tech-list detail-tech">{project.technologies.map((tech)=><span key={tech}>{tech}</span>)}</div>:<p>Teknoloji bilgileri proje geliştirilirken eklenecek.</p>}</article>
      <article><h2>Öğrendiğim şeyler</h2><p>{project.learnings}</p></article>
      <div className="detail-split"><article><h2>Karşılaşılan problemler</h2><p>{project.challenges}</p></article><article><h2>Çözüm yaklaşımı</h2><p>{project.solution}</p></article></div>
      
    </div></section>
    <nav className="project-pager section-shell" aria-label="Projeler arası geçiş"><a href={`/projeler/${previous.slug}`} target="_top"><ArrowLeft/><span><small>Önceki proje</small>{previous.title}</span></a><a href={`/projeler/${next.slug}`} target="_top"><span><small>Sonraki proje</small>{next.title}</span><ArrowRight/></a></nav>
  </main><SiteFooter/></>;
}
