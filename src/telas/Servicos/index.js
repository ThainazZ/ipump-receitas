import React from "react";
import { SafeAreaView, FlatList} from "react-native";
import Item from "./Item";
import { StatusBar } from "react-native";

const servicos = [
    {
      id:1,
      nome: "Banho",
      preco: 79.90,
      descricao: "NÃO DÊ BANHO NO SEU GATO!"
    },
    {
      id:2,
      nome: "Vacina",
      preco: 99.90,
      descricao: "Importada e com a melhor qualidade para o seu gato."
    },
    {
      id:3,
      nome: "Castração",
      preco: 49.90,
      descricao: "Diga não a gravidez na adolescência."
    }
  ]

  export default function Servicos() {
    return <SafeAreaView>
      <StatusBar />
      <FlatList
        data={servicos}
        renderItem={({item}) => <Item {...item}  />}
        keyExtractor={({id}) => String(id)}
      />
    </SafeAreaView>
  }

  
  
  
  