import type { Pillar } from '../types/content';

interface PillarCardProps {
  pillar: Pillar;
}

export function PillarCard({ pillar }: PillarCardProps) {
  return (
    <article className="card">
      <h3>{pillar.title}</h3>
      <p>{pillar.description}</p>
      <div>
        <strong>Key Outcomes</strong>
        <ul>
          {pillar.outcomes.map((outcome) => (
            <li key={outcome}>{outcome}</li>
          ))}
        </ul>
      </div>
      <div className="chip-list">
        {pillar.skills.map((skill) => (
          <span className="chip" key={skill}>
            {skill}
          </span>
        ))}
      </div>
    </article>
  );
}
