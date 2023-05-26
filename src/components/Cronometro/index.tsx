import Botao from "../Botao";
import Relogio from "./Relogio";
import style from './Cronometro.module.scss'
import { tempoParaSegundo } from "../../common/utils/date";

export default function Cronometro() {
    console.log('Conversão: ', tempoParaSegundo('01:01:01')) 
    return (
        <div className={style.cronometro}>
            <p className={style.titulo}>Escolha um Card e inicie o cronômetro</p>
            <div className={style.relogioWrapper}>
                <Relogio />
            </div>
            <Botao>
              Começar!
            </Botao>
        </div>
    )
}