import React from 'react';
import MCQ from '../../../components/MCQ/MCQ';

const LapFour: React.FC = () => {
  return (
    <MCQ
      title="What kind of style would you like to adapt?"
      description="With the chosen Manpower in Lap 2, what kind of leadership style would you like to adapt more?"
      lapNumber={4}
      image="man"
      nextPath="/module/1/lap/4/why"
      options={[
        'Participating and Supporting',
        'Selling and Coaching',
        'Delegating to the employees',
        'Telling and Directing',
      ]}
      optionsPerRow={2}
      stateSelector={(state) => state.moduleOne.lapFour.choice}></MCQ>
  );
};

export default LapFour;
