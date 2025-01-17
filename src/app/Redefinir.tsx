import { StatusBar } from 'expo-status-bar';
import { Link }  from "expo-router";
import { StyleSheet, Text, KeyboardAvoidingView, View, Image, TextInput, TouchableOpacity} from 'react-native';

export default function Redefinir() {
    return(
        <KeyboardAvoidingView style={styles.background}>
        <View style={styles.containerLogo}>
         <Image
         style={{
            width: 350,
            height: 450,
         }}
            source={require('../../assets/2-removebg-preview.png')}
         />
        </View>

         <View style={styles.container}>
         <Text style={styles.label}>Senha:</Text>
            <TextInput style={styles.input}
                autoCorrect={false}
                secureTextEntry={true}
                onChangeText={() => { }}
         />

         <Text style={styles.label}>Nova Senha:</Text>
            <TextInput style={styles.input}
                autoCorrect={false}
                secureTextEntry={true}
                onChangeText={() => { }}
         />

        <Text style={styles.label}>Confirmar nova senha:</Text>
            <TextInput style={styles.input}
                autoCorrect={false}
                secureTextEntry={true}
                onChangeText={() => { }}
         />
         </View>

         <TouchableOpacity style={styles.btnRegister}>
            <Text style={styles.submitText}>Trocar Senha</Text>
         </TouchableOpacity>

    </KeyboardAvoidingView>
    );
};

const styles = StyleSheet.create({
      background: {
        flex: 1,
        backgroundColor: '#400096',
        alignItems: 'center',
        justifyContent: 'center',
      },
      containerLogo: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      },
      container: {
        flex: 1,
        justifyContent: "center",
        width: '90%',
        alignItems: "center"
      },
      input: {
        backgroundColor: '#fff',
        width: '100%',
        marginBottom: 15,
        color: '#222',
        fontSize: 17,
        borderRadius: 10,
        padding: 10,
        borderWidth: 2,
        borderColor: '#000'
      },
      label: {
        marginBottom: 5,
        fontSize: 17,
        color: '#fff',
        alignSelf: 'flex-start'
      },
      btnRegister: {
        backgroundColor: '#7b83ff',
        width: '90%',
        height: 45,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 10,
        marginBottom: 30,
        marginTop: 30,
        borderColor: '#000',
        borderWidth: 2,
        fontWeight: 'bold',
      },
      submitText: {
        color: '#fff',
        fontSize: 18,
      },
})