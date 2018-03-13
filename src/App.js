import React from 'react';
import { View } from 'react-native';

//Como é o arquivo index, não há a necessidade de colocar ./components/index
import { Topo, Resultado, Painel } from './components';

export default props => (
    <View>
        <Topo />
        <Resultado />
        <Painel />
    </View>
);
