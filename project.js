Highcharts.theme = {
    colors: ['#2b908f', '#90ee7e', '#f45b5b', '#7798BF', '#aaeeee', '#ff0066',
        '#eeaaee', '#55BF3B', '#DF5353', '#7798BF', '#aaeeee'],
    chart: {
        backgroundColor: 'black',
        style: {
            fontFamily: '\'Unica One\', sans-serif'
        },
        plotBorderColor: '#606063'
    },
    title: {

        align: 'center',
        style: {
            textTransform: 'uppercase',
            color: '#FAC500',
            fontSize: '14px'
        }
    },
    subtitle: {
        style: {
            color: '#FAC500',
            fontSize: '11px'
        }
    },
    xAxis: {
        gridLineColor: '#707073',
        labels: {
            style: {
                color: '#E0E0E3'
            }
        },
        lineColor: '#707073',
        minorGridLineColor: '#505053',
        tickColor: '#707073',
        title: {
            style: {
                fontSize: '14px',
                color: '#A0A0A3'

            }
        }
    },
    yAxis: {
        gridLineColor: '#707073',
        labels: {
            style: {
                color: '#E0E0E3'
            }
        },
        lineColor: '#707073',
        minorGridLineColor: '#505053',
        tickColor: '#707073',
        tickWidth: 1,
        title: {
            style: {
                fontSize: '12px',
                color: '#A0A0A3'
            }
        }
    },
    tooltip: {
        backgroundColor: 'rgba(0, 0, 0, 0.85)',
        style: {
            color: '#F0F0F0'
        }
    },
    plotOptions: {
        series: {
            dataLabels: {
                color: '#B0B0B3'
            },
            marker: {
                lineColor: '#333'
            }
        },
        boxplot: {
            fillColor: '#505053'
        },
        candlestick: {
            lineColor: 'white'
        },
        errorbar: {
            color: 'white'
        }
    },
    legend: {
        itemStyle: {
            color: '#E0E0E3'
        },
        itemHoverStyle: {
            color: '#FFF'
        },
        itemHiddenStyle: {
            color: '#606063'
        }
    },
    credits: {
        style: {
            color: '#666'
        }
    },
    labels: {
        style: {
            color: '#707073'
        }
    },

    drilldown: {
        activeAxisLabelStyle: {
            color: '#F0F0F3'
        },
        activeDataLabelStyle: {
            color: '#F0F0F3'
        }
    },

    navigation: {
        buttonOptions: {
            symbolStroke: '#DDDDDD',
            theme: {
                fill: '#505053'
            }
        }
    },

    // scroll charts
    rangeSelector: {
        buttonTheme: {
            fill: '#505053',
            stroke: '#000000',
            style: {
                color: '#CCC'
            },
            states: {
                hover: {
                    fill: '#707073',
                    stroke: '#000000',
                    style: {
                        color: 'white'
                    }
                },
                select: {
                    fill: '#000003',
                    stroke: '#000000',
                    style: {
                        color: 'white'
                    }
                }
            }
        },
        inputBoxBorderColor: '#505053',
        inputStyle: {
            backgroundColor: '#333',
            color: 'silver'
        },
        labelStyle: {
            color: 'silver'
        }
    },

    navigator: {
        handles: {
            backgroundColor: '#666',
            borderColor: '#AAA'
        },
        outlineColor: '#CCC',
        maskFill: 'rgba(255,255,255,0.1)',
        series: {
            color: '#7798BF',
            lineColor: '#A6C7ED'
        },
        xAxis: {
            gridLineColor: '#505053'
        }
    },

    scrollbar: {
        barBackgroundColor: '#808083',
        barBorderColor: '#808083',
        buttonArrowColor: '#CCC',
        buttonBackgroundColor: '#606063',
        buttonBorderColor: '#606063',
        rifleColor: '#FFF',
        trackBackgroundColor: '#404043',
        trackBorderColor: '#404043'
    },

    // special colors for some of the
    legendBackgroundColor: 'rgba(0, 0, 0, 0.5)',
    background2: '#505053',
    dataLabelsColor: '#B0B0B3',
    textColor: '#C0C0C0',
    contrastTextColor: '#F0F0F3',
    maskColor: 'rgba(255,255,255,0.3)'
};

// Apply the theme
Highcharts.setOptions(Highcharts.theme);








Highcharts.chart('horsepower', {
    credits: {
        enabled: false
    },

    legend: {
        enabled: false
    },

    chart: {
        height: 200,
        type: 'line',
        plotBorderWidth: null,
        plotShadow: false,
    },
    title: {
        text: 'Horsepower by Generation'
    },
    subtitle: {
        text: ''
    },
    xAxis: {
        title: {
            text: 'Generations'
        },
        categories: ['901', '930', '964', '993', '996', '997', '991', '992']
    },
    yAxis: {
        title: {
            text: 'Horsepower(hp)'
        }
    },
    plotOptions: {
        line: {
            dataLabels: {
                enabled: true
            },
            enableMouseTracking: true
        }
    },

    tooltip: {
        enabled: true,
        borderColor: 'gray',
        borderRadius: 10,
        formatter: function () {
            return '🏎️' + ' ' + '<b>' + this.x + '</b><br/>' + 'Year: ' + this.point.z +
                ' - ' + this.point.m;
        }

    },


    series: [{
        color: '#FB2B11',
        name: 'Porsche 911',
        data: [
            { y: 130, z: 1963, m: 1973 },
            { y: 282, z: 1973, m: 1989 },
            { y: 247, z: 1988, m: 1994 },
            { y: 296, z: 1993, m: 1998 },
            { y: 315, z: 1997, m: 2005 },
            { y: 355, z: 2004, m: 2012 },
            { y: 395, z: 2011, m: 2019 },
            { y: 379, z: 2019, m: 2020 },]
    }],
});


Highcharts.chart('price', {
    credits: {
        enabled: false
    },

    legend: {
    },

    chart: {
        height: 260,
        type: 'line',
        plotBorderWidth: null,
        plotShadow: false,
    },
    title: {
        text: 'Base Price in the US'
    },
    subtitle: {
        text: '* price is converted by inflation calculator'
    },
    xAxis: {
        title: {
            text: 'Generations'
        },
        categories: ['901', '930', '964', '993', '996', '997', '991', '992']
    },
    yAxis: {
        title: {
            text: 'Price (thousand dollar)'
        }
    },
    plotOptions: {
        line: {
            dataLabels: {
                enabled: true,
                formatter: function () {
                    return '$' + this.y + 'k';
                },
                style: {
                    fontSize: '8px',
                }
            },
            enableMouseTracking: true
        }
    },

    tooltip: {
        enabled: true,
        borderColor: 'gray',
        borderRadius: 10,
        formatter: function () {
            return 'Year: ' + this.point.z +
                ' - ' + this.point.m;
        }

    },


    series: [{
        color: '#FB2B11',
        name: 'Converted Price',
        data: [
            { y: 56, z: 1963, m: 1973 },
            { y: 180, z: 1973, m: 1989 },
            { y: 131, z: 1988, m: 1994 },
            { y: 65, z: 1993, m: 1998 },
            { y: 127, z: 1997, m: 2005 },
            { y: 97, z: 2004, m: 2012 },
            { y: 116, z: 2011, m: 2019 },
            { y: 99, z: 2019, m: 2020 },]
    },
    {
        color: '#57595D',
        name: 'Original Price',
        data: [
            { y: 5, z: 1963, m: 1973 },
            { y: 49, z: 1973, m: 1989 },
            { y: 65, z: 1988, m: 1994 },
            { y: 38, z: 1993, m: 1998 },
            { y: 85, z: 1997, m: 2005 },
            { y: 79, z: 2004, m: 2012 },
            { y: 104, z: 2011, m: 2019 },
            { y: 99, z: 2019, m: 2020 }

        ]

    }],
});


Highcharts.chart('sales', {
    credits: {
        enabled: false
    },
    legend:{
        layout: 'vertical',
        align: 'right',
        verticalAlign: 'middle'
    },
    chart: {
        height: 260,
        plotBackgroundColor: null,
        plotBorderWidth: null,
        plotShadow: false,
        type: 'pie'
    },
    title: {
        text: 'Sales in the US',
        margin: 0,
    },
    subtitle: {
        text: '* sales of 901 not applicable',
        margin: 0,
    },
    accessibility: {
        point: {
        }
    },

    plotOptions: {
        pie: {
            startAngle: 90,
            allowPointSelect: true,
            cursor: 'pointer',
            dataLabels: {
                enabled: true,
                format: '<b>{point.name}</b>:<br>{point.percentage:.1f} %',
                
                style: {
                    textOutline: 'none',
                    fontWeight: 'normal',
                    color: 'white',
                },
            },
            showInLegend: true
        }
    },
    series: [{
        name: 'Sales Amount',
        data: [
        {
            name: '930',
            y: 160,
        },
        {
            name:'964',
            y: 15446,
        },
        {
            name:'993',
            y: 23133,
        },
            {
                color: '#FAC500',
                name: '996',
                y: 64614,
            },
            {
                color: '#272121',
                name: '997',
                y: 61021,
            },
            {
                color: '#FB2B11',
                name: '991',
                y: 66792,
            },
            {
                name: '992',
                y: 9265,
            },
    ]
    }]
});
