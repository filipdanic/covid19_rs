import rawData from './data.json';

const data = rawData.map((_, index) => ({
  ..._,
  day: `Dan ${index + 1}`,
  confirmedCases: _.confirmedCases ? Number(_.confirmedCases .replace(',', '')) : undefined,
  socialDistancingModel: Number(_.socialDistancingModel.replace(',', '')),
  generalModel: Number(_.generalModel.replace(',', '')),
  italyNormalized: _.italy ? Number(_.italy .replace(',', '')) / 8.5 : undefined,
}));

export default data;

export const columns = [
  { field: 'date', label: 'Datum' },
  { field: 'confirmedCases', label: 'Broj potvrđenih slučajeva' },
  { field: 'socialDistancingModel', label: 'Social distancing model' },
  { field: 'generalModel', label: 'Generalni model' }
];

export const historicalNotes = {
  date: {
    '2020/03/14': 'Proglašeno vanredno stanje',
    '2020/03/17': 'Uveden policijski čas (od 20h do 5h)',
    '2020/03/21': 'Policijski čas (od 17h do 5h), zatvoreni ugostiteljski objekti i javni prevoz u Beogradu.',
    '2020/04/04': 'Uveden policijski čas od subote u 13h do ponedeljka (2020/04/06) u 5h'
  },
  socialDistancingModel: {
    '4200.82': '~ Očekivani “kraj” epidemije'
  },
  generalModel: {
    '18832.47': '~ Očekivani “kraj” epidemije'
  }
};
