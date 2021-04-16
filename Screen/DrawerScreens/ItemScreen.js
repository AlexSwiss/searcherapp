// Example of Splash, Login and Sign Up in React Native
// https://aboutreact.com/react-native-login-and-signup/

// Import React and Component
import React, {useState, useEffect} from 'react';
import { FlatList, View, Image, StyleSheet, ScrollView} from 'react-native';
import { Container, Header, Content, Text, Card, CardItem, Left, Right, Body } from "native-base";
import Icon from 'react-native-vector-icons/FontAwesome';

// import Loader from '../Components/Loader';


const ItemScreen = ({route}) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [errortext, setErrortext] = useState('');
  const {id} = route.params;
  

  useEffect (() => {


    //Show Loader
    // setLoading(true);

    fetch(`http://10.0.3.2:8080/api/v1/posts/${id}`)
      .then((response) => response.json())
      .then((responseJson) => setData(responseJson))
      .catch((error) => console.error(error))
      .finally(() => setLoading(false));
  }, []);
  return (
    
    <Container style={{backgroundColor: '#fafafa'}}>
      {loading ? <Text>Loading...</Text> : 
      ( 
        <View style={{ flex: 1}}>
            <ScrollView>
                <Content>
                  <Card style={styles.card}>
                  <CardItem cardBody style={styles.cardItem}>
                      <Image source={require('../../Image/swiss.jpg')} style={styles.image}/>
                        {/* <Text style={styles.textTitle}>{data.data.title}</Text> */}
                  </CardItem> 
                  <CardItem bordered style={{
                      backgroundColor: '#9575cd'}}>
                    <Body>
                    <Text>Extra Info</Text>
                    </Body>
                  </CardItem>
                  <CardItem bordered>
                    <Text style={{color: 'grey'}}>{data.data.content}</Text>
                  </CardItem>
                  <CardItem bordered style={styles.cardItem}>
                    <Text style={styles.textBody}>Sex</Text>
                    <Text style={{color: 'grey'}}>{data.data.sex}</Text>
                  </CardItem >
                  <CardItem bordered style={styles.cardItem}>
                    <Text style={styles.textBody}>Age</Text>
                    <Text style={{color: 'grey'}}>{data.data.age}</Text>
                  </CardItem>
                  <CardItem bordered style={styles.cardItem}>
                    <Text style={styles.textBody}>Last location</Text>
                    <Text  style={{color: 'grey'}}>{data.data.location}</Text>
                  </CardItem>
                  <CardItem bordered style={styles.cardItem}>
                    <Text style={styles.textBody}>Color</Text>
                    <Text style={{color: 'grey'}}>{data.data.color}</Text>
                  </CardItem>
                  <CardItem bordered style={styles.cardItem}>
                    <Text style={styles.textBody}>Name</Text>
                    <Text style={{color: 'grey'}}>{data.data.name}</Text>
                  </CardItem>
                  <CardItem bordered style={styles.cardItem}>
                    <Text style={styles.textBody}>Posted By</Text>
                    <Text style={{color: 'grey'}}>{data.data.author.username}</Text>
                  </CardItem>
                </Card>
                </Content>
            </ScrollView>

        </View>
      )}
    </Container>
  );
};

const styles = StyleSheet.create({
  card: {
    shadowRadius: 1,
    borderWidth: 2,
    borderColor:'grey',
    shadowOffset: {width: 0, height: 0},
    elevation: 1,
    flex: 0.1,
    paddingLeft: 15,
    paddingRight: 15,
    flexDirection: 'column'
  },
  cardItem: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    borderColor: 'grey'
  },
  image: {
    height: 150,
    width: 200,
    justifyContent: 'center',
  },
  textTitle: {
    fontSize: 13,
  },
  textBody: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#424242'
  }
})

export default ItemScreen;