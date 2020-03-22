import React from "react";
import {LegendPayload} from "recharts";

const getLegendLabel = (key: string) => {
  switch (key) {
    case 'confirmedCases':
      return 'Potvrđeni slučajevi';
    case 'socialDistancingModel':
      return 'Social distancing model';
    case 'generalModel':
      return 'Generalni model';
    case 'italy':
      return 'Italija (rast)';
    default:
      return '';
  }
};

const renderColorfulLegendText = (value?: LegendPayload['value'], entry?: LegendPayload) => {
  const { color } = (entry || {});
  return <span style={{ color }}>{getLegendLabel(value)}</span>;
};

export default renderColorfulLegendText;
