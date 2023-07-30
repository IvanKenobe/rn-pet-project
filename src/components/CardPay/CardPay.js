import {CardField, useStripe} from '@stripe/stripe-react-native';
import React, {useEffect, useState} from 'react';
import {Alert, Button, View} from 'react-native';

const CardPay = () => {
  const {confirmPayment} = useStripe();
  const [key, setKey] = useState('');

  useEffect(() => {
    fetch('http://localhost:3000/create-payment-intent', {
      method: 'POST',
    })
      .then(response => response.json())
      .then(res => setKey(res.clientSecret));
  });

  const onPayPress = async () => {
    const {error, paymentIntent} = await confirmPayment(key, {
      paymentMethodType: 'Card',
      paymentMethodData: {
        billingDetails: {
          email: 'vanyavdeenko2@gmail.com',
          name: 'Ivan',
        },
      },
    });
    if (error) {
      Alert.alert('Error', error.message);
    } else {
      Alert.alert('Success', `Payment successful ${paymentIntent?.id}`);
    }
  };

  return (
    <View style={{padding: 20}}>
      <CardField
        postalCodeEnabled={false}
        placeholders={{
          number: '4242 4242 4242 4242',
        }}
        cardStyle={{
          backgroundColor: '#FFFFFF',
          textColor: '#000000',
        }}
        style={{
          width: '100%',
          height: 50,
          marginVertical: 30,
        }}
      />
      <Button onPress={onPayPress} title="Pay" />
    </View>
  );
};

export default CardPay;
