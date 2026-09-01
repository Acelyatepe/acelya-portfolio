'use client';
import { useState } from 'react';
import { projects, type ProjectCategory } from '@/data/site';
import { ProjectCard } from './project-card';
const filters: Array<'Tümü' | ProjectCategory> = ['Tümü','E-Ticaret','Restoran','Blog','Kahve Dükkânı','Web Uygulaması','Portfolio'];
export function ProjectsView() { const [filter,setFilter]=useState<(typeof filters)[number]>('Tümü'); const visible=filter==='Tümü'?projects:projects.filter((project)=>project.category===filter); return <section className="section-shell projects-section section-block"><fieldset className="filter-bar"><legend className="sr-only">Projeleri filtrele</legend>{filters.map((item)=><button type="button" key={item} onClick={()=>setFilter(item)} className={filter===item?'active':''} aria-pressed={filter===item}>{item}</button>)}</fieldset><div className="project-grid projects-full" key={filter}>{visible.map((project,index)=><ProjectCard key={project.slug} project={project} index={index}/>)}</div></section>; }
