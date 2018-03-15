import React, { Component } from 'react';
import { View } from 'react-native';

import Entrada from './Entrada';
import Operacao from './Operacao';
import Comando from './Comando';

class Painel extends Component {
    constructor(props) {
        super(props);

        this.state = { num1: '10', num2: '25' };

        //para resolver estrutura léxica
        //amarrando para que a função calcular se mantenha dentro do contexto do painel
        //e não no contexto do componente Comando que é de onde está vindo o clique no botão
        this.calcular = this.calcular.bind(this);
    }

    calcular() {
        const resultado = parseFloat(this.state.num1) + parseFloat(this.state.num2);
    }

    render() {
        return (
            <View>
                <Entrada num1={this.state.num1} num2={this.state.num2} />
                <Operacao />
                <Comando acao={this.calcular} />
            </View>
        );
    }
}

export { Painel };
