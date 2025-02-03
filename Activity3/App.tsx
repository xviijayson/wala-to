import React, {useState} from 'react';
import {
  FlatList,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
} from 'react-native';
import {SafeAreaView, SafeAreaProvider} from 'react-native-safe-area-context';

type ItemData = {
  id: string;
  title: string;
};

const DATA = [
  {
    id: 'Morning Routine:',
    title: 'Morning Routine:',
  },
  {
    id: '1. Wake up early',
    title: 'Second Item',
  },
  {
    id: '2.Make a breakfast ,   ',
    title: 'Second Item',
  },
  {
    id: '3. Prepare for the morning class ',
    title: 'Second Item',
  },
  {
    id: '4. Text Someone',
    title: 'Second Item',
  },
  {
    id: '5. Do some halfbath',
    title: 'Second Item',
  },
  {
    id: '6. Play some games on computer',
    title: 'Second Item',
  },
  {
    id: '7. Sleep Again while waiting for the other class ',
    title: 'Second Item',
  },
  {
    id: 'Afternoon Routine:',
    title: 'Second Item',
  },
  {
    id: '8. Take some Lunch ',
    title: 'Second Item',
  },
  {
    id: '9. Do some choirs ',
    title: 'Second Item',
  },
  {
    id: '10. Feeding time on pets',
    title: 'Second Item',
  },
  {
    id: '11. Clean the enclosure of your pets',
    title: 'Second Item',
  },
  {
    id: '13. Prepare some pork that cook later on',
    title: 'Third Item',
  },
  {
    id: '14. Go to the afternoon class',
    title: 'Third Item',
  },
  {
    id: '15. Rest for a while after the class',
    title: 'Third Item',
  },
  {
    id: '16. Cook the pork ',
    title: 'Third Item',
  },
  {
    id: '17. Prepare and finish the pork product that will be sell',
    title: 'Third Item',
  },
  {
    id: '18. Play Basketball',
    title: 'Third Item',
  },
  {
    id: '19. Rest while eating meryenda',
    title: 'Third Item',
  },
  {
    id: '20. Get some bath',
    title: 'Third Item',
  },
  {
    id: 'Evening Routine',
    title: 'Third Item',
  },
  {
    id: '21. Scroll some social media platform',
    title: 'Third Item',
  },
  {
    id: '22. Get a quickride',
    title: 'Third Item',
  },
  {
    id: '23. Stroll on some fave places',
    title: 'Third Item',
  },
  {
    id: '24. Enjoy the moment view and go home',
    title: 'Third Item',
  },
  {
    id: '25. Rest well sleep and prepare for another exciting day',
    title: 'Third Item',
  },
];

const COLORS = ['purple', 'pink', 'orange', 'green', 'violet'];

type ItemProps = {
  item: ItemData;
  onPress: () => void;
  backgroundColor: string;
  textColor: string;
};

const Item = ({item, onPress, backgroundColor, textColor}: ItemProps) => (
  <TouchableOpacity onPress={onPress} style={[styles.item, {backgroundColor}]}>
    <Text style={[styles.title, {color: textColor}]}>{item.id}</Text>
  </TouchableOpacity>
);

const App = () => {
  const [selectedId, setSelectedId] = useState<string>(
    
  );

  const renderItem = ({ item, index }) => {
    const backgroundColor = item.id === selectedId ? 'blue' : COLORS[index % COLORS.length];
    const color = item.id === selectedId ? 'white' : 'black';

    return (
      <Item
        item={item}
        onPress={() => setSelectedId(item.id)}
        backgroundColor={backgroundColor}
        textColor={color}
      />
    );
  };

  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        <FlatList
          data={DATA}
          renderItem={renderItem}
          keyExtractor={item => item.id}
          extraData={selectedId}
        />
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  item: {
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 32,
  },
});

export default App;