from flask import Flask, render_template


app = Flask(__name__)

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/setting')
def settings():
    return render_template('setting.html')

@app.route('/classes')
def classes():
    return render_template('classes.html')

@app.route('/races')
def races():
    return render_template('races.html')

if __name__ == "__main__":
    app.run(debug=True)