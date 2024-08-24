import { View, Text } from "react-native"

function ItemProduto({produto}: {produto: {nome: string, preco: number}}) {
    return (
        <View>
            <Text>{produto.nome}</Text>
            <Text>{produto.preco}</Text>
        </View>
    )
}

export default ItemProduto