import React from "react";
import { Text, View } from 'react-native';
import estilos from "./estilos";

export default function Item({nome, preco, descricao}) {
    return <View style={estilos.informacao} >
    <Text style={estilos.nome}>{ nome }</Text>
    <Text style={estilos.descricao}>{ descricao }</Text>
    <Text style={estilos.preco}>{ preco }</Text>
    
    </View>
 
}