// Example of Splash, Login and Sign Up in React Native
// https://aboutreact.com/react-native-login-and-signup/

// Import React and Component
import React, {useState, useEffect} from 'react';
import { FlatList, View, Image, StyleSheet} from 'react-native';
import { Container, Header, Content, Text, Card, CardItem, Left, Right, Body } from "native-base";
import Icon from 'react-native-vector-icons/FontAwesome';

// import Loader from '../Components/Loader';


const HomeScreen = ({navigation}) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [errortext, setErrortext] = useState('');
  

  useEffect (() => {


    //Show Loader
    // setLoading(true);

    fetch('http://10.0.3.2:8080/api/v1/posts')
      .then((response) => response.json())
      .then((responseJson) => setData(responseJson))
      .catch((error) => console.error(error))
      .finally(() => setLoading(false));
  }, []);
  return (
    <Container style={{backgroundColor: '#fafafa'}}>
      {loading ? <Text>Loading...</Text> : 
      ( 
        <View style={{ flex: 1, flexDirection: 'row'}}>
            <FlatList
              columnWrapperStyle={{justifyContent: 'space-between'}}
              data={data.data}
              keyExtractor={({ id }, index) => id}
              numColumns={2}
              renderItem={({ item }) => (
                <Content>
                  <Card style={styles.card}>
                  <CardItem cardBody style={styles.cardItem}>
                      <Image source={require('../../Image/swiss.jpg')} style={styles.image}/>
                        <Text style={styles.textTitle}
                          onPress={() => {
                            navigation.navigate('ItemScreen', {id: item.id})
                          }}
                        >{item.title}</Text>
                          <Text style={styles.textBody}>Reward: N500</Text>
                          <Text style={styles.textBody}>
                            <Icon name="map-marker" size={15} color="#4527a0" />{"  "}
                            {item.location}</Text>
                  </CardItem> 
                </Card>
                </Content>
              )}
            />
        </View>
      )}
    </Container>
  );
};

const styles = StyleSheet.create({
  card: {
    shadowRadius: 0,
    borderWidth: 0,
    borderColor:'white',
    shadowOffset: {width: 0, height: 0},
    shadowOpacity: .5,
    elevation: 0,
    flex: 0.1,
    flexDirection: 'column',
    paddingLeft: 15,
    paddingRight: 15
  },
  cardItem: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'flex-start'
  },
  image: {
    height: 80,
    width: 150,
    justifyContent: 'center',
  },
  textTitle: {
    fontSize: 13,
  },
  textBody: {
    fontSize: 10,
    color: 'grey'
  }
})

export default HomeScreen;