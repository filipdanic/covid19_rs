import React, { useState} from 'react';
import {ResponsiveContainer, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend} from 'recharts';
import data, { columns, historicalNotes } from './data/index';
import OptionBar from './components/OptionBar';
import Table from './components/Table';
import renderColorfulLegendText from './components/renderColorfulLegendText';
import { getLegendLabel } from './components/renderColorfulLegendText'
import IntroText from './components/IntroText';

function App() {
  const [ selected, setSelected ] = useState({
    confirmedCases: true,
    socialDistancingModel: true,
    generalModel: true,
    italyNormalized: false,
    italyAbsolute: false,
  });

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = e.target;
    setSelected(s => ({
      ...s,
      [name]: checked,
    }))
  };

  return (
    <div className='mainContent'>
      <h1>COVID19 u Srbiji</h1>
      <IntroText />

      <h3>Tabela slučajeva</h3>
      <p>Za period 2020/03/08 – 2020/05/02</p>
      <div className='tableContainer'>
        <Table
          columns={columns}
          data={data}
          historicalNotes={historicalNotes}
        />
      </div>

      <h3>Graf slučajeva</h3>
      <OptionBar selected={selected} onChange={onChange} />
      <ResponsiveContainer width='95%' height={400}>
        <LineChart
          width={Math.min(window.innerWidth - 20, 840)}
          height={Math.min(window.innerWidth - 20, 840) * 0.6}
          data={data}
          margin={{
            top: 5, right: 30, left: 20, bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray='3 3' />
          <XAxis dataKey='day' />
          <YAxis />
          <Tooltip />
          <Legend formatter={renderColorfulLegendText} />
          {selected.confirmedCases &&
            <Line
              type='monotone'
              name={getLegendLabel('confirmedCases')}
              dataKey='confirmedCases'
              stroke='#cb4335' strokeWidth={6} dot={false}
            />}
          {selected.socialDistancingModel &&
            <Line
              type='monotone'
              name={getLegendLabel('socialDistancingModel')}
              dataKey='socialDistancingModel'
              stroke='#212f3c' strokeWidth={2} dot={false} strokeDasharray='5 5'
            />}
          {selected.generalModel &&
            <Line
              type='monotone'
              name={getLegendLabel('generalModel')}
              dataKey='generalModel'
              stroke='#9b59b6' strokeWidth={2} dot={false} strokeDasharray='5 5'
            />}
          {selected.italyNormalized &&
            <Line
              type='monotone'
              name={getLegendLabel('italyNormalized')}
              dataKey='italyNormalized'
              stroke='#27ae60' strokeWidth={2} dot={false} strokeDasharray='5 5'
            />}
          {selected.italyAbsolute &&
            <Line
              type='monotone'
              name={getLegendLabel('italyAbsolute')}
              dataKey='italy'
              stroke='#0f7f27' strokeWidth={2} dot={false} strokeDasharray='5 5'
            />}
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}

export default App;

// https://data.humdata.org/dataset/novel-coronavirus-2019-ncov-cases
