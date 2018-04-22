import React from 'react'
import PropTypes from 'prop-types';
import { PieChart, Pie, Legend, Tooltip } from 'recharts';

class ChartPie extends React.Component{
    static propTypes = {
        data: PropTypes.array
    }

    render() {
        return (
            <div>
                <PieChart width={600} height={300}>
                    <Pie isAnimationActive={false} data={this.props.data} cx={200} cy={200} outerRadius={80} fill="#8884d8" label/>
                    <Tooltip/>
                </PieChart>
            </div>
        )
    }
}
export default ChartPie
