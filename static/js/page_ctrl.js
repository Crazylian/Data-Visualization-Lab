function updatetime() {
    $.ajax({
        url: "/time",
        type: 'post',
        timeout: 10000,
        success: function (data) {
            $("#tim").html("Latest Update: " + data)
        },
        error: function (xhr, type, errorThrown) {
            alert("GetTimeError!")
        }
    })
}

function getcarddata() {
    $.ajax({
        url: "/card",
        type: "POST",
        // dataType: "application/json",
        data:{'region':'World'},
        success: function (res) {
            $("span").text("World")
            $("#card1").html(res.new_cases + " 人");
            $("#card2").html(res.new_deaths + " 人");
            $("#card3").html(res.total_cases + " 人");
            $("#card4").html(res.total_deaths + " 人");
        },
        error: function (xhr, type, errorThrown) {
            alert("GetCardDataError")
            console.log(xhr);
            console.log(type);
            console.log(errorThrown);
        }
    })
}

function getmapdata() {
    $.ajax({
        url: "/map",
        type: "POST",
        dataType: "json",
        success: function (data) {
            // alert("Success")
            // console.log(data);
            // mapoption.options[0].series[0].data = data.new_case;
            // mapoption.options[0].series[1].data=data.new_death;
            // mapoption.options[0].series[2].data = data.total_case;
            // mapoption.options[0].series[3].data = data.total_death;
            mapoption.options=data.options
            mapoption.baseOption.timeline.data = data.timeline;
            ec_map.setOption(mapoption);
        },
        error: function () {
            alert("GetDataError!")
        }
    })
}

function getlinedata(){
    $.ajax({
        url: "/line",
        type: "POST",
        dataType: "json",
        success: function (data) {
            lineoption.dataset[0].dimensions=data.dimensions
            lineoption.dataset[0].source=data.source
            // lineoption.legend.data=data.dimensions.slice(2)
            ec_line.setOption(lineoption)
        },
        error: function () {
            alert("GetLineError!")
        }
    })
}

function getbardata(){
    $.ajax({
        url:"/bar",
        type:"POST",
        dataType:"json",
        success: function(data) {
            baroption.dataset[0].source=data.bar
            pmbaroption.dataset[0].source=data.bar_pm
            ec_bar.setOption(baroption)
            ec_bar_pm.setOption(pmbaroption)
        },
        error :function(){
            alert("GetBarError!")
        }
    })
}


getlinedata();
getcarddata();
getmapdata();
getbardata();
updatetime();
// setInterval(updatetime(), 60000);