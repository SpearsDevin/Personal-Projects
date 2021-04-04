from subprocess import call
import webbrowser

Stacks = 'https://stackoverflow.com'
Git = 'https://github.com/SpearsDevin'
w3 = 'https://www.w3schools.com/'

chrome_path = 'C:/Program Files (x86)/Google/Chrome/Application/chrome.exe %s'
webbrowser.get(chrome_path).open(Stacks)
webbrowser.get(chrome_path).open(Git)
webbrowser.get(chrome_path).open(w3)