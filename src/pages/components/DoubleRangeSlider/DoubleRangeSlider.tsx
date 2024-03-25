import React, { useContext } from 'react';
import { RangeSlider } from '@mantine/core';
import style from './double-range-slider.module.scss';
import { RangeContext } from '../main/main';

const marks = [
  { value: 1, label: '1' },
  { value: 2, label: '2' },
  { value: 3, label: '3' },
  { value: 4, label: '4' },
  { value: 5, label: '5' },
  { value: 6, label: '6' },
  { value: 7, label: '7' },
  { value: 8, label: '8' },
  { value: 9, label: '9' },
  { value: 10, label: '10' },
];

const DoubleRangeSlider: React.FC = () => {
  const { minMultiplier, maxMultiplier, setMinMultiplier, setMaxMultiplier } =
    useContext(RangeContext);

  return (
    <RangeSlider
      minRange={1}
      min={1}
      max={10}
      step={1}
      defaultValue={[minMultiplier, maxMultiplier]}
      marks={marks}
      onChange={([min, max]) => [setMinMultiplier(min), setMaxMultiplier(max)]}
      labelAlwaysOn
      mih={'2em'}
      miw={320}
      color='#b344fb'
    />
  );
};

export default DoubleRangeSlider;
