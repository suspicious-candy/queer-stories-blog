import { Tooltip } from 'react-tooltip-lite';
import glossary from '../content/glossary.json';

export default function GlossaryTooltip({ term, children }) {
  const entry = glossary.find(e => e.term === term);
  if (!entry) return children || term;
  return (
    <Tooltip
      content={<div className="max-w-xs p-2">{entry.definition}</div>}
      direction="up"
      arrow={false}
      className="underline cursor-help text-purple-600"
    >
      {children || term}
    </Tooltip>
  );
}