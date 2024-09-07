import Produto from "@/app/Models/Produto";
import axios from "axios";
import { useState } from "react";
import { TextInput, View, Text, Button } from "react-native";

 
const CadastroProduto = ()=>{
 
let [preco, setPreco] = useState(0)
let [nome, setNome] = useState('')
let [descricao, setDescricao] = useState ('')
    return(
        <View>
            <Text>Home:</Text>
            <TextInput onChangeText={setNome} value={nome}/>
            <Text>Descrição:</Text>
            <TextInput onChangeText={setDescricao} value={descricao}/>
            <Text>Preço:</Text>
            <TextInput onChangeText={(v)=> setPreco(
                isNaN(parseFloat(v))? 0: parseFloat(v))}
            inputMode="numeric" value={preco.toString()}/>
            <Button title="Cadastrar"onPress={Cadastrar}></Button>
        </View>
    );
    function Cadastrar(){
        let produto: Produto =  {
            nome: nome,
            descricao: descricao,
            preco: preco,
        } as Produto;
        let api = 'https://api-docker-2t8m.onrender.com/api/produtos';
        axios.post(api,produto)
        }
    
}
export default CadastroProduto