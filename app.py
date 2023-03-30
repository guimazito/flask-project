import time
import random
# from waitress import serve
from flask import Flask, render_template, request
import win32com.client
import pythoncom

app = Flask(__name__)

# @app.route('/search_ad')
@app.route('/')
def index():
    code = ''
    title = ''
    category = ''
    price = ''
    total = ''
    # pythoncom.CoInitialize()
    # print('EXCEL')
    # excel = win32com.client.Dispatch("Excel.Application")
    # excel.Visible = True
    # wb_data = excel.Workbooks.Open(r'D:\Dados\DOCUMENTOS\\Cursos\\RepositorioGit\\flask-project\\teste.xlsx')
    # excel.Application.Quit()
    return render_template('index.html', code=code, title=title, category=category, price= price, total=total)

# @app.route('/search_ad', methods=['POST'])
@app.route('/', methods=['POST'])
def search():    
    # Getting product name from form
    product_name = request.form['text']
    product_name = product_name.upper()
    print(product_name)
    # Running system back-end
    print('Searching in Database...')
    time.sleep(2)
    if 'PS6' in product_name:
        code = ''
        print('no results found!')
        title = ''
        category = ''
        price = ''
        total = ''
    else:
        code = ['{}47453126'.format(random.randint(10, 99)), '{}47453126'.format(random.randint(10, 99)), '{}47453126'.format(random.randint(10, 99)), '{}47453126'.format(random.randint(10, 99)), '{}47453126'.format(random.randint(10, 99))]
        print(code)
        title = ['Ps2 com 1controle sem fio', 'PS2 (Play2) impecável com todo material novo e 15 jogos só aqui!', 'PS2 slim completo e todo original.', 'Vendo PS2 não está ligando', 'Vendo agora este PS2 (Play2) completo pronto pra jogar !!!']
        category = ['Consoles', 'Consoles', 'Videogames', 'Videogames', 'Brinquedos e jogos']
        price = ['R$ 200', 'R$ 300', 'R$ 380', 'R$ 150', 'R$ 300']        
        total = random.randint(5, 10)
    return render_template('index.html', code=code, title=title, category=category, price= price, total=total)

if __name__ == '__main__':
    app.run()
#     #serve(app, host='0.0.0.0', port=80)