import Image from 'next/image';
import { ArrowUpRight, ImageIcon } from 'lucide-react';
import type { Project } from '@/data/site';

export function ProjectCard({ project, index }: { project: Project; index: number }) {
  return <article className={`project-card project-variant-${index % 3} reveal`} style={{ animationDelay: `${index * 80}ms` }}>
    <a href={`/projeler/${project.slug}`} target="_top" className={`project-visual ${project.accent}`} aria-label={`${project.title} projesini incele`}>
      {project.image ? <Image src={project.image} alt={`${project.title} proje önizlemesi`} fill sizes="(max-width: 700px) 100vw, 50vw"/> : <div className="project-placeholder"><span className="project-number">0{index + 1}</span><span className="project-symbol">{project.symbol}</span><div><ImageIcon size={15}/><small>Proje görseli daha sonra eklenecek</small></div></div>}
      <span className="project-status">{project.status}</span>
    </a>
    <div className="project-card-body"><div className="project-meta"><span>{project.category}</span><span>↗</span></div><h3>{project.title}</h3><p>{project.summary}</p>{project.technologies.length > 0 ? <div className="tech-list">{project.technologies.map((tech)=><span key={tech}>{tech}</span>)}</div> : <p className="technology-pending">Teknolojiler proje geliştirilirken eklenecek.</p>}<div className="card-actions"><a className="text-link" href={`/projeler/${project.slug}`} target="_top">Projeyi incele <ArrowUpRight size={16}/></a></div></div>
  </article>;
}
