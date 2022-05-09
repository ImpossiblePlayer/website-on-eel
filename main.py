import json
import os
import datetime as dt
import eel


data = {}

date = dt.datetime.now().strftime('%d:%m:%y')

@eel.expose
def return_info():
	with open('data.json', 'r') as file:
		data = json.load(file)
	return data


@eel.expose
def add_info(task: str):
	with open('data.json', 'w') as file:
		json.dump(data, file, indent=2)

eel.init('web')
eel.start('index.html', size=(1100, 900))







