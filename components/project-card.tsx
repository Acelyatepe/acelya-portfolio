import { ArrowUpRight } from 'lucide-react';
import type { Project } from '@/data/site';

export function ProjectCard({ project, index }: { project: Project; index: number }) {
  const cardHref = project.demo ?? `/projeler/${project.slug}`;
  const externalProps = project.demo ? { target: '_blank', rel: 'noopener noreferrer' } : { target: '_top' };
  return <article className={`project-card project-variant-${index % 3} reveal`} style={{ animationDelay: `${index * 80}ms` }}>
    <a href={cardHref} {...externalProps} className={`project-visual ${project.accent}`} aria-label={`${project.title} projesini incele`}>
      <img src={project.image} alt={project.imageAlt} loading="lazy" style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }} />
      <span className="project-status">{project.status}</span>
    </a>
    <div className="project-card-body"><div className="project-meta"><span>{project.category}</span><span>↗</span></div>{project.demo ? <h3><a href={project.demo} target="_blank" rel="noopener noreferrer">{project.title} <span className="project-title-symbol">{project.symbol}</span></a></h3> : <h3>{project.title} <span className="project-title-symbol">{project.symbol}</span></h3>}<p>{project.summary}</p>{project.technologies.length > 0 ? <div className="tech-list">{project.technologies.map((tech)=><span key={tech}>{tech}</span>)}</div> : <p className="technology-pending">Teknolojiler proje geliştirilirken eklenecek.</p>}<div className="card-actions">{project.demo ? <a className="text-link" href={project.demo} target="_blank" rel="noopener noreferrer">Canlı İncele <ArrowUpRight size={16}/></a> : <a className="text-link" href={`/projeler/${project.slug}`} target="_top">Projeyi incele <ArrowUpRight size={16}/></a>}</div></div>
  </article>;
}
