import React from 'react';
import MCQ from '../../../components/MCQ/MCQ';

const LapOneC: React.FC = () => {
  return (
    <MCQ
      lapNumber={1}
      title={'Budget Management'}
      description={
        <p>
          The entire process of retail discounting and purchasing the marketing
          POSMs needs to be planned in 3 brackets of{' '}
          <strong> 10%, 25 % & 50%</strong> with the max. limit of Rs. 20,000.
        </p>
      }
      question={
        <p>
          Do You want to additionally have an extra promo for Distributor Promo
          @ 1000 INR?
        </p>
      }
      subquestionNumber={'C'}
      options={['Yes', 'No']}
      correctOption={1}
      nextPath="/module/1/lap/1d"
    />
  );
};

export default LapOneC;
