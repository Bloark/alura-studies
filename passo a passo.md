# Passo a Passo (Projeto React)


1. npx create-react-app --template typescript alura-studies --use-npm
2. dentro da pasta npm start
3. Criando um componente
4. criado uma pasta components\Botao\index.tsx
```js
import React from 'react';
class Botao extends React.Component {
    render() {
        return (
            <button>
                Botão
            </button>
        )
    }
}
export default Botao;
```
5. Importando dentro do App.tsx
```js
import React from 'react';
import Botao from './components/Botao'

function App() {
  return (
    <div className="App">
    <Botao/>
    </div>
  );
}

export default App;
```
6. Criando o formulário dentro da pasta component\Formulario\index.tsx

```js
import React from 'react';
import Botao from '../Botao'

class Formulario extends React.Component{
    render() {
        return (
            <form>
                <div>
                    <label htmlFor="tarefa">
                        Adicione um novo estudo
                    </label>
                    <input
                        type="text"
                        name="tarefa"
                        id="tarefa"
                        placeholder="O que você quer estudar"
                        required
                    />
                </div>
                <div>
                    <label htmlFor="tempo">
                        tempo
                    </label>
                    <input
                        type="time"
                        step="1"
                        name="tempo"
                        id="tempo"
                        min="00:00:00"
                        max="01:30:00"
                        required
                    />
                </div>
                <Botao/>
            </form>
        )
    }
}

export default Formulario;
```
7. depois importar dentro do App.tsx

