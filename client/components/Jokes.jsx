import React, { useState } from 'react';

const Jokes = () => {
  const [jokes, setJokes] = useState([
    { setup: "Why did the chicken go to the seance?", punchline: "To talk to the other side!" },
    { setup: "What's orange and sounds like a parrot?", punchline: "A carrot!" },
    { setup: "Why do programmers prefer dark mode?", punchline: "Because light attracts bugs." },
    { setup: "How do you comfort a JavaScript bug?", punchline: "You console it." },
    { setup: "What's a software developer's favorite game?", punchline: "Hide and seek. You might never find that bug!" },
  ]);

  const [visibleAnswers, setVisibleAnswers] = useState([]);

  const toggleAnswerVisibility = (index) => {
    const updatedVisibleAnswers = [...visibleAnswers];
    updatedVisibleAnswers[index] = !updatedVisibleAnswers[index];
    setVisibleAnswers(updatedVisibleAnswers);
  };

  return (
    <div className="jokes-container">
      <h2 className="jokes-header">Jokes</h2>
      <p className="jokes-intro">Get ready for some laughs! Here are a few jokes to brighten your day:</p>
      <ul className="jokes-list">
        {jokes.map((joke, index) => (
          <li key={index} onClick={() => toggleAnswerVisibility(index)}>
            <strong>{joke.setup}</strong>
            {visibleAnswers[index] && <span className="joke-answer">{joke.punchline}</span>}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Jokes;
