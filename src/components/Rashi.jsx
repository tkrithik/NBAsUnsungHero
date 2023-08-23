import React from 'react';
import Feature from './Feature';
import './Bios.css';
import Rashi from './img/rashi.jpg';

const WhatGPT3 = () => (
  <div className="gpt3__whatgpt3 section__margin" id="wgpt3">
    <div className="gpt3__whatgpt3-feature">
      <Feature title="" text=" " />
      
    </div>
    <div className="gpt3__whatgpt3-heading">
      <h1 className="gradient__text">Rashi Jindani</h1>
    </div>
    <div className="gpt3__whatgpt3-container">
      <Feature title=" " text="We so opinion friends me message as delight. Whole front do of plate heard oh ought.We so opinion friends me message as delight. Whole front do of plate heard oh ought. His defective nor convinced residence own. Connection has put impossible own apartments boisterous. At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by. Filler Filler Filler Filler Filler Filler Filler Filler Filler Filler Filler Filler Filler Filler Filler " />
      <img style={{width: '400px'}} src={Rashi} alt="Logo" />
      {/* <Feature title="Knowledgebase" text="At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by. As put impossible own apartments b" />
      <Feature title="Education" text="At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by. As put impossible own apartments b" /> */}
    </div>
  </div>
);

export default WhatGPT3;
