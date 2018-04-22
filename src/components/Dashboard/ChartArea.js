import React from 'react'
import PropTypes from 'prop-types';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip } from 'recharts';

class ChartArea extends React.Component{
    static propTypes = {
        data: PropTypes.array
    }

    render() {
        return (
            <div>
                <AreaChart width={600} height={300} data={this.props.data}
                           margin={{top: 10, right: 30, left: 0, bottom: 0}}>
                    <XAxis dataKey="name"/>
                    <YAxis/>
                    <Tooltip/>
                    <Area type='monotone' dataKey='uv' stroke='#8884d8' fill='#8884d8' />
                </AreaChart>
            </div>
        )
    }
}
export default ChartArea