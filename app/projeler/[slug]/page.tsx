import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { ArrowLeft, ArrowRight, ExternalLink, GitFork, ImageIcon } from 'lucide-react';
import { SiteFooter } from '@/components/site-footer';
import { SiteHeader } from '@/components/site-header';
import { projects } from '@/data/site';

export function generateStaticParams() { return projects.map(({slug})=>({slug})); }
export async function generateMetadata({params}:{params:Promise<{slug:string}>}):Promise<Metadata>{ const {slug}=await params; const project=projects.find((item)=>item.slug===slug); if(!project)return{}; return {title:project.title,description:project.summary,openGraph:{title:project.title,description:project.summary,images:[]},twitter:{card:'summary',title:project.title,description:project.summary,images:[]}}; }

export default async function ProjectDetail({params}:{params:Promise<{slug:string}>}) {
  const {slug}=await params; const index=projects.findIndex((item)=>item.slug===slug); const project=projects[index]; if(!project)notFound(); const previous=projects[(index-1+projects.length)%projects.length]; const next=projects[(index+1)%projects.length];
  return <><SiteHeader/><main>
    <header className="project-detail-head section-shell reveal"><a href="/projeler" className="back-link"><ArrowLeft size={16}/> Tüm projeler</a><div className="detail-kicker"><p className="eyebrow">{project.category}</p><span>{project.status}</span></div><h1>{project.title} <em>{project.symbol}</em></h1><p>{project.summary}</p><div className="detail-actions">{project.github&&<a className="button button-light" href={project.github}><GitFork size={17}/> GitHub</a>}{project.demo&&<a className="button button-dark" href={project.demo}>Canlı demo <ExternalLink size={17}/></a>}</div></header>
    <section className={`detail-visual ${project.accent}`} aria-label={`${project.title} proje görseli alanı`}><div><ImageIcon size={28}/><span>{project.symbol}</span><p>Gerçek proje görselleri daha sonra eklenecek</p></div></section>
    <section className="section-shell detail-content section-block"><div className="detail-index"><span>01</span><p>Proje özeti</p></div><div className="detail-main">
      <article><h2>Projenin amacı</h2><p>{project.purpose}</p></article>
      <article><h2>Planlanan özellikler</h2><ul className="feature-list">{project.features.map((feature)=><li key={feature}><span>✦</span>{feature}</li>)}</ul></article>
      <article><h2>Kullanılan teknolojiler</h2>{project.technologies.length?<div className="tech-list detail-tech">{project.technologies.map((tech)=><span key={tech}>{tech}</span>)}</div>:<p>Teknoloji bilgileri proje geliştirilirken eklenecek.</p>}</article>
      <article><h2>Öğrendiğim şeyler</h2><p>{project.learnings}</p></article>
      <div className="detail-split"><article><h2>Karşılaşılan problemler</h2><p>{project.challenges}</p></article><article><h2>Çözüm yaklaşımı</h2><p>{project.solution}</p></article></div>
      <article><h2>Proje görselleri</h2><div className="device-shots"><div><ImageIcon/><span>Masaüstü görseli eklenecek</span></div><div><ImageIcon/><span>Tablet görseli eklenecek</span></div><div><ImageIcon/><span>Mobil görseli eklenecek</span></div></div></article>
    </div></section>
    <nav className="project-pager section-shell" aria-label="Projeler arası geçiş"><a href={`/projeler/${previous.slug}`}><ArrowLeft/><span><small>Önceki proje</small>{previous.title}</span></a><a href={`/projeler/${next.slug}`}><span><small>Sonraki proje</small>{next.title}</span><ArrowRight/></a></nav>
  </main><SiteFooter/></>;
}
