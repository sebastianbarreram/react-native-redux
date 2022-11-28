import React, { useEffect } from 'react';
import {
  ActivityIndicator,
  Button,
  Image,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUsers } from '../redux/slices/UserSlice';
import { AppDispatch } from '../redux/storage/ConfigStore';

export const Users = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { users, loading } = useSelector((state: any) => state.users);

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  if (loading) {
    return <ActivityIndicator size="large" />;
  }
  return (
    <View>
      <Button title={'Reload'} onPress={() => dispatch(fetchUsers())} />
      {users.map(
        (user: {
          id: React.Key | null | undefined;
          first_name:
            | boolean
            | React.ReactChild
            | React.ReactFragment
            | React.ReactPortal
            | null
            | undefined;
          last_name:
            | boolean
            | React.ReactChild
            | React.ReactFragment
            | React.ReactPortal
            | null
            | undefined;
          email:
            | boolean
            | React.ReactChild
            | React.ReactFragment
            | React.ReactPortal
            | null
            | undefined;
          avatar: string;
        }) => {
          return (
            <View style={styles.transaction} key={user.id}>
              <View>
                <Image
                  source={{ uri: user.avatar }}
                  // source={require('../assets/images/9E2.jpg')}
                  style={styles.image}
                />
              </View>
              <View style={styles.textContainer}>
                <Text style={styles.reason} numberOfLines={1}>
                  {user.first_name} {user.last_name}
                </Text>
                <Text style={styles.date}>{user.email}</Text>
              </View>
            </View>
          );
        },
      )}
    </View>
  );
};
const styles = StyleSheet.create({
  transaction: {
    // backgroundColor: '#f9c2ff',
    padding: 5,
    marginVertical: 8,
    marginHorizontal: 16,
    flexDirection: 'row',
  },
  reason: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'black',
    paddingRight: 5,
  },
  date: {
    fontSize: 18,
    // fontWeight: 'bold',
    color: '#666666',
  },
  image: {
    width: 40,
    height: 40,
    borderRadius: 20,
  },
  textContainer: {
    flex: 1,
    marginLeft: 10,
    // backgroundColor: 'green',
  },
  amountContainer: {
    flex: 1,
    backgroundColor: 'green',
  },
  incomeAmount: {
    fontSize: 18,
    color: '#228922',
    fontWeight: 'bold',
  },
  outcomeAmount: {
    fontSize: 18,
    color: 'red',
    fontWeight: 'bold',
  },
  balanceText: {
    fontSize: 50,
    color: 'white',
    textAlign: 'center',
    textAlignVertical: 'center',
    padding: 20,
    paddingBottom: 0,
    fontWeight: '400',
  },
  balanceContainer: {
    height: 170,
    alignItems: 'stretch',
  },
  logo: {
    width: 140,
    height: 140,
  },
  containerLaunchScreen: {
    backgroundColor: 'white',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  titleAppLaunchScreen: {
    color: 'black',
    fontSize: 30,
    fontWeight: '400',
    position: 'absolute',
    bottom: '8.75%',
  },
  logoLogin: {
    position: 'absolute',
    top: '11%',
    borderColor: 'blue',
    flex: 1,
  },
  circle: {
    backgroundColor: '#1554f7',
    borderRadius: 100000000,
    // bottom: 420,
    top: -1040,
    height: 1200,
    left: -350,
    position: 'absolute',
    width: 950,
  },
});
