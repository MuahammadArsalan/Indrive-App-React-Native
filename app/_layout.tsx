import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen name="index"  options={{headerTitle :"Login"}} />
      <Stack.Screen name="Mapping"  options={{headerTitle :"Home"}}  />
    </Stack>
  );
}
