import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Home from './views/Home';
import StartsWith from './views/StartsWith';
import EndsWith from './views/EndsWith';
import RhymesWith from './views/RhymesWith';
import RelatedTo from './views/RelatedTo';
import AppStacks from './routes/AppStacks';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

export default function App() {

  const Stack = createNativeStackNavigator();

  return (
    <View style={styles.container}>
        <NavigationContainer>
          <Stack.Navigator initialRouteName="Home" screenOptions={{ headerShown: false }}>
              <Stack.Screen name="Home" component={Home}/>
              <Stack.Screen name="Starts" component={StartsWith} />
              <Stack.Screen name="Ends" component={EndsWith} />
              <Stack.Screen name="Rhymes" component={RhymesWith} />
              <Stack.Screen name="Related" component={RelatedTo} />
          </Stack.Navigator>
    </NavigationContainer>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
});
