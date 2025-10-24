import type { Resource } from '../types/content';

const formatLabels: Record<Resource['format'], string> = {
  article: 'Deep Dive',
  book: 'Book',
  course: 'Course',
  newsletter: 'Newsletter',
  toolkit: 'Toolkit',
  video: 'Video',
  community: 'Community'
};

const levelLabels: Record<Resource['level'], string> = {
  beginner: 'Beginner friendly',
  intermediate: 'Intermediate',
  advanced: 'Advanced'
};

interface ResourceCardProps {
  resource: Resource;
}

export function ResourceCard({ resource }: ResourceCardProps) {
  return (
    <article className="resource-card">
      <h3>
        <a href={resource.link} target="_blank" rel="noreferrer">
          {resource.name}
        </a>
      </h3>
      <p>{resource.description}</p>
      <div className="resource-meta">
        <span>{resource.provider}</span>
        <span>{formatLabels[resource.format]}</span>
        <span>{levelLabels[resource.level]}</span>
      </div>
    </article>
  );
}
