import React from 'react';
import {LegendPayload} from 'recharts';

export const getLegendLabel = (key: string) => {
  switch (key) {
    case 'confirmedCases':
      return 'Potvrđeni slučajevi';
    case 'socialDistancingModel':
      return 'Social distancing model';
    case 'generalModel':
      return 'Generalni model';
    case 'italyNormalized':
      return 'Italija (rast, normalizovan)';
    case 'italyAbsolute':
      return 'Italija (rast, apsolutne vrednosti)';
    default:
      return '';
  }
};

const renderColorfulLegendText = (value?: LegendPayload['value'], entry?: LegendPayload) => {
  const { color } = (entry || {});
  return <span style={{ color }}>{value}</span>;
};

export default renderColorfulLegendText;
