# Data-Visualization-Lab
基于Flask+JavaScript，前后端分离的全球疫情数据可视化项目。使用Echart完成图表展示，不使用数据库。
运行`app.py`来架设本地服务器。
# Reference
- 疫情数据来源为约翰霍普金斯大学（JHU）系统科学与工程中心（CSSE）的 COVID-19 数
据库。新冠感染人口与死亡人口均由 JHU 提供，其数据采自各国公布的新冠感染情况，具体信息来源
可以在他们的 github 项目中找到。
项目地址：https://github.com/CSSEGISandData/COVID-19
- 对于相关数据的统合整理，使用了第三方库 cowidev。这是一个由 Our World in Data 开发
的命令工具，是一个集成的数据管道，用于转换并整合 JSU 提供的疫情数据。这项工具可以每天定时
地从 JSU 的 COVID 资源中心获取每日最新的数据，并提供转换为 csv 格式数据的下载方式。这项工
具的使用以及配置方式，包括数据处理的流程可以在他们的 github 项目中找到
项目地址：https://github.com/owid/covid-19-data
