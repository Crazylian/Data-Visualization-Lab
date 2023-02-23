var ec_line = echarts.init(document.getElementById("linechart"),'essos')

var lineoption = {
    legend: {
        // selectedMode:"single"
        data: ['每日新增感染', '每日新增死亡', '累计感染人数', '累计死亡人数', '七日感染人数', '七日死亡人数', '十四日感染人数', '十四日死亡人数'],
        selected: {
            '每日新增感染': true,
            '每日新增死亡': false,
            '累计感染人数': false,
            '累计死亡人数': false,
            '七日感染人数': false,
            '七日死亡人数': false,
            '十四日感染人数': false,
            '十四日死亡人数': false
        },
        orient: 'vertical',
        right: 'right',
        top: '12px',
    },
    title: {
        text: '疫情状况折线图',
        subtext: 'World',
        itemGap: 5,
        textStyle: {
            fontFamily: "HarmonyOS_Sans_SC_Bold",
            fontSize: 20,
            fontWeight: "bolder"
        },
        left: '12px',
        top: '12px'
    },
    tooltip: {
        trigger:'axis'
    },
    dataset: [
        {
            // 提供一份数据。
            dimensions: ['location'],
            source: [
                { location: 'World', '2015': 43.3, 'values': 85.8, 'values2': 93.7 },
                { location: 'World', '2015': 83.1, 'values': 73.4, 'values2': 55.1 },
                { location: 'World', '2015': 86.4, 'values': 65.2, 'values2': 82.5 },
                { location: 'United States', '2015': 72.4, 'values': 53.9, 'values2': 39.1 },
                { location: 'United States', '2015': 52.8, 'values': 85.8, 'values2': 93.7 },
                { location: 'United States', '2015': 15.6, 'values': 73.4, 'values2': 55.1 },
                { location: 'Cheese Cocoa', '2015': 48.4, 'values': 65.2, 'values2': 82.5 },
                { location: 'Walnut Brownie', '2015': 21.4, 'values': 53.9, 'values2': 39.1 }
            ]
        },
        {
            transform: {
                type: 'filter',
                config: {
                    dimension: 'location', '=': 'World'
                }
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
     },
    // 声明一个 Y 轴，数值轴。
    yAxis: {},
    // 声明多个 line 系列，默认情况下，每个系列会自动对应到 dataset 的每一列。
    series: [
        { type: 'line', seriesLayoutBy: 'row', datasetIndex: 1 },
        { name: '每日新增感染', type: 'line', seriesLayoutBy: 'row', datasetIndex: 1 },
        { name: '每日新增死亡', type: 'line', seriesLayoutBy: 'row', datasetIndex: 1 },
        { name: '累计感染人数', type: 'line', seriesLayoutBy: 'row', datasetIndex: 1 },
        { name: '累计死亡人数', type: 'line', seriesLayoutBy: 'row', datasetIndex: 1 },
        { name: '七日感染人数', type: 'line', seriesLayoutBy: 'row', datasetIndex: 1 },
        { name: '七日死亡人数', type: 'line', seriesLayoutBy: 'row', datasetIndex: 1 },
        { name: '十四日感染人数', type: 'line', seriesLayoutBy: 'row', datasetIndex: 1 },
        { name: '十四日死亡人数', type: 'line', seriesLayoutBy: 'row', datasetIndex: 1 },
    ]
};

ec_line.setOption(lineoption);