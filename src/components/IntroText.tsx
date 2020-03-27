import React from 'react';
import WarningAlert from './WarningAlert';

const ConfirmedCases = 528;

export default () =>
  <React.Fragment>
    <p><strong>Trenutni broj registrovanih slučajeva u Srbiji je {ConfirmedCases}.</strong> Za ažurne vesti i spisak važnih brojeva telefona posetite portal Ministarstva zdravlja <a href='https://covid19.rs/' target='blank'>covid19.rs</a>.</p>

    <h2>Modeli i predviđanja</h2>

    <WarningAlert>
      <p>
        {'Modeli prikazani na ovoj stranici su eksperiment jednog amatera koji nije epidemiolog niti '}
        {'ikakav medicinski stručnjak. Za više informacija o COVID-19 posetite sajt '}
        <a href='https://www.who.int/news-room/q-a-detail/q-a-coronaviruses' target='_blank'>Svetske zdravstvene organizacije.</a>
      </p>
    </WarningAlert>

    <p><em>Social distancing model</em> je predviđanje progresije epidemije na osnovu uspeha zemalja koje su ovu praksu uvele jako rano da bi sprečile eksponencijalni rast. <em>Generalni model</em> pokazuje kakvu bi situaciju mogli da očekujemo kada ne bi preduzeli adekvatne mere.</p>

    <p>Predviđanje koje sam doneo 12.03.2020. kada sam ovaj model i napravio je da će <strong>broj potvrđenih slučajeva</strong> pratiti <em>Social distancing model</em>, što je u okviru statističe greške trenutno i slučaj.</p>
  </React.Fragment>;
