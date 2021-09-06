import React, { useEffect } from "react";

export function Thought(props) {
  const { thought, removeThought } = props;
  useEffect(() => {
    const rmt = thought.expiresAt - Date.now();
    const tmo = setTimeout(() => {
      removeThought(thought.id);
    }, rmt);
    return () => {
      clearTimeout(tmo);
    };
  }, [thought]);
  const handleRemoveClick = () => {
    removeThought(thought.id);
  };

  return (
    <li className="Thought">
      <button
        aria-label="Remove thought"
        className="remove-button"
        onClick={handleRemoveClick}
      >
        &times;
      </button>
      <div className="text">{thought.text}</div>
    </li>
  );
}
