import React, { Component } from "react";
import { View, Text, StyleSheet, Button, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Inicio() {



    const navigation = useNavigation();
    return (

        <SafeAreaView style={[styles.container]}>
                    <Image source={require('../../assets/logo.png')} style={{width:200,height:100}} >
        </Image>
            <Text>Tayná Mendonça dos Santos</Text>
            <Text>Sumaré, 08/02/2024</Text>
            <Text>Escola SENAI Celso Charuri</Text>
            <Text>INDMO - Interface para Dispositivos Móveis</Text>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})