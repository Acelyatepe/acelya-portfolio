import type { Metadata } from 'next'; import { PageFrame } from '@/components/page-frame'; import { ProjectsView } from '@/components/projects-view';
export const metadata: Metadata = { title: 'Projelerim', description: 'Web tasarımı, UI/UX ve JavaScript projelerim.' };
export default function ProjectsPage() { return <PageFrame eyebrow="03 / Projelerim" title="Fikirden çalışan ürüne." intro="Öğrenirken ürettiğim web, arayüz ve JavaScript çalışmalarını keşfedin."><ProjectsView /></PageFrame>; }
