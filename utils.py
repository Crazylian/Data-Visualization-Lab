import time
import csv
import pandas as pd
import numpy as np
import datetime

new_cases = r'data\new_cases.csv'
new_deaths = r'data\new_deaths.csv'
total_cases_per_million = r'data\total_cases_per_million.csv'
total_deaths_per_million = r'data\total_deaths_per_million.csv'
total_deaths = r'data\total_deaths.csv'
total_cases = r'data\total_cases.csv'
full_data = r'data\full_data.csv'


def gettime():
    # time_str = time.strftime("%Y-%m-%d %H:%M")
    dt = datetime.datetime(2023,1,28)
    time_str = dt.strftime("%Y-%m-%d")
    return time_str


# def get_map_data(i):
#     df = pd.read_csv(new_cases)
#     nc = df.iloc[-i:]
#     df = pd.read_csv(new_deaths)
#     nd = df.iloc[-i:]
#     df = pd.read_csv(total_cases_per_million)
#     tcpm = df.iloc[-i:]
#     df = pd.read_csv(total_deaths_per_million)
#     tdpm = df.iloc[-i:]
#     df = pd.read_csv(total_cases)
#     tc = df.iloc[-i:]
#     df = pd.read_csv(total_cases)
#     td = df.iloc[-i:]
#     return nc, nd, tcpm, tdpm, tc, td

def get_csv_data(filename:str,i:int):
    df=pd.read_csv(filename)
    return(df.iloc[-i:])

def get_card_data(loc:str):
    df = pd.read_csv(full_data)
    df = df.fillna('NaN')
    df_groupby = df[['date', 'location']].groupby(by='location', as_index=False).max()
    df_merge = pd.merge(df_groupby, df, on=['date', 'location']).drop_duplicates()
    df_card = df_merge.loc[df_merge['location'] == loc ]
    return df_card


def get_line_data():
    df = pd.read_csv(full_data, dtype='str')
    df = df.fillna(value='NaN')
    return df.to_dict(orient='records'), list(df.columns)


if __name__ == '__main__':
    print(get_card_data("world"))
