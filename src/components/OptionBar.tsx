import Checkbox from "./Checkbox";
import React from "react";

export default ({
  selected,
  onChange,
}: {
  selected: {
    confirmedCases: boolean,
    socialDistancingModel: boolean,
    generalModel: boolean,
    italy: boolean,
  },
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void,
}) =>
  <div className="optionBar">
    <p>Prikaz, period 2020/03/08 – 2020/05/02</p>
    <Checkbox
      name="confirmedCases"
      checked={selected.confirmedCases}
      label="Potvrđeni slučajevi"
      onChange={onChange}
    />
    <Checkbox
      name="socialDistancingModel"
      checked={selected.socialDistancingModel}
      label="Social distancing model"
      onChange={onChange}
    />
    <Checkbox
      name="generalModel"
      checked={selected.generalModel}
      label="Generalni model"
      onChange={onChange}
    />
    <Checkbox
      name="italy"
      checked={selected.italy}
      label="Italija (rast)"
      onChange={onChange}
    />
  </div>;
