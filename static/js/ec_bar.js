var ec_bar = echarts.init(document.getElementById('bar'),'essos')

var baroption = {
    legend: {
        // selectedMode:"single"
        top:"12px"
    },
    title: {
        text: '感染人数统计',
        subtext: '累计',
        itemGap: 5,
        textStyle: {
            fontFamily: "HarmonyOS_Sans_SC_Bold",
            fontWeight: "bolder",
            fontSize: 20,
        },
        left: '12px',
        top: '12px'
    },
    tooltip: {
        // trigger: 'axis',
        axisPointer: {
            type: 'shadow'
        }
    },
    toolbox: {
        feature: {
            myTool1: {
                title: "Sort by Value",
                show: true,
                icon: 'path://M2.5 6C2.5 5.17 3.16992 4.5 4 4.5C4.83008 4.5 5.5 5.17 5.5 6C5.5 6.83 4.83008 7.5 4 7.5C3.16992 7.5 2.5 6.83 2.5 6ZM8 7C7.44995 7 7 6.55 7 6C7 5.45 7.44995 5 8 5L20 5C20.55 5 21 5.45 21 6C21 6.55 20.55 7 20 7L8 7ZM2.5 12C2.5 11.17 3.16992 10.5 4 10.5C4.83008 10.5 5.5 11.17 5.5 12C5.5 12.83 4.83008 13.5 4 13.5C3.16992 13.5 2.5 12.83 2.5 12ZM8 13L20 13C20.55 13 21 12.55 21 12C21 11.45 20.55 11 20 11L8 11C7.44995 11 7 11.45 7 12C7 12.55 7.44995 13 8 13ZM4 16.5C3.16992 16.5 2.5 17.18 2.5 18C2.5 18.82 3.17993 19.5 4 19.5C4.82007 19.5 5.5 18.82 5.5 18C5.5 17.18 4.83008 16.5 4 16.5ZM20 19L8 19C7.44995 19 7 18.55 7 18C7 17.45 7.44995 17 8 17L20 17C20.55 17 21 17.45 21 18C21 18.55 20.55 19 20 19Z',
                onclick: function () {
                    baroption.series[0].datasetIndex = 1
                    baroption.series[1].datasetIndex = 1
                    ec_bar.setOption(baroption)
                }
            },
            myTool2: {
                title: "Sort by Country",
                show: true,
                icon: 'path://M2.5 6C2.5 5.17 3.16992 4.5 4 4.5C4.83008 4.5 5.5 5.17 5.5 6C5.5 6.83 4.83008 7.5 4 7.5C3.16992 7.5 2.5 6.83 2.5 6ZM8 7C7.44995 7 7 6.55 7 6C7 5.45 7.44995 5 8 5L20 5C20.55 5 21 5.45 21 6C21 6.55 20.55 7 20 7L8 7ZM2.5 12C2.5 11.17 3.16992 10.5 4 10.5C4.83008 10.5 5.5 11.17 5.5 12C5.5 12.83 4.83008 13.5 4 13.5C3.16992 13.5 2.5 12.83 2.5 12ZM8 13L20 13C20.55 13 21 12.55 21 12C21 11.45 20.55 11 20 11L8 11C7.44995 11 7 11.45 7 12C7 12.55 7.44995 13 8 13ZM4 16.5C3.16992 16.5 2.5 17.18 2.5 18C2.5 18.82 3.17993 19.5 4 19.5C4.82007 19.5 5.5 18.82 5.5 18C5.5 17.18 4.83008 16.5 4 16.5ZM20 19L8 19C7.44995 19 7 18.55 7 18C7 17.45 7.44995 17 8 17L20 17C20.55 17 21 17.45 21 18C21 18.55 20.55 19 20 19Z',
                onclick: function () {
                    baroption.series[0].datasetIndex = 2
                    baroption.series[1].datasetIndex = 2
                    ec_bar.setOption(baroption)
                }
            },
            saveAsImage: {}
        }
    },
    dataset: [
        {
            // 提供一份数据。
            dimensions: ['location', 'total_cases', 'total_deaths'],
            source: [
                { location: 'World', 2015: 43.3, total_cases: 85.8, total_deaths: 93.7 },
                { location: 'United States', 2015: 72.4, total_cases: 53.9, total_deaths: 39.1 },
                { location: 'Cheese Cocoa', 2015: 48.4, total_cases: 65.2, total_deaths: 82.5 },
                { location: 'Walnut Brownie', 2015: 21.4, total_cases: 53.9, total_deaths: 39.1 }
            ]
        },
        {
            transform: {
                type: 'sort',
                config: [
                    { dimension: 'total_cases', order: 'desc' },
                    { dimension: 'total_deaths', order: 'desc' }
                ]
            }
        },
        {
            transform: {
                type: 'sort',
                config: [
                    { dimension: 'location', order: 'asc' }
                ]
            }
        }
    ],
    dataZoom: [
        { type: 'inside' },
        { type: 'slider' }
    ],
    // 声明一个 X 轴，类目轴（category）。默认情况下，类目轴对应到 dataset 第一列。
    xAxis: {
        type: 'category',
        splitLine: {
            show: false
        },
    },
    // 声明一个 Y 轴，数值轴。
    yAxis: {},
    // 声明多个 line 系列，默认情况下，每个系列会自动对应到 dataset 的每一列。
    series: [
        {
            name: '累计感染',
            type: 'bar',
            seriesLayoutBy: 'row',
            datasetIndex: 1,
            stack: 'X',
            emphasis: {
                focus: 'self'
            },
            large: true
        },
        {
            name: '累计死亡',
            type: 'bar',
            seriesLayoutBy: 'row',
            datasetIndex: 1,
            stack: 'X',
            emphasis: {
                focus: 'self'
            },
            large: true
        }
    ]
};

ec_bar.setOption(baroption);