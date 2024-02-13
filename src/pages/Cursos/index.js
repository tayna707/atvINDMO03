import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { View, Text, StyleSheet,} from "react-native";
import { useNavigation } from "@react-navigation/native";

export default function Cursos() {

    const navigation = useNavigation();

    function navegaDetalhesAdd() {

        const add = {
            curso: 'Analista de dados',
            mensagem: 'Você irá aprender a coletar, organizar, analisar e interpretar grandes conjuntos de dados para fornecer insights valiosos e apoiar a tomada de decisões estratégicas nas organizações.'
        }
        navigation.navigate('Detalhes', { detalheCurso: add });
    }

    function navegaDetalhesIng() {
        const ing = {
            curso: 'Inglês',
            mensagem: 'Você irá aprender a desenvolver diálogos, a autoconfiança para falar inglês, impulsionando o aprendizado e trazendo a efetividade no aprendizado.'
        }
        navigation.navigate('Detalhes', { detalheCurso: ing });
    }

    function navegaDetalhesGast() {

        const gast = {
            curso: 'Gatronomia',
            mensagem: 'irá proporcionar uma experiência prática intensiva, onde os alunos aprendem a criar pratos sofisticados, explorar ingredientes diversos e compreender as nuances da apresentação culinária.'
        }
        navigation.navigate('Detalhes', { detalheCurso: gast });
    }

    return (
        <SafeAreaView style={[styles.container]}>
            <View style={styles.text}>
                <Text style={styles.title} onPress={navegaDetalhesAdd}>Analista de Dados</Text>
            </View>
            <View style={styles.text}>
                <Text style={styles.title} onPress={navegaDetalhesIng}>Inglês</Text>
            </View>
            <View style={styles.text}>
                <Text style={styles.title} onPress={navegaDetalhesGast}>Gastronomia</Text>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        gap: 20
    },
    text: {
        justifyContent: 'center',
        textAlign: 'justify',
        alignItems: 'center',
        backgroundColor: '#d3d3d3',
        width: 200,
        height: 50,
        borderRadius: 5,
        borderColor: 'black',
        borderWidth: 1,
        gap: 8,

    },
    title: {
        color: 'red',
        fontSize: 20
 
    },
})