import { Text, View } from 'react-native';
import { Link } from "expo-router"

export default function Home() {
  return(
    <View>
        <Text>This is my index page</Text>
        <Link href="/sandwhich">Sandwhich</Link>
        <Link href="/cheese">Cheese</Link>
    </View>
  );
}
