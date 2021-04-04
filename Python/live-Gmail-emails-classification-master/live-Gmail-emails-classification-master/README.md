# Email-Classification
It's very easy to build a ML model which works well on training data, but is it the case for test data?
This project is done for learning purposes. It aims to test a ML model on real Gmail emails to evaluate it's accuracy. We first build the model and then we extract
our "NORMAL" emails from our inbox and then we feed the built model with them to know if he gonna classify them as spams (which means our model is bad) or normal
(which mean our model is very good). If you want you can run the same test on your spam inbox.

![project](https://user-images.githubusercontent.com/24523745/87186436-c9627f00-c2eb-11ea-98ac-0b4591253904.png)

# Utilities

- Email extractor:
You can extract emails from your Gmail account by running ```extract_email.py ``` which is in check inbox directory

- GUI: you can run the GUI with the following command ```python3 notifGUI.py```
- You can train and save the model by running ```spamdetection.py ```
- You can run the whole application with ``` python3 app.py ```

# GUI
The program is running constantly which means it has an eye permanently on our inbox. Whenever we have a new email, we provide it to the model. If he judges it as normal then we will have a notification in our desktop. The small notification GUI is built using PyQt5

# Installing the requirements
You can install the tools with the command: 
``` pip install scikit-learn pandas seaborn matplotlib nltk ```
# Testing Your emails
To test your emails just run the code in jupyter notebook and write your email as a text.
