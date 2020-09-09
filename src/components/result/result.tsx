import React from 'react';
import { Icon } from '@iconify/react';
import checkCircleFilled from '@iconify/icons-ant-design/check-circle-filled';
import useWindowDimensions from '../../hooks/useWindowDimensions';
import Confetti from 'react-confetti';

import HeroCard from '../ContentCard/ContentCard';
import ModuleTitle from '../moduleTitle/moduleTitle';
import styles from './result.module.scss';
import PrimaryButton from '../primaryButton/primaryButton';

interface Props {
  lapNumber: number;
  title: string;
  description?: string;
  qualities: Array<string>;
  remark?: string;
  nextPath: string;
}

const Result: React.FC<Props> = (props: Props) => {
  const { width, height } = useWindowDimensions();

  return (
    <div
      className={`${styles.result} p-5 d-flex text-center justify-content-center`}>
      <Confetti
        width={width}
        height={height}
        recycle={false}
        numberOfPieces={400}
      />
      <HeroCard>
        <ModuleTitle title={props.title} lapNumber={props.lapNumber} />

        <img src="/static/img/result.svg" alt="a trophy" className="my-4" />

        <div className={styles.description}>{props.description}</div>

        <div className={`mx-auto text-center my-2 ${styles.qualities}`}>
          {props.qualities.map((quality) => {
            return (
              <div key={quality} className={`${styles.quality}`}>
                <Icon
                  icon={checkCircleFilled}
                  style={{
                    color: '#6fd05f',
                    fontSize: '2rem',
                  }}
                />
                &nbsp;
                {quality}
              </div>
            );
          })}
        </div>

        <div className={styles.remark}>{props.remark}</div>

        <PrimaryButton attempted={true} path={props.nextPath}>
          Next Lap
        </PrimaryButton>
      </HeroCard>
    </div>
  );
};

export default Result;
