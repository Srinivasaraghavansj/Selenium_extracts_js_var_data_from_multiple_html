from selenium import webdriver
from webdriver_manager.chrome import ChromeDriverManager
from bs4 import BeautifulSoup
from time import sleep
import os
import pandas as pd

files_ = []
data = []
folders = [
    "Python Open Editor lessons",
    "Python Predictive Lessons",
    "Python Quiz based learning with maker",
    "Python Turtle Open Editor Lessons",
    "Python Turtle Predictive Lessons",
]

for folder in folders:
    directory = os.getcwd() + "/" + folder + "/"
    for root, dirnames, filenames in os.walk(directory):
        for filename in filenames:
            if filename.endswith(".html"):
                a = filename.replace(".html", "")
                try:
                    int(a)
                    files_.append(int(a))
                except:
                    pass
    files_ = sorted(files_)
    lesson_number_above = -7
    lesson_number_below = 2400
    files_list = list(
        i for i in files_ if (i > lesson_number_above and i < lesson_number_below)
    )
    for i in files_list:
        if os.path.exists(str(directory + "/" + str(i) + ".html")):
            data.append([i, str(i) + ".html", folder])
df = pd.DataFrame(data, columns=["FN", "File name", "Folder"])
df = df.sort_values(by=["FN"])
df.reset_index(inplace=True)
df.drop("index", inplace=True, axis=1)
df.drop("FN", inplace=True, axis=1)
df.to_excel("data.xlsx", index=False)
