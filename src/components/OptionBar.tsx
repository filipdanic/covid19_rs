import React from 'react';
import Checkbox from './Checkbox';
import { getLegendLabel } from './renderColorfulLegendText'

type ModelOptionKey = 'confirmedCases' | 'socialDistancingModel' | 'generalModel' | 'italyNormalized' | 'italyAbsolute';

const modelOptions: Array<ModelOptionKey> = [
  'confirmedCases',
  'socialDistancingModel',
  'generalModel',
  'italyNormalized',
  'italyAbsolute'
];

const rangeOptions = [15, 20, 30, 40, 50, 60, 65];

export default ({
  selectedModel,
  selectedRange,
  onModelChange,
  onRangeChange,
}: {
  selectedModel: {
    confirmedCases: boolean,
    socialDistancingModel: boolean,
    generalModel: boolean,
    italyNormalized: boolean,
    italyAbsolute: boolean,
  },
  selectedRange: number,
  onModelChange: (event: React.ChangeEvent<HTMLInputElement>) => void,
  onRangeChange: (event: React.ChangeEvent<HTMLSelectElement>) => void,
}) =>
  <div className='optionBar'>
    <p>Prikaz, period 2020/03/08 – 2020/05/02</p>

    {modelOptions.map((option: ModelOptionKey) =>
      <Checkbox
        key={option}
        name={option}
        checked={selectedModel[option]}
        label={getLegendLabel(option)}
        onChange={onModelChange}
      />
    )}
    <div className='optionBar--selectField'>
      <label htmlFor='selectedRange'>Broj dana u prikazu:</label>
      <select
        name='selectedRange'
        id='selectedRange'
        value={selectedRange}
        onChange={onRangeChange}
      >
        {rangeOptions.map(option =>
          <option key={option} value={option}>
            {option}
          </option>
        )}
      </select>
    </div>
  </div>;
