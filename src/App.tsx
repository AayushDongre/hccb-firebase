import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { AnimatedSwitch, AnimatedRoute } from 'react-router-transition';
import { pageTransitions } from './util/rrtConfig';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';

import Home from './modules/Module-1/Home/IntroductionOne';
import {
  LapOneA,
  LapOneB,
  LapOneC,
  LapOneD,
  LapOneResult,
} from './modules/Module-1/Lap-1/index';
import { LapTwo, LapTwoResult } from './modules/Module-1/Lap-2/index';

const App: React.FunctionComponent = () => {
  return (
    <BrowserRouter>
      <AnimatedSwitch
        {...pageTransitions}
        //eslint-disable-next-line
        mapStyles={(styles: any) => ({
          transform: `translateX(${styles.offset}%)`,
        })}
        className="switch-wrapper">
        <AnimatedRoute path="/" component={Home} exact={true} />

        <AnimatedRoute path="/module/1/introduction" component={Home} />
        <AnimatedRoute path="/module/1/lap/1/a" component={LapOneA} />
        <AnimatedRoute path="/module/1/lap/1/b" component={LapOneB} />
        <AnimatedRoute path="/module/1/lap/1/c" component={LapOneC} />
        <AnimatedRoute path="/module/1/lap/1/d" component={LapOneD} />
        <AnimatedRoute path="/module/1/lap/1/result" component={LapOneResult} />

        <AnimatedRoute path="/module/1/lap/2" component={LapTwo} exact={true} />
        <AnimatedRoute path="/module/1/lap/2/result" component={LapTwoResult} />
      </AnimatedSwitch>
    </BrowserRouter>
  );
};

export default App;
