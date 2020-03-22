import React, { useState} from 'react';
import {ResponsiveContainer, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend} from 'recharts';
import data, { columns, historicalNotes } from './data/index';
import OptionBar from './components/OptionBar';
import Table from './components/Table';
import renderColorfulLegendText from './components/renderColorfulLegendText';

function App() {
  const [ selected, setSelected ] = useState({
    confirmedCases: true,
    socialDistancingModel: true,
    generalModel: true,
    italy: false,
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

      <p><strong>Trenutni broj registrovanih slučajeva u Srbiji je 171.</strong> Za ažurne vesti i spisak važnih brojeva telefona posetite portal Ministarstva zdravlja <a href="https://covid19.rs/" target="blank">covid19.rs</a>.</p>

      <h2>Modeli i predviđanja</h2>

      <div className='alert'>
        <div className='alert-icon'>
          <svg className='alert-icon-svg' focusable='false' viewBox='0 0 24 24'
               aria-hidden='true' role='presentation'>
            <path d='M12 5.99L19.53 19H4.47L12 5.99M12 2L1 21h22L12 2zm1 14h-2v2h2v-2zm0-6h-2v4h2v-4z' />
          </svg>
        </div>
        <div className='alert-message'>
          <p>
            {'Modeli prikazani na ovoj stranici su eksperiment jednog amatera koji nije epidemiolog niti '}
            {'ikakav medicinski stručnjak. Za više informacija o COVID-19 posetite sajt '}
            <a href='https://www.who.int/news-room/q-a-detail/q-a-coronaviruses' target='_blank'>Svetske zdravstvene organizacije.</a>
          </p>
        </div>
      </div>

      <p><em>Social distancing model</em> je predviđanje progresije epidemije na osnovu uspeha zemalja koje su ovu praksu uvele jako rano da bi sprečile eksponencijalni rast. <em>Generalni model</em> pokazuje kakvu bi situaciju mogli da očekujemo kada ne bi preduzeli adekvatne mere.</p>

      <p>Predviđanje koje sam doneo 12.03.2020. kada sam ovaj model i napravio je da će <strong>broj potvrđenih slučajeva</strong> pratiti <em>Social distancing model</em>, što je u okviru statističe greške trenutno i slučaj.</p>
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
            <Line type='monotone' dataKey='confirmedCases' stroke='#cb4335' strokeWidth={6} dot={false} />}
          {selected.socialDistancingModel &&
            <Line type='monotone' dataKey='socialDistancingModel' stroke='#212f3c' strokeWidth={1} dot={false} strokeDasharray='5 5' />}
          {selected.generalModel &&
            <Line type='monotone' dataKey='generalModel' stroke='#9b59b6' strokeWidth={1} dot={false} strokeDasharray='5 5' />}
          {selected.italy &&
            <Line type='monotone' dataKey='italy' stroke='#27ae60' strokeWidth={4} dot={false} strokeDasharray='5 5' />}
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}

export default App;

// https://data.humdata.org/dataset/novel-coronavirus-2019-ncov-cases
