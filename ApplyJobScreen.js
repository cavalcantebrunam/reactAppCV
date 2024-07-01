import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Alert, TouchableOpacity } from 'react-native';
import { launchImageLibrary } from 'react-native-image-picker';

const ApplyJobScreen = ({ route, navigation }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [salary, setSalary] = useState('');
  const [document, setDocument] = useState(null);

  const handleDocumentPick = async () => {
    const result = await launchImageLibrary({
      mediaType: 'photo', // Para documentos, defina 'mixed' ou 'photo'
      includeBase64: false,
    }, (response) => {
      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      } else if (response.customButton) {
        console.log('User tapped custom button: ', response.customButton);
      } else {
        const source = { uri: response.assets[0].uri };
        setDocument(source);
      }
    });
  };

  const handleSubmit = () => {
    Alert.alert(
      "Currículo Enviado",
      "Seu currículo foi enviado com sucesso!",
      [
        {
          text: "OK",
          onPress: () => navigation.navigate('JobList'),
        },
      ],
      { cancelable: false }
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Enviar Currículo</Text>
      <View style={styles.form}>
        <TextInput 
          style={styles.input} 
          placeholder="Nome" 
          value={name}
          onChangeText={setName}
        />
        <TextInput 
          style={styles.input} 
          placeholder="E-mail" 
          keyboardType="email-address" 
          value={email}
          onChangeText={setEmail}
        />
        <TextInput 
          style={styles.input} 
          placeholder="Pretensão Salarial" 
          keyboardType="numeric" 
          value={salary}
          onChangeText={setSalary}
        />
        <TouchableOpacity style={styles.button} onPress={handleDocumentPick}>
          <Text style={styles.buttonText}>Escolher Currículo</Text>
        </TouchableOpacity>
        {document && <Text style={styles.fileName}>{document.uri.split('/').pop()}</Text>}
        <Button title="Enviar Candidatura" onPress={handleSubmit} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  form: {
    width: '100%',
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
  button: {
    backgroundColor: '#007BFF',
    padding: 10,
    alignItems: 'center',
    marginBottom: 10,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
  },
  fileName: {
    fontSize: 14,
    marginBottom: 10,
  },
});

export default ApplyJobScreen;
