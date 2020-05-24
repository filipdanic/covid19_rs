import React from 'react';
import WarningAlert from './WarningAlert';

export default () =>
  <React.Fragment>
    <WarningAlert>
      <p>Ovaj sajt se više ne ažurira od 19.05.2020 i služi kao istorijska arhiva.</p>
    </WarningAlert>

    <p><strong>Poslednji broj do kojeg je ovaj sajt azžuriran je 10.733.</strong> Za ažurne vesti i spisak važnih brojeva telefona posetite portal Ministarstva zdravlja <a href='https://covid19.rs/' target='blank'>covid19.rs</a>.</p>

    <h2>Modeli i predviđanja</h2>

    <WarningAlert>
      <p>
        {'Modeli prikazani na ovoj stranici su eksperiment jednog amatera koji nije epidemiolog niti '}
        {'ikakav medicinski stručnjak. Za više informacija o COVID-19 posetite sajt '}
        <a href='https://www.who.int/news-room/q-a-detail/q-a-coronaviruses' target='_blank'>Svetske zdravstvene organizacije.</a>
      </p>
    </WarningAlert>

    <p><em>Social distancing model</em> je predviđanje progresije epidemije na osnovu uspeha zemalja koje su ovu praksu uvele jako rano da bi sprečile eksponencijalni rast. <em>Generalni model</em> pokazuje kakvu bi situaciju mogli da očekujemo kada ne bi preduzeli adekvatne mere.</p>

    <p>Predviđanje koje sam doneo 12.03.2020. kada sam ovaj model i napravio je da će <strong>broj potvrđenih slučajeva</strong> pratiti <em>Social distancing model</em>, što je negde do 37. dana bilo ispravno. Nakon toga je usledio ozbiljniji rast novih slučajeva. Mada on za sada nije ekstreman, svakako odstupa od samog modela.</p>
  </React.Fragment>;
