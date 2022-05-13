# from bs4 import BeautifulSoup
# import json
# from pprint import pprint
# import re

# with open("2.html", "r", encoding='utf-8') as f:
#     html_doc= f.read()

# soup = BeautifulSoup(html_doc, 'html.parser')
# # print(soup.prettify())
# # data = json.loads(soup.find('script').text())
# # print(data)
# txt = "".join([str(i) for i in list(soup.findAll('script'))])

# json_string = re.search(r'correct_answer', txt, flags=re.DOTALL)

# print(json_string)
# # json_data = json.loads('{' + json_string[1] + '}')

# # pprint(json_data)s

from selenium import webdriver
from webdriver_manager.chrome import ChromeDriverManager

from time import sleep
import os

with open("data.csv", "w+", encoding='utf-8') as f:
    # f.write("correct_answer,question,right_answer_message,wrong_answer_message,button_1_text,button_2_text\n")
    f.write("{\n")
    files_list = [2,3,4,9,10,12,13,14,15,16,17,20,24,25,28,29,30]

    for i in files_list:
        driver = webdriver.Chrome(ChromeDriverManager().install())
        newav = "file://"+os.getcwd()+"/"+str(i)+".html"
        print(newav)
        driver.get(newav)
        sleep(2)

        correct_answer = driver.execute_script("""return window.correct_answer""")
        print("correct_answer",correct_answer)

        question = driver.execute_script("return question")
        print("question",question)

        right_answer_message = driver.execute_script("""return window.right_answer_message""")
        print("right_answer_message",right_answer_message)

        wrong_answer_message = driver.execute_script("""return window.wrong_answer_message""")
        print("wrong_answer_message",wrong_answer_message)

        button_1_text = driver.execute_script("""return window.button_1_text""")
        print("button_1_text",button_1_text)

        button_2_text = driver.execute_script("""return window.button_2_text""")
        print("button_2_text",button_2_text)

        driver.close()
        driver.quit()

        main_string = f"""{i}:{{
correct_answer : {correct_answer},
question:`{question}`,
right_answer_message:`{right_answer_message}`,
wrong_answer_message:`{wrong_answer_message}`,
button_1_text:`{button_1_text}`,
button_2_text:`{button_2_text}`
        }},"""
        f.write(main_string)
        # f.write(",".join([str(correct_answer),str(question),str(right_answer_message),str(wrong_answer_message),str(button_1_text),str(button_2_text)])+"\n")

    f.write("\n}")