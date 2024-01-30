import { Text, View } from "react-native";
import { styles } from "./styles"; 

export function Home() {
  return (
    <View style={styles.container}>
      <Text 
      style={styles.eventName}>
        Nome do evento
      </Text>
      <Text style={styles.eventDate}>
        Terça, 30 de janeiro de 2024
      </Text>
    </View>
  )
}