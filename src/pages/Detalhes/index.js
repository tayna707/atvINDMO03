
import { Text, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useRoute } from '@react-navigation/native';

export default function Detalhes() {
    const route = useRoute();
    const { detalheCurso } = route.params;
  
    return (
      <SafeAreaView style={styles.container}>
        <Text style={{fontSize:18}}>{detalheCurso.curso}</Text>
        <Text>Descrição do curso: {detalheCurso.mensagem}</Text>
      </SafeAreaView>
    );
  }
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center',
        gap: 10,
        backgroundColor:'#d3d3d3'
    }
})