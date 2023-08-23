import React from 'react';
import { spotify, onamp } from './imports';
import './brand.css';

const Brand = () => (
  <div className="gpt3__brand section__padding">
    <div>
    <a href="https://open.spotify.com/show/0vRWFZWIzkB21M7sh7PsVV?si=b5d7f2904a774382" target="_blank"><img src={spotify} /></a>
    </div>
    <div>
    <a href="https://live.onamp.com/unsunghero" target="_blank"><img src={onamp} /></a>
    </div>
  </div>
);

export default Brand;
