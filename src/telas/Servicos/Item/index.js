import React from "react";
import { Text, View } from 'react-native';
import estilos from "./estilos";

export default function Item({nome, descricao, comando, instrucoes}) {
    return <View style={estilos.informacao} >
    <Text style={estilos.nome}>{ nome }</Text>
    <Text style={estilos.descricao}>{ descricao }</Text>
    <Text style={estilos.comando}>{ comando }</Text>
    <Text style={estilos.instrucoes}>{ instrucoes }</Text>
    
    </View>
 
}