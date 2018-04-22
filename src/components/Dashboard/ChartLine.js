import React from 'react'
import PropTypes from 'prop-types';
import { LineChart, Line, XAxis, YAxis, } from 'recharts';

class ChartLine extends React.Component{
    static propTypes = {
        data: PropTypes.array
    }

    render() {
        return (
            <div>
                <LineChart width={600} height={300} data={this.props.data}>
                    <Line type="monotone" dataKey="uv" stroke="#8884d8"/>
                    <XAxis dataKey="name"/>
                    <YAxis/>
                </LineChart>
            </div>
        )
    }
}
export default ChartLine
