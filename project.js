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
            text: 'Price (k $)'
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
    tooltip: {
        enabled: true,
        borderColor: 'gray',
        borderRadius: 10,
        formatter: function () {
            return 'Sales: ' + this.y +'<br/>'+'Year: ' + this.point.z +
                ' - ' + this.point.m;
        }

    },
    series: [{
        name: 'Sales Amount',
        data: [
        {
            name: '930',
            y: 160,
                z: 1973, m: 1989
        },
        {
            name:'964',
            y: 15446,
            z: 1988, m: 1994
        },
        {
            name:'993',
            y: 23133,
        },
            {
                color: '#FAC500',
                name: '996',
                y: 64614,
                z: 1993, m: 1998
            },
            {
                color: '#272121',
                name: '997',
                y: 61021,
                z: 1997, m: 2005
            },
            {
                color: '#FB2B11',
                name: '991',
                y: 66792,
                z: 2011, m: 2019
            },
            {
                name: '992',
                y: 9265,
                z: 2019, m: 2020
            },
    ]
    }]
});

























var gaugeOptions = {
    chart: {
        type: 'solidgauge'
    },

    title: null,

    pane: {
        center: ['45%', '95%'],
        size: '140%',
        startAngle: -90,
        endAngle: 90,
        background: {
            backgroundColor:
                Highcharts.defaultOptions.legend.backgroundColor || '#EEE',
            innerRadius: '60%',
            outerRadius: '100%',
            shape: 'arc'
        }
    },

    exporting: {
        enabled: false
    },

    tooltip: {
        enabled: false
    },

    // the value axis
    yAxis: {
        stops: [
            [0.1, '#FAC500'], 
            [0.5, '#FAC500'], 
            [0.9, '#FB2B11']
        ],
        lineWidth: 0,
        tickWidth: 0,
        minorTickInterval: null,
        tickAmount: 2,
        title: {
            y: -70
        },
        labels: {
            y: 16
        }
    },

    plotOptions: {
        solidgauge: {
            dataLabels: {
                y: 5,
                borderWidth: 0,
                useHTML: true
            }
        }
    }
};

// The speed gauge
var chartSpeed1 = Highcharts.chart('container-speed1', Highcharts.merge(gaugeOptions, {
    yAxis: {
        min: 0,
        max: 200,
        title: {
            text: 'Max Speed'
        }
    },

    credits: {
        enabled: false
    },

    series: [{
        name: 'Max Speed',
        data: [130],
        dataLabels: {
            format:
                '<div style="text-align:center">' +
                '<span style="font-size:25px">{y}</span><br/>' +
                '<span style="font-size:12px;opacity:0.4">mph</span>' +
                '</div>'
        },
        tooltip: {
            valueSuffix: ' mph'
        }
    }]

}));


// Bring life to the dials
setInterval(function () {
    // Speed
    var point,
        newVal,
        inc;
    const val1 = 130;
    if (chartSpeed1) {
        point = chartSpeed1.series[0].points[0];
        newVal = point.y - 10;

        if (newVal < val1 - 11) {
            newVal = point.y + 5;
        }

        else {
            newVal = point.y - 5;
        }

        point.update(newVal);
    }

}, 2000);


var chartSpeed2 = Highcharts.chart('container-speed2', Highcharts.merge(gaugeOptions, {
    yAxis: {
        min: 0,
        max: 200,
        title: {
            text: 'Max Speed'
        }
    },

    credits: {
        enabled: false
    },

    series: [{
        name: 'Max Speed',
        data: [162],
        dataLabels: {
            format:
                '<div style="text-align:center">' +
                '<span style="font-size:25px">{y}</span><br/>' +
                '<span style="font-size:12px;opacity:0.4">mph</span>' +
                '</div>'
        },
        tooltip: {
            valueSuffix: ' mph'
        }
    }]

}));

// Bring life to the dials
setInterval(function () {
    // Speed
    var point,
        newVal,
        inc;
    const val1 = 162;
    if (chartSpeed2) {
        point = chartSpeed2.series[0].points[0];
        newVal = point.y - 10;

        if (newVal < val1 - 11) {
            newVal = point.y + 5;
        }

        else {
            newVal = point.y - 5;
        }

        point.update(newVal);
    }

}, 2000);




var chartSpeed3 = Highcharts.chart('container-speed3', Highcharts.merge(gaugeOptions, {
    yAxis: {
        min: 0,
        max: 200,
        title: {
            text: 'Max Speed'
        }
    },

    credits: {
        enabled: false
    },

    series: [{
        name: 'Max Speed',
        data: [164],
        dataLabels: {
            format:
                '<div style="text-align:center">' +
                '<span style="font-size:25px">{y}</span><br/>' +
                '<span style="font-size:12px;opacity:0.4">mph</span>' +
                '</div>'
        },
        tooltip: {
            valueSuffix: ' mph'
        }
    }]

}));

// Bring life to the dials
setInterval(function () {
    // Speed
    var point,
        newVal,
        inc;
    const val1 = 164;
    if (chartSpeed3) {
        point = chartSpeed3.series[0].points[0];
        newVal = point.y - 10;

        if (newVal < val1 - 11) {
            newVal = point.y + 5;
        }

        else {
            newVal = point.y - 5;
        }

        point.update(newVal);
    }

}, 2000);




var chartSpeed4 = Highcharts.chart('container-speed4', Highcharts.merge(gaugeOptions, {
    yAxis: {
        min: 0,
        max: 200,
        title: {
            text: 'Max Speed'
        }
    },

    credits: {
        enabled: false
    },

    series: [{
        name: 'Max Speed',
        data: [168],
        dataLabels: {
            format:
                '<div style="text-align:center">' +
                '<span style="font-size:25px">{y}</span><br/>' +
                '<span style="font-size:12px;opacity:0.4">mph</span>' +
                '</div>'
        },
        tooltip: {
            valueSuffix: ' mph'
        }
    }]

}));

// Bring life to the dials
setInterval(function () {
    // Speed
    var point,
        newVal,
        inc;
    const val1 = 168;
    if (chartSpeed4) {
        point = chartSpeed4.series[0].points[0];
        newVal = point.y - 10;

        if (newVal < val1 - 11) {
            newVal = point.y + 5;
        }

        else {
            newVal = point.y - 5;
        }

        point.update(newVal);
    }

}, 2000);



var chartSpeed5 = Highcharts.chart('container-speed5', Highcharts.merge(gaugeOptions, {
    yAxis: {
        min: 0,
        max: 200,
        title: {
            text: 'Max Speed'
        }
    },

    credits: {
        enabled: false
    },

    series: [{
        name: 'Max Speed',
        data: [176],
        dataLabels: {
            format:
                '<div style="text-align:center">' +
                '<span style="font-size:25px">{y}</span><br/>' +
                '<span style="font-size:12px;opacity:0.4">mph</span>' +
                '</div>'
        },
        tooltip: {
            valueSuffix: ' mph'
        }
    }]

}));

// Bring life to the dials
setInterval(function () {
    // Speed
    var point,
        newVal,
        inc;
    const val1 = 176;
    if (chartSpeed5) {
        point = chartSpeed5.series[0].points[0];
        newVal = point.y - 10;

        if (newVal < val1 - 11) {
            newVal = point.y + 5;
        }

        else {
            newVal = point.y - 5;
        }

        point.update(newVal);
    }

}, 2000);



var chartSpeed6 = Highcharts.chart('container-speed6', Highcharts.merge(gaugeOptions, {
    yAxis: {
        min: 0,
        max: 200,
        title: {
            text: 'Max Speed'
        }
    },

    credits: {
        enabled: false
    },

    series: [{
        name: 'Max Speed',
        data: [180],
        dataLabels: {
            format:
                '<div style="text-align:center">' +
                '<span style="font-size:25px">{y}</span><br/>' +
                '<span style="font-size:12px;opacity:0.4">mph</span>' +
                '</div>'
        },
        tooltip: {
            valueSuffix: ' mph'
        }
    }]

}));

// Bring life to the dials
setInterval(function () {
    // Speed
    var point,
        newVal,
        inc;
    const val1 = 180;
    if (chartSpeed6) {
        point = chartSpeed6.series[0].points[0];
        newVal = point.y - 10;

        if (newVal < val1 - 11) {
            newVal = point.y + 5;
        }

        else {
            newVal = point.y - 5;
        }

        point.update(newVal);
    }

}, 2000);



var chartSpeed7 = Highcharts.chart('container-speed7', Highcharts.merge(gaugeOptions, {
    yAxis: {
        min: 0,
        max: 200,
        title: {
            text: 'Max Speed'
        }
    },

    credits: {
        enabled: false
    },

    series: [{
        name: 'Max Speed',
        data: [190],
        dataLabels: {
            format:
                '<div style="text-align:center">' +
                '<span style="font-size:25px">{y}</span><br/>' +
                '<span style="font-size:12px;opacity:0.4">mph</span>' +
                '</div>'
        },
        tooltip: {
            valueSuffix: ' mph'
        }
    }]

}));

// Bring life to the dials
setInterval(function () {
    // Speed
    var point,
        newVal,
        inc;
    const val1 = 190;
    if (chartSpeed7) {
        point = chartSpeed7.series[0].points[0];
        newVal = point.y - 10;

        if (newVal < val1 - 11) {
            newVal = point.y + 5;
        }

        else {
            newVal = point.y - 5;
        }

        point.update(newVal);
    }

}, 2000);


var chartSpeed8 = Highcharts.chart('container-speed8', Highcharts.merge(gaugeOptions, {
    yAxis: {
        min: 0,
        max: 200,
        title: {
            text: 'Max Speed'
        }
    },

    credits: {
        enabled: false
    },

    series: [{
        name: 'Max Speed',
        data: [182],
        dataLabels: {
            format:
                '<div style="text-align:center">' +
                '<span style="font-size:25px">{y}</span><br/>' +
                '<span style="font-size:12px;opacity:0.4">mph</span>' +
                '</div>'
        },
        tooltip: {
            valueSuffix: ' mph'
        }
    }]

}));

// Bring life to the dials
setInterval(function () {
    // Speed
    var point,
        newVal,
        inc;
    const val1 = 182;
    if (chartSpeed8) {
        point = chartSpeed8.series[0].points[0];
        newVal = point.y - 10;

        if (newVal < val1 - 11) {
            newVal = point.y + 5;
        }

        else {
            newVal = point.y - 5;
        }

        point.update(newVal);
    }

}, 2000);