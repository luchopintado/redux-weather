import React, { Component } from 'react';
import { Sparklines, SparklinesReferenceLine, SparklinesLine } from 'react-sparklines';

function average (data) {
    const sum = data.reduce((prev, next) => prev + next) / data.length;

    return Math.round(sum*100)/100;
}

export default (props) => {
    return (
        <Sparklines data={props.data} height={80} width={180}>
            <SparklinesLine color={props.color} />
            <SparklinesReferenceLine type="avg"/>
            <div>{average(props.data)} {props.units}</div>
        </Sparklines>
    );
};