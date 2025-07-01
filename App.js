// import { StatusBar } from 'expo-status-bar';
// import { StyleSheet, Text, View } from 'react-native';
// import Header from './components/Header';
// import NumberGuessScreen from './components/NumberGuessScreen';

// export default function App() {
//   return (
//     // <View style={styles.container}>
//     //   <Text style={styles.heading}> Welcome to React Native</Text>
//     //   <Text style={styles.subheading}>Hi there, I'm Mukesh!</Text>
//     //   <Text style={styles.bodyText}>
//     //     I'm starting my journey to learn React Native and build awesome mobile apps.
//     //   </Text>

//     //   {/* Number Guess Game Screen */}
//     //   <NumberGuessScreen />

//     //   <StatusBar style="auto" />
//     // </View>
//       return <StartGameScreen />;
//   );
// }

// // const styles = StyleSheet.create({
// //   container: {
// //     flex: 1,
// //     backgroundColor: '#00BFFF',
// //     alignItems: 'center',
// //     justifyContent: 'center',
// //     padding: 20,
// //   },
// //   heading: {
// //     fontSize: 28,
// //     fontWeight: 'bold',
// //     color: '#FFFFFF',
// //     marginBottom: 10,
// //   },
// //   subheading: {
// //     fontSize: 20,
// //     fontWeight: '600',
// //     color: '#F0F8FF',
// //     marginBottom: 10,
// //   },
// //   bodyText: {
// //     fontSize: 16,
// //     color: '#E0FFFF',
// //     textAlign: 'center',
// //     lineHeight: 24,
// //     marginBottom: 20,
// //   },
// // });


import { StyleSheet } from "react-native";
import StartGameScreen from "./screens/StartGameScreen";


export default function App() {
  return <StartGameScreen />;
}

const styles = StyleSheet.create({});