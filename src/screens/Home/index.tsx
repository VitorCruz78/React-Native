import { Text, View, TextInput, TouchableOpacity, FlatList, Alert } from "react-native";

import { Participant } from '../../components/Participant';

import { styles } from "./styles";

export function Home() {
  const participants = ["Vitor", "Igão", "Bansen", "Tigrão", "Cezári", "Ruan", "Renan", "Mário", "Tinho", "Tinhoso", "Tinhosinho"]

  function handleParticipantAdd() {
    if(participants.includes("Vitor")) {
      return Alert.alert("Participante Existe", "Já existe um participante na lista com esse nome.")
    }
  }

  function handleParticipantRemove(name: string) {
    Alert.alert("Remover", `Remover o participante ${name}?`, [
      {
        text: "Sim",
        onPress: () => Alert.alert(`Participante ${name} deletado!`)
      },
      {
        text: "Não",
        style: "cancel"
      }
    ])
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

      <FlatList
        data={participants}
        keyExtractor={item => item}
        renderItem={({ item }) => (
          <Participant
            key={item}
            name={item}
            onRemove={() => handleParticipantRemove(item)}
          />
        )}
        showsVerticalScrollIndicator={false}
        ListEmptyComponent={() => (
          <Text style={styles.listEmptyText}>
            Ninguém chegou no evento ainda? Adicione participantes a sua lista de presença.
          </Text>
        )}

      />
    </View>
  )
}