
import React, { Component } from 'react';
import './Style.css';
import Select from 'react-select';

const options = [
    { value: 'ETH', label: 'ETH' },
    { value: 'DAI', label: 'DAI' },
    { value: 'BTC', label: 'BTC' }
  ];

function CryptoSelect() {
  return (
    <div>

	<div class={'neo_glass2'}>
    <Select options={options} />
	</div>

    </div>
  );
}

export default CryptoSelect;