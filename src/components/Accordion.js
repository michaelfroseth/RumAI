import { useState } from "react";

function AccordionSection({ title, body }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <div>
      <div
        className={expanded ? "expanded-title" : "collapsed-title"}
        onClick={() => setExpanded(!expanded)}
      >
        {title}
      </div>
      {expanded && <div>{body}</div>}
    </div>
  );
}

export function Accordion({ sections }) {
  return (
    <div>
      {sections.map((section) => (
        <AccordionSection
          key={section.title}
          title={section.title}
          body={section.body}
        />
      ))}
    </div>
  );
}
