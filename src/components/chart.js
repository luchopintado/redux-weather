import React, { Component } from 'react';
import { Sparklines, SparklinesBars, SparklinesLine } from 'react-sparklines';

export default (props) => {
    return (
        <Sparklines data={props.data} height={80} width={180}>
            <SparklinesLine color={props.color} />
        </Sparklines>
    );
};