import React from "react";
import { SafeAreaView, FlatList} from "react-native";
import Item from "./Item";
import { StatusBar } from "react-native";

const receitasPrincipais = [
    {
      id:1,
      nome: "Smoothie Proteico",
      descricao: "Rápido, gostoso e com 32g de proteína.",
      comando: "Você vai precisar de:",
      instrucoes: "banana, leite, whey protein e gelo;"

    }
  ]

  export default function Receitas() {
    return <SafeAreaView>
      <StatusBar />
      <FlatList
        data={receitasPrincipais}
        renderItem={({item}) => <Item {...item}  />}
        keyExtractor={({id}) => String(id)}
      />
    </SafeAreaView>
  }

  
  
  
  