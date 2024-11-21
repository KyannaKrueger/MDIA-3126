import { Text, View } from 'react-native';
import  {Link } from "expo-router";

export default function Home() {
  return(
    <View> 
        <Text>This is my sandwhich page</Text>
        <Link href="/cheese">Cheese</Link>
      </View>
  );
}
