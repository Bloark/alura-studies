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
8. Criando uma lista atraves do function Component

```js
import React from 'react';
function Lista() {
    return (
        <aside>
            <h2>Estudos do dia</h2>
            <ul>
                <li>
                    <h3>
                        React
                    </h3>
                    <span>
                        02:00:00
                    </span>
                </li>
                <li>
                    <h3>
                        JavaScript
                    </h3>
                    <span>
                        01:00:00
                    </span>
                </li>
            </ul>            
       </aside>
    ) 
}
export default Lista;
```

9. importar no App.tsx

```js
import React from 'react';
import Formulario from './components/Formulario';
import Lista from './components/Lista'


function App() {
  return (
    <div className="App">
      <Formulario />
      <Lista />
    </div>
  );
}

export default App;
```

10. Renderizando um array

```js
import React from 'react';
function Lista() {
    const tarefas = [{
        tarefa: 'React',
        tempo: '02:00:00'
    }, {
        tarefa: 'Javascript',
        tempo: '01:00:00'
        }, {
        tarefa: 'Typescript',
        tempo: '03:00:00'
    }]
    return (
        <aside>
            <h2>Estudos do dia</h2>
            <ul>
                {tarefas.map((item, index) => (
                    <li key={index}>
                        <h3> {item.tarefa} </h3>
                        <span> {item.tempo} </span>
                    </li>
                ))}                
            </ul>            
       </aside>
    ) 
}
export default Lista;
```

11. Estilizar componentes
12. instalação do sass npm install --save-dev sass
13. importandos estilos definidos para os componentes.
14. instalandos css-modules configurando ele tsconfig.json "plugins": [{ "name": "typescript-plugin-css-modules" }]
15. exemplo de como os arquivos estão sendo importados:
```js
import React from 'react';
import Formulario from '../components/Formulario';
import Lista from '../components/Lista';
import style from './style.module.scss';

function App() {
    return (
        <div className={style.AppStyle}>
            <Formulario />
            <Lista />
        </div>
    );
}

export default App;
```
16. props definindo o parametro que vao receber 
```js
class Botao extends React.Component<{texto:string}> {
    render() {
        return (
            <button className={style.botao}>
             {this.props.children}
            </button>
        )
    }
}
```
17. exemplo adicionando a props
```js
    <Botao
      texto="Adicionar"              
    />
```

18. Desestruturando o item para exibição.
```js
    {tarefas.map((item, index) => (
        <Item
        {...item}                    
        />
    ))}   
```

19. Construindo o Cronometro.
20. usar um fragmentador:
```js
    export function Relogio() {
        return (
            <>
            <span>0</span>
            <span>0</span>
            <span>:</span>
            <span>0</span>
            <span>0</span>
            </>
        )
    }
```
21. Introduzindo estados.
```js
   function Lista() {
    const [tarefas, setTarefas] = useState([{
        tarefa: 'React',
        tempo: '02:00:00'
    }, {
        tarefa: 'Javascript',
        tempo: '01:00:00'
    }, {
        tarefa: 'Typescript',
        tempo: '03:00:00'
    }])
```
22. Usando estrutura com mudança de estado com arrow function.
```js
 <h2 onClick={() => {                
                setTarefas([...tarefas, { tarefa: "Estudar estado", tempo: "05:00:00" }])
                
}}

```
