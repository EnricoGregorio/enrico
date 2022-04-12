from flask import Flask, render_template, redirect

app = Flask(__name__)

redirectHome = redirect('http://127.0.0.1:5000/')

@app.route('/', methods=['GET', 'POST'])
def showHomePage():
    pageHome = render_template('index.html')
    return pageHome

# Função para carregar uma página que não existe no site.
@app.route('/<inexistente>', methods=['GET'])
def showErrorPage(inexistente):
    pageError = render_template('error404.html')
    return pageError

if __name__ == "__main__":
    app.secret_key = "fd68adt5fgt"
    app.debug = True
    app.run()
