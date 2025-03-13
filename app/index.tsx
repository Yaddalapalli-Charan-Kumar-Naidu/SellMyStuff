import { Link } from 'expo-router';
import { View, Text } from 'react-native';

export default function Index() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Link href="screens/WelcomeScreen">
        <Text>Go to Welcome Screen</Text>
      </Link>
      <Link href="screens/ViewImageScreen">
        <Text>Go to View image screen</Text>
      </Link>
    </View>
  );
}
