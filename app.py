from flask import Flask, render_template, request





app = Flask(__name__)

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/catalogo')
def catalogo():
    return render_template('catalogo.html')

@app.route('/registro')
def registro():
    return render_template('registro.html')

@app.route('/inciar_sesion')
def inciar_sesion():
    return render_template('inciar_sesion.html')

@app.route('/recuperar_clave')
def recuperar_clave():
    return render_template('Recuperar_clave.html')

@app.route('/acercade')
def acercade():
    return render_template('acercade.html')

@app.route('/compra')
def compra():
    return render_template('compra.html')

@app.route('/camisetas')
def camisetas():
    return render_template('camisetas.html')














if __name__ == '__main__':
    app.run(debug=True)
