import type { StudyStage } from '../types/content';

interface RoadmapStageProps {
  stage: StudyStage;
}

export function RoadmapStage({ stage }: RoadmapStageProps) {
  return (
    <div className="timeline-stage">
      <div className="timeline-stage-duration">{stage.duration}</div>
      <div className="timeline-stage-title">{stage.title}</div>
      <div>
        <strong>Focus</strong>
        <ul>
          {stage.focus.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </div>
      <div>
        <strong>Outcomes</strong>
        <ul>
          {stage.outcomes.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </div>
      <div>
        <strong>Habits</strong>
        <ul>
          {stage.practices.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}
