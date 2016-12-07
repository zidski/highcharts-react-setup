import React from 'react';

class HighchartsBarChart extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      chartId: 'LineChart' + new Date().getTime()
    }
  }

  componentDidMount() {
        let id = this.state.chartId;
        //let categories = this.props.categories;
        //let series = this.props.series;
        let currentYear = new Date().getFullYear();

    window.setTimeout(() => {
            Highcharts.chart(id, {
                title: {
                    text: '',
                },
                subtitle: {
                    text: '',
                },
                credits: {
                    text: '©' + currentYear + ' Grant Thornton.',
                    href: 'http://www.grantthornton.co.uk/'
                },
                xAxis: {
                    categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
                    lineWidth: 2,
                },
                yAxis: {
                    lineWidth: 2,
                    title: {
                        text: ''
                    },
                    plotLines: [{
                        value: 0,
                        width: 1,
                        color: '#808080'
                    }]
                },
                plotOptions: {
                    series: {
                    }
                },
                legend: {
                    layout: 'vertical',
                    align: 'right',
                    verticalAlign: 'top',
                    y: 30,
                    backgroundColor: '#fff',
                    borderColor: '#ccc',
                    borderWidth: .5
                },
                exporting: {
                    enabled: true
                },
                series: [{
                            name: 'Tokyo',
                            data: [7.0, 6.9, 9.5, 14.5, 18.2, 21.5, 25.2, 26.5, 23.3, 18.3, 13.9, 9.6]
                        }, {
                            name: 'New York',
                            data: [-0.2, 0.8, 5.7, 11.3, 17.0, 22.0, 24.8, 24.1, 20.1, 14.1, 8.6, 2.5]
                        }, {
                            name: 'Berlin',
                            data: [-0.9, 0.6, 3.5, 8.4, 13.5, 17.0, 18.6, 17.9, 14.3, 9.0, 3.9, 1.0]
                        }, {
                            name: 'London',
                            data: [3.9, 4.2, 5.7, 8.5, 11.9, 15.2, 17.0, 16.6, 14.2, 10.3, 6.6, 4.8]
                        }]
            });
        }, 50);
  }

  render() {
     var style = {
            marginTop: "25px",
            marginBottom: "0px"
        };

    return (
      <div>
        <div id={this.state.chartId} style={style}></div>
      </div>
    );
  }

  
}

export default HighchartsBarChart;