import React from 'react';
import Checkbox from './Checkbox';
import { getLegendLabel } from './renderColorfulLegendText'

type optionKey = 'confirmedCases' | 'socialDistancingModel' | 'generalModel' | 'italyNormalized' | 'italyAbsolute';

const options: Array<optionKey> = [
  'confirmedCases',
  'socialDistancingModel',
  'generalModel',
  'italyNormalized',
  'italyAbsolute'
];

export default ({
  selected,
  onChange,
}: {
  selected: {
    confirmedCases: boolean,
    socialDistancingModel: boolean,
    generalModel: boolean,
    italyNormalized: boolean,
    italyAbsolute: boolean,
  },
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void,
}) =>
  <div className='optionBar'>
    <p>Prikaz, period 2020/03/08 – 2020/05/02</p>

    {options.map((option: optionKey) =>
      <Checkbox
        key={option}
        name={option}
        checked={selected[option]}
        label={getLegendLabel(option)}
        onChange={onChange}
      />
    )}
  </div>;
