var ec_map = echarts.init(document.getElementById('map'),'essos');
// ec_map.showLoading()

let worlddata = [
    { name: 'China', value: '100' }, { name: 'United States', value: '2000', groupId: 0 }, { name: 'Democratic Republic of Congo', value: '50', groupId: 1 }
];

let worlddata2 = [
    { name: 'China', value: '200' }, { name: 'United States', value: '3000' }, { name: 'United Kingdom', value: '500' }
];

var nameMap = {
    'Dem. Rep. Congo': 'Democratic Republic of Congo',
    'Central African Rep.': 'Central African Republic',
    'S. Sudan': 'South Sudan',
    'Dominican Rep.': 'Dominican Republic',
    'Antigua and Barb.': 'Antigua and Barbuda',
    'Dem. Rep. Korea': 'North Korea',
    'Korea': 'South Korea',
    'Côte d\'Ivoire': 'Cote d\'Ivoire'
}

var mapoption = {
    baseOption: {
        backgroundColor: '#FFFFFF',
        legend: {
            show: true,
            orient: 'vertical',
            selectedMode: 'single',
            left: 'top',
            top: "60px"
        },
        title: {
            text: '28-Day 全球 COVID-19 感染数据',
            subtext: '',
            x: 'left',
            textStyle: {
                fontFamily: "HarmonyOS_Sans_SC_Bold",
                fontWeight: "bolder",
                fontSize: 30,
            }
        },
        tooltip: {
            trigger: 'item'
        },
        toolbox: {
            feature: {
                myTool1: {
                    title: "Return To World-Vision",
                    show: true,
                    icon:'path://M460,288.13a9.14,9.14,0,0,0-9.4,8.88c0,.15,0,.29,0,.43,0,7.81,8.72,15,9.08,15.32a.5.5,0,0,0,.65,0c.38-.35,9.08-8.29,9.08-15.32a9.13,9.13,0,0,0-9-9.31ZM460,302a4.46,4.46,0,1,1,4.45-4.46A4.46,4.46,0,0,1,460,302Z',
                    onclick:function(){
                        lineoption.dataset[1].transform.config["="] = 'World';
                        lineoption.title.subtext = 'World';
                        ec_line.setOption(lineoption)
                    }
                },
                saveAsImage:{}
            }
        },
        visualMap: {
            type: 'piecewise',
            show: true,
            pieces: [
                { min: 500000 },
                { min: 100000, max: 500000 },
                { min: 50000, max: 100000 },
                { min: 10000, max: 50000 },
                { min: 1000, max: 10000 },
                { min: 100, max: 999 },
                { min: 50, max: 100 },
                { max: 50 }
            ],
            text: "",
            x: 'left',
            y: 'bottom',
            calculable: true,
            inRange: {
                color: ['#fffea2', '#ffae70', '#ff726f', '#aa4b49', '#420000'],
            },
        },
        timeline: {
            show: true,
            axisType: 'category',
            data: ['1', '2', '3', '4', '5']
        },
        series: [
            {
                name: '新增感染人数',
                type: 'map',
                map: 'world',
                nameMap: nameMap,
                roam: true,
                label: {
                    normal: {
                        show: false
                    },
                    emphasis: {
                        show: true,
                        fontSize: 22
                    }
                },
                showLegendSymbol: false
            },
            {
                name: '新增死亡人数',
                type: 'map',
                map: 'world',
                nameMap: nameMap,
                roam: true,
                label: {
                    normal: {
                        show: false
                    },
                    emphasis: {
                        show: true,
                        fontSize: 22
                    }
                },
                showLegendSymbol: false
            },
            {
                name: '累计感染人数(每百万人)',
                type: 'map',
                map: 'world',
                nameMap: nameMap,
                roam: true,
                label: {
                    normal: {
                        show: false
                    },
                    emphasis: {
                        show: true,
                        fontSize: 22
                    }
                },
                showLegendSymbol: false
            },
            {
                name: '累计死亡人数(每百万人)',
                type: 'map',
                map: 'world',
                nameMap: nameMap,
                roam: true,
                label: {
                    normal: {
                        show: false
                    },
                    emphasis: {
                        show: true,
                        fontSize: 22
                    }
                },
                showLegendSymbol: false
            }
        ]
    },
    options: [
        {
            series: [
                {
                    data: worlddata,
                },
                {
                    data: worlddata2,
                },
                {
                    data: worlddata,
                },
                {
                    data: worlddata2,
                }
            ]
        },
        {
            series: [
                {
                    data: worlddata
                },
                {
                    data: worlddata
                },
                {
                    data: worlddata,
                },
                {
                    data: worlddata,
                }
            ]
        },
        {
            series: [
                {
                    data: worlddata2
                },
                {
                    data: worlddata2
                },
                {
                    data: worlddata2,
                },
                {
                    data: worlddata2,
                }
            ]
        }
    ]
};

ec_map.setOption(mapoption);

//点击触发事件
ec_map.on("click", function (params) {
    if (params.componentType != 'series') {
        return
    }
    // alert(params.name);
    lineoption.dataset[1].transform.config["="]=params.name;
    lineoption.title.subtext=params.name;
    ec_line.setOption(lineoption)
})