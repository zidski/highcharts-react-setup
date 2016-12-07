import React from 'react';
import {render} from 'react-dom';
import style from '../../styles/HelloForm.scss'; 
import HighchartsBarChart from './HighchartsBarChart.jsx';

class App extends React.Component {
  render () {
    return (
    	<div className="hello-form">
    		<p> Hello React!</p>
    		<HighchartsBarChart />
    	</div>
    )
  }
}

render(<App/>, document.getElementById('app'));