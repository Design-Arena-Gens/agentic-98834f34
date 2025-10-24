import type { ToolCategory } from '../types/content';

interface ToolCategoryCardProps {
  category: ToolCategory;
}

export function ToolCategoryCard({ category }: ToolCategoryCardProps) {
  return (
    <article className="card">
      <h3>{category.name}</h3>
      <p>{category.description}</p>
      <ul>
        {category.tools.map((tool) => (
          <li key={tool.name}>
            <a href={tool.link} target="_blank" rel="noreferrer">
              {tool.name}
            </a>
            {': '}
            <span>{tool.note}</span>
          </li>
        ))}
      </ul>
    </article>
  );
}
