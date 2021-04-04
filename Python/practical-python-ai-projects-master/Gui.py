# import
import PySimpleGUI as sg

#layout
layout = [[sg.Text('Enter something:'), sg.Input(key='-IN-')],
          [sg.Text('Out output will go here',key='-OUT-', size=(30,1) )],
          [sg.Button('Ok'), sg.Button('Exit')]]

# window
window = sg.Window('Title', layout)

# event loop
while True:
    event, values = window.read()
    if event == 'Exit' or event == sg.WIN_CLOSED:
        break
    window['-OUT-'].update(values['-IN-'])

#close
window.close()