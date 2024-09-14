import { useState } from "react";
import { Button, StyleSheet, Text, View } from "react-native";
import ListaProdutos from "./componentes/adaptadores/ListaProdutos";
import { useEffect } from "react";
import CadastroProduto from "./componentes/adaptadores/CadastroProdutos"
import axios from "axios";
import { useRouter } from "expo-router";



export default function Index() {
  const router = useRouter();

  let [produtos, setProdutos] = useState([]);

    useEffect(()=>{
      carregarProdutos()
    },[])


function carregarProdutos(){
  axios.get('https://app-api-tapwm.onrender.com/api/produtos')
  .then((resp)=>{
    setProdutos(resp.data);
  })
}

  return (
    <View style={estilo.container}>
      <ListaProdutos produtos={produtos}></ListaProdutos>    
      <Button title={"cadastrar"}
       onPress={()=>{Tela_cadastro()}}></Button>

    </View>
    );
  function Tela_cadastro(){
    router.push('/cadastro');
  };
}

const estilo = StyleSheet.create({
  container:{
    flex: 1,
  },
  Text: {
    color:"#ffffff",
    fontSize: 20,
  },
  titulo:{
    color: "#8B0000",
    fontSize: 30,
    textAlign: "left",
    fontWeight: "bold"
  },
  
});