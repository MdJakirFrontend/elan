
$(window).on('load', function () {

    let idealCardWidth = $(".ideal-card-nav-content").width();
    let responsiveChartWidth = $(".ideal-card-nav-content").width() + $("#navigation-sidebar").outerWidth();
    if ($(window).width() < 768) {
        $('.pie-chart').width(responsiveChartWidth);
    }

    // #bar-chart-1
    if ($('#bar-chart-1').length) {
        Highcharts.chart('bar-chart-1', {
            credits: {
                enabled: false
            },
            chart: {
                height: $(window).width() > 576 ? 375 : 200,
                width: $(window).width() > 992 ? idealCardWidth : responsiveChartWidth,
                type: 'column',
            },
            legend: false,
            title: {
                text: ''
            },
            subtitle: {
                text: ''
            },
            xAxis: {
                categories: [
                    '01',
                    '03',
                    '05',
                    '07',
                    '09',
                    '11',
                    '13',
                    '15',
                    '17',
                    '19',
                    '21',
                    '23',
                    '25',
                    '27',
                    '29',
                ],
                labels: {
                    style: {
                        color: '#56606D',
                        fontSize: '16px',
                        fontFamily: "Proxima Nova",
                    }
                },
                crosshair: true
            },
            yAxis: {
                min: 0,
                title: {
                    text: ''
                },
                labels: {
                    style: {
                        color: '#56606D',
                        fontSize: '16px',
                        fontFamily: "Proxima Nova",
                    }
                }
            },
            plotOptions: {
                column: {
                    pointPadding: .2,
                    borderWidth: 0
                },
                series: {
                    borderRadius: 0,
                    color: '#AAC8F8',
                }
            },
            series: [{
                name: '',
                data: [350, 900, 650, 550, 440, 800, 1150, 980, 400, 400, 800, 450, 700, 970, 630]
            }],
        });
    }

    // #bar-chart-2
    if ($('#bar-chart-2').length) {
        Highcharts.chart('bar-chart-2', {
            credits: {
                enabled: false
            },
            chart: {
                height: 375,
                width: $(window).width() > 992 ? idealCardWidth : responsiveChartWidth,
                type: 'column'
            },
            legend: false,
            title: {
                text: ''
            },
            subtitle: {
                text: ''
            },
            xAxis: {
                categories: [
                    '01',
                    '03',
                    '05',
                    '07',
                    '09',
                    '11',
                    '13',
                    '15',
                    '17',
                    '19',
                    '21',
                    '23',
                    '25',
                    '27',
                    '29',
                ],
                labels: {
                    style: {
                        color: '#56606D',
                        fontSize: '16px',
                        fontFamily: "Proxima Nova",
                    }
                },
                crosshair: true
            },
            yAxis: {
                min: 0,
                title: {
                    text: ''
                },
                labels: {
                    style: {
                        color: '#56606D',
                        fontSize: '16px',
                        fontFamily: "Proxima Nova",
                    }
                }
            },
            plotOptions: {
                column: {
                    pointPadding: .2,
                    borderWidth: 0
                },
                series: {
                    borderRadius: 0,
                    color: '#AAC8F8',
                }
            },
            series: [{
                name: '',
                data: [1150, 500, 1150, 350, 440, 100, 650, 480, 200, 400, 400, 850, 400, 170, 330]
            }]
        });
    }

    // #bar-chart-3
    if ($('#bar-chart-3').length) {
        Highcharts.chart('bar-chart-3', {
            credits: {
                enabled: false
            },
            chart: {
                height: 375,
                width: $(window).width() > 992 ? idealCardWidth : responsiveChartWidth,
                type: 'column'
            },
            legend: false,
            title: {
                text: ''
            },
            subtitle: {
                text: ''
            },
            xAxis: {
                categories: [
                    '01',
                    '03',
                    '05',
                    '07',
                    '09',
                    '11',
                    '13',
                    '15',
                    '17',
                    '19',
                    '21',
                    '23',
                    '25',
                    '27',
                    '29',
                ],
                labels: {
                    style: {
                        color: '#56606D',
                        fontSize: '16px',
                        fontFamily: "Proxima Nova",
                    }
                },
                crosshair: true
            },
            yAxis: {
                min: 0,
                title: {
                    text: ''
                },
                labels: {
                    style: {
                        color: '#56606D',
                        fontSize: '16px',
                        fontFamily: "Proxima Nova",
                    }
                }
            },
            plotOptions: {
                column: {
                    pointPadding: .2,
                    borderWidth: 0
                },
                series: {
                    borderRadius: 0,
                    color: '#AAC8F8',
                }
            },
            series: [{
                name: '',
                data: [550, 600, 750, 550, 840, 800, 1150, 980, 300, 600, 800, 450, 800, 370, 930]
            }]
        });
    }

    // #line-chart-1
    if ($('#line-chart-1').length) {
        let ctx = document.getElementById('line-chart-1').getContext('2d');
        let gradient = ctx.createLinearGradient(0, 0, 0, 450);
        gradient.addColorStop(0, 'rgba(66,134,244,.2)');
        gradient.addColorStop(0.6, 'rgba(255,255,255,.3)');
        gradient.addColorStop(1, 'rgba(255, 255, 255, .1)');

        let myChart = new Chart(ctx, {
            type: 'line',
            data: {
                labels: ['jun', 'Feb', 'March', 'Apr', 'May', 'Jun', 'July', 'Aug', 'Oct', 'Sept', 'Nov', 'Dec'],
                datasets: [
                    {
                        label: 'Income',
                        data: [600, 350, 550, 400, 450, 300, 825, 800, 300, 700, 400, 550],
                        pointRadius: 0,
                        backgroundColor: gradient,
                        borderColor: [
                            '#2F82EE',
                        ],
                        borderWidth: 2
                    },
                    {
                        label: 'Previous Month',
                        data: [200, 400, 250, 600, 400, 450, 600, 325, 400, 200, 450, 300],
                        pointRadius: 0,
                        backgroundColor: gradient,
                        borderColor: [
                            '#FF7777',
                        ],
                        borderWidth: 2
                    },
                ]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                legend: {
                    display: true,
                    labels: {
                        boxWidth: 7,
                        usePointStyle: true,
                        fontSize: 14,
                        fontFamily: "Proxima Nova",
                        fontColor: '#4E5C73',
                        fontStyle: '400',
                        generateLabels: function (chart) {
                            labels = Chart.defaults.global.legend.labels.generateLabels(chart);
                            labels[0].fillStyle = '#2F82EE';
                            labels[1].fillStyle = '#FF7777';
                            return labels;
                        }
                    }
                },
                scales: {
                    yAxes: [{
                        ticks: {
                            min: 0,
                            max: 1000,
                            stepSize: 200,
                            fontSize: 14,
                            fontFamily: "Proxima Nova",
                            fontColor: '#4E5C73',
                            fontStyle: '400'
                        }
                    }],
                    xAxes: [{
                        gridLines: {
                            display: false
                        },
                        ticks: {
                            fontSize: 14,
                            fontFamily: "Proxima Nova",
                            fontColor: '#4E5C73',
                            fontStyle: '400'
                        }
                    }]
                }
            },
            plugins: [{
                beforeInit: function (chart, options) {
                    chart.legend.afterFit = function () {
                        this.height = this.height + 30;
                    };
                }
            }]
        });
    }

    // #line-chart-2
    if ($('#line-chart-2').length) {
        let ctx = document.getElementById('line-chart-2').getContext('2d');
        let gradient = ctx.createLinearGradient(0, 0, 0, 450);
        gradient.addColorStop(0, 'rgba(66,134,244,.2)');
        gradient.addColorStop(0.6, 'rgba(255,255,255,.3)');
        gradient.addColorStop(1, 'rgba(255, 255, 255, .1)');

        let myChart = new Chart(ctx, {
            type: 'line',
            data: {
                labels: ['jun', 'Feb', 'March', 'Apr', 'May', 'Jun', 'July', 'Aug', 'Oct', 'Sept', 'Nov', 'Dec'],
                datasets: [
                    {
                        label: 'Income',
                        data: [800, 250, 550, 400, 450, 300, 725, 200, 400, 800, 300, 600],
                        pointRadius: 0,
                        backgroundColor: gradient,
                        borderColor: [
                            '#2F82EE',
                        ],
                        borderWidth: 2
                    },
                    {
                        label: 'Previous Month',
                        data: [300, 600, 650, 600, 100, 450, 600, 725, 500, 200, 550, 400],
                        pointRadius: 0,
                        backgroundColor: gradient,
                        borderColor: [
                            '#FF7777',
                        ],
                        borderWidth: 2
                    },
                ]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                legend: {
                    display: true,
                    labels: {
                        boxWidth: 7,
                        usePointStyle: true,
                        fontSize: 14,
                        fontFamily: "Proxima Nova",
                        fontColor: '#4E5C73',
                        fontStyle: '400',
                        generateLabels: function (chart) {
                            labels = Chart.defaults.global.legend.labels.generateLabels(chart);
                            labels[0].fillStyle = '#2F82EE';
                            labels[1].fillStyle = '#FF7777';
                            return labels;
                        }
                    }
                },
                scales: {
                    yAxes: [{
                        ticks: {
                            min: 0,
                            max: 1000,
                            stepSize: 200,
                            fontSize: 14,
                            fontFamily: "Proxima Nova",
                            fontColor: '#4E5C73',
                            fontStyle: '400'
                        }
                    }],
                    xAxes: [{
                        gridLines: {
                            display: false
                        },
                        ticks: {
                            fontSize: 14,
                            fontFamily: "Proxima Nova",
                            fontColor: '#4E5C73',
                            fontStyle: '400'
                        }
                    }]
                }
            },
            plugins: [{
                beforeInit: function (chart, options) {
                    chart.legend.afterFit = function () {
                        this.height = this.height + 30;
                    };
                }
            }]
        });
    }

    // #line-chart-1
    if ($('#line-chart-3').length) {
        let ctx = document.getElementById('line-chart-3').getContext('2d');
        let gradient = ctx.createLinearGradient(0, 0, 0, 450);
        gradient.addColorStop(0, 'rgba(66,134,244,.2)');
        gradient.addColorStop(0.6, 'rgba(255,255,255,.3)');
        gradient.addColorStop(1, 'rgba(255, 255, 255, .1)');
        let myChart = new Chart(ctx, {
            type: 'line',
            data: {
                labels: ['jun', 'Feb', 'March', 'Apr', 'May', 'Jun', 'July', 'Aug', 'Oct', 'Sept', 'Nov', 'Dec'],
                datasets: [
                    {
                        label: 'Income',
                        data: [500, 350, 450, 400, 450, 300, 825, 400, 800, 700, 400, 350],
                        pointRadius: 0,
                        backgroundColor: gradient,
                        borderColor: [
                            '#2F82EE',
                        ],
                        borderWidth: 2
                    },
                    {
                        label: 'Previous Month',
                        data: [200, 500, 250, 100, 800, 450, 600, 325, 400, 350, 450, 350],
                        pointRadius: 0,
                        backgroundColor: gradient,
                        borderColor: [
                            '#FF7777',
                        ],
                        borderWidth: 2
                    },
                ]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                legend: {
                    display: true,
                    labels: {
                        boxWidth: 7,
                        usePointStyle: true,
                        fontSize: 14,
                        fontFamily: "Proxima Nova",
                        fontColor: '#4E5C73',
                        fontStyle: '400',
                        generateLabels: function (chart) {
                            labels = Chart.defaults.global.legend.labels.generateLabels(chart);
                            labels[0].fillStyle = '#2F82EE';
                            labels[1].fillStyle = '#FF7777';
                            return labels;
                        }
                    }
                },
                scales: {
                    yAxes: [{
                        ticks: {
                            min: 0,
                            max: 1000,
                            stepSize: 200,
                            fontSize: 14,
                            fontFamily: "Proxima Nova",
                            fontColor: '#4E5C73',
                            fontStyle: '400'
                        }
                    }],
                    xAxes: [{
                        gridLines: {
                            display: false
                        },
                        ticks: {
                            fontSize: 14,
                            fontFamily: "Proxima Nova",
                            fontColor: '#4E5C73',
                            fontStyle: '400'
                        }
                    }]
                }
            },
            plugins: [{
                beforeInit: function (chart, options) {
                    chart.legend.afterFit = function () {
                        this.height = this.height + 30;
                    };
                }
            }]
        });
    }

    // #pie-chart-1
    if ($('#pie-chart-1').length) {
        Highcharts.chart('pie-chart-1', {
            credits: {
                enabled: false
            },
            chart: {
                margin: [60, 0, 0, 0],
                plotBackgroundColor: null,
                plotBorderWidth: null,
                plotShadow: false,
                type: 'pie'
            },
            title: {
                text: ''
            },
            tooltip: {
                pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
            },
            accessibility: {
                point: {
                    valueSuffix: '%'
                }
            },
            legend: {
                align: 'center',
                verticalAlign: 'top',
                itemStyle: {
                    fontSize: 14,
                    fontFamily: "Proxima Nova",
                    fontColor: '#4E5C73',
                    fontWeight: '600',
                }
            },
            plotOptions: {
                pie: {
                    allowPointSelect: true,
                    cursor: 'pointer',
                    dataLabels: {
                        enabled: false
                    },
                    showInLegend: true,
                    borderWidth: 3,
                    dataLabels: {
                        enabled: true,
                        color: '#fff',
                        style: {
                            textShadow: false,
                            textOutline: false,
                            fontSize: 18,
                            fontFamily: "Proxima Nova",
                            fontWeight: '600',
                        },
                        format: '<span> {point.percentage}% </span>',
                        distance: -50,
                        filter: {
                            property: 'percentage',
                            operator: '>',
                            value: 4
                        }
                    }
                }
            },
            colors: ['#72D8C8', '#808CFF', '#5DA2F1', '#FB7FA5', '#78E0F2', '#FFD375'],
            series: [{
                name: 'Brands',
                colorByPoint: true,
                data: [{
                    name: 'January',
                    y: 20,
                    sliced: true,
                    selected: true
                }, {
                    name: 'February',
                    y: 22
                }, {
                    name: 'March',
                    y: 5
                }, {
                    name: 'Apr',
                    y: 25
                }, {
                    name: 'May',
                    y: 18
                }, {
                    name: 'Jun',
                    y: 10
                }]
            }],
        });
    }
    // #pie-chart-1
    if ($('#pie-chart-2').length) {
        Highcharts.chart('pie-chart-2', {
            credits: {
                enabled: false
            },
            chart: {
                margin: [60, 0, 0, 0],
                plotBackgroundColor: null,
                plotBorderWidth: null,
                plotShadow: false,
                type: 'pie'
            },
            title: {
                text: ''
            },
            tooltip: {
                pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
            },
            accessibility: {
                point: {
                    valueSuffix: '%'
                }
            },
            legend: {
                align: 'center',
                verticalAlign: 'top',
                itemStyle: {
                    fontSize: 14,
                    fontFamily: "Proxima Nova",
                    fontColor: '#4E5C73',
                    fontWeight: '600',
                }
            },
            plotOptions: {
                pie: {
                    size: 320,
                    allowPointSelect: true,
                    cursor: 'pointer',
                    dataLabels: {
                        enabled: false
                    },
                    showInLegend: true,
                    borderWidth: 3,
                    dataLabels: {
                        enabled: true,
                        color: '#fff',
                        style: {
                            textShadow: false,
                            textOutline: false,
                            fontSize: 18,
                            fontFamily: "Proxima Nova",
                            fontWeight: '600',
                        },
                        format: '<span> {point.percentage}% </span>',
                        distance: -50,
                        filter: {
                            property: 'percentage',
                            operator: '>',
                            value: 4
                        }
                    }
                }
            },
            colors: ['#717744', '#98ddb5', '#c39797', '#00bfe7', '#3ca9d0', '#d6b6e6'],
            series: [{
                name: 'Brands',
                colorByPoint: true,
                data: [{
                    name: 'January',
                    y: 10,
                    sliced: true,
                    selected: true
                }, {
                    name: 'February',
                    y: 20
                }, {
                    name: 'March',
                    y: 40
                }, {
                    name: 'Apr',
                    y: 15
                }, {
                    name: 'May',
                    y: 5
                }, {
                    name: 'Jun',
                    y: 10
                }]
            }]
        });
    }


    // #pie-chart-1
    if ($('#pie-chart-3').length) {
        Highcharts.chart('pie-chart-3', {
            credits: {
                enabled: false
            },
            chart: {
                margin: [60, 0, 0, 0],
                plotBackgroundColor: null,
                plotBorderWidth: null,
                plotShadow: false,
                type: 'pie'
            },
            title: {
                text: ''
            },
            tooltip: {
                pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
            },
            accessibility: {
                point: {
                    valueSuffix: '%'
                }
            },
            legend: {
                align: 'center',
                verticalAlign: 'top',
                itemStyle: {
                    fontSize: 14,
                    fontFamily: "Proxima Nova",
                    fontColor: '#4E5C73',
                    fontWeight: '600',
                }
            },
            plotOptions: {
                pie: {
                    size: 320,
                    allowPointSelect: true,
                    cursor: 'pointer',
                    dataLabels: {
                        enabled: false
                    },
                    showInLegend: true,
                    borderWidth: 3,
                    dataLabels: {
                        enabled: true,
                        color: '#fff',
                        style: {
                            textShadow: false,
                            textOutline: false,
                            fontSize: 18,
                            fontFamily: "Proxima Nova",
                            fontWeight: '600',
                        },
                        format: '<span> {point.percentage}% </span>',
                        distance: -50,
                        filter: {
                            property: 'percentage',
                            operator: '>',
                            value: 4
                        }
                    }
                }
            },
            colors: ['#dd966b', '#e4b3ff', '#aea1ff', '#FB7FA5', '#660066', '#504d63'],
            series: [{
                name: 'Brands',
                colorByPoint: true,
                data: [{
                    name: 'January',
                    y: 40,
                    sliced: true,
                    selected: true
                }, {
                    name: 'February',
                    y: 5
                }, {
                    name: 'March',
                    y: 5
                }, {
                    name: 'Apr',
                    y: 10
                }, {
                    name: 'May',
                    y: 20
                }, {
                    name: 'Jun',
                    y: 20
                }]
            }]
        });
    }


});