from selenium import webdriver
from webdriver_manager.chrome import ChromeDriverManager
from bs4 import BeautifulSoup
from time import sleep
import os
import pandas as pd

files_ = []
data = []

directory = os.getcwd()
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
print("Files:", files_list)

for i in files_list:
    driver = webdriver.Chrome(ChromeDriverManager().install())
    newav = r"file://" + os.getcwd() + r"/" + str(i) + ".html"
    print("Newav:", newav)
    driver.get(newav)
    sleep(0.1)

    pred_guide = driver.execute_script("""return pred_guide""")
    print("File: ", str(i) + ".html")
    data.append(["", "", ""])
    data.append(["", "", ""])
    data.append([str(i) + ".html", "", ""])
    for n, i in enumerate(pred_guide):
        soup = BeautifulSoup(i["file"], features="html.parser")
        print(n, soup.get_text())
        data.append(["", n, soup.get_text()])

    driver.close()
    driver.quit()

df = pd.DataFrame(data)
df.to_excel("data.xlsx", index=False)
