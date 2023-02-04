from flask import Flask
from flask import render_template
import utils
import pandas as pd
from flask import jsonify

app = Flask(__name__)


@app.route("/")
def home():
    return render_template("index.html")


@app.route("/time", methods=["get", "post"])
def updatetime():
    return utils.gettime()


@app.route("/card", methods=["get", "post"])
def getcarddata():
    df = utils.get_card_data()
    return jsonify(df.iloc[0].to_dict())


@app.route("/line", methods=["get", "post"])
def getlinedata():
    df, dimensions = utils.get_line_data()
    return jsonify({"dimensions": dimensions, "source": df})


@app.route("/bar", methods=["get", "post"])
def getbardata():
    source=[]
    source_pm=[]
    tc = utils.get_csv_data(utils.total_cases, 1)
    td = utils.get_csv_data(utils.total_deaths, 1)
    tcpm=utils.get_csv_data(utils.total_cases_per_million, 1)
    tdpm=utils.get_csv_data(utils.total_deaths_per_million, 1)
    tc.drop(
        labels=[
            'date',
            'World',
            'Asia',
            'Africa',
            'South America',
            'North America',
            'Europe',
            'Oceania',
            'High income',
            'European Union',
            'Upper middle income',
            'Lower middle income',
            'Low income'
        ],
        axis=1,
        inplace=True,
    )
    td.drop(
        labels=[
            'date',
            'World',
            'Asia',
            'Africa',
            'South America',
            'North America',
            'Europe',
            'Oceania',
            'High income',
            'European Union',
            'Upper middle income',
            'Lower middle income',
            'Low income'
        ],
        axis=1,
        inplace=True,
    )
    tcpm.drop(
        labels=[
            'date',
            'World',
            'Asia',
            'Africa',
            'South America',
            'North America',
            'Europe',
            'Oceania',
            'High income',
            'European Union',
            'Upper middle income',
            'Lower middle income',
            'Low income'
        ],
        axis=1,
        inplace=True,
    )
    tdpm.drop(
        labels=[
            'date',
            'World',
            'Asia',
            'Africa',
            'South America',
            'North America',
            'Europe',
            'Oceania',
            'High income',
            'European Union',
            'Upper middle income',
            'Lower middle income',
            'Low income'
        ],
        axis=1,
        inplace=True,
    )
    df = pd.concat([tc.T, td.T], axis=1)
    for index,row in df.iterrows():
        source.append({"location":index,"total_cases":str(list(row)[0]),"total_deaths":str(list(row)[1])})
    df = pd.concat([tcpm.T, tdpm.T], axis=1)
    for index,row in df.iterrows():
        source_pm.append({"location":index,"total_cases":str(list(row)[0]),"total_deaths":str(list(row)[1])})

    return jsonify({"bar":source,"bar_pm":source_pm})


@app.route("/map", methods=["get", "post"])
def getmapdata():
    date = []
    options = []
    length = 28
    # nc, nd, tcpm, tdpm = utils.get_map_data(length)
    nc = utils.get_csv_data(utils.new_cases, length)
    nd = utils.get_csv_data(utils.new_deaths, length)
    tcpm = utils.get_csv_data(utils.total_cases_per_million, length)
    tdpm = utils.get_csv_data(utils.total_deaths_per_million, length)

    for index, row in nc.iterrows():
        date.append(str(row[0]))

    nc.drop(labels='date', axis=1, inplace=True)
    nd.drop(labels='date', axis=1, inplace=True)
    tcpm.drop(labels='date', axis=1, inplace=True)
    tdpm.drop(labels='date', axis=1, inplace=True)

    for i in range(0, length):
        nc_s = []
        nd_s = []
        tcpm_s = []
        tdpm_s = []
        for columns, col in nc.iteritems():
            nc_s.append({"name": columns, "value": str(col.iloc[i])})
        for columns, col in nd.iteritems():
            nd_s.append({"name": columns, "value": str(col.iloc[i])})
        for columns, col in tcpm.iteritems():
            tcpm_s.append({"name": columns, "value": str(col.iloc[i])})
        for columns, col in tdpm.iteritems():
            tdpm_s.append({"name": columns, "value": str(col.iloc[i])})
        nc_d = {"data": nc_s}
        nd_d = {"data": nd_s}
        tcpm_d = {"data": tcpm_s}
        tdpm_d = {"data": tdpm_s}

        options.append({"series": [nc_d, nd_d, tcpm_d, tdpm_d]})
    return jsonify({"options": options, "timeline": date})


if __name__ == '__main__':
    app.run()
