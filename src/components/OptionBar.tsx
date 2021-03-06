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

const rangeOptions = [15, 30, 45, 60, 75, 85, 95];

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
