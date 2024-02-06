import { Text, View, TextInput, TouchableOpacity } from "react-native";

import { Participant } from '../../components/Participant'

import { styles } from "./styles"; 

export function Home() {

  function handleParticipantAdd() {
    console.log("Você clicou no botão de adicionar!")
  }

  function handleParticipantRemove(name: string) {
    console.log(`Você clicou em remover o participante ${name}`)
  }

  return (
    <View style={styles.container}>
      <Text 
      style={styles.eventName}>
        Nome do evento
      </Text>
      <Text style={styles.eventDate}>
        Terça, 30 de janeiro de 2024
      </Text>

      <View style={styles.form}>
        <TextInput 
          style={styles.input} 
          placeholder="Nome do participante"
          placeholderTextColor="#6B6B6B"
          keyboardType="default"
        />

        {/* Região clicável da aplicação */}
        <TouchableOpacity style={styles.button} onPress={handleParticipantAdd}>
          <Text style={styles.buttonText}>
            +
          </Text>
        </TouchableOpacity>
      </View>

      <Participant name="Vitor" onRemove={() => handleParticipantRemove("Vitor")} />

    </View>
  )
}