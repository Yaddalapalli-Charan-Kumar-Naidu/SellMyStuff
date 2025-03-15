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
      <Link href="screens/ListingScreen">
        <Text>Go to Listing screen</Text>
      </Link>
      <Link href="screens/MessageScreen">
        <Text>Go to Message screen</Text>
      </Link>
      <Link href="screens/ListingDetailsScreen">
        <Text>Go to listing details screen</Text>
      </Link>
      <Link href="screens/AccountScreen">
        <Text>Go to account screen</Text>
      </Link>
      <Link href="screens/LoginScreen">
        <Text>Go to login screen</Text>
      </Link><Link href="screens/RegisterScreen">
        <Text>Go to register screen</Text>
      </Link>
    </View>
  );
}
