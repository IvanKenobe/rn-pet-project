import express from 'express';
import Stripe from 'stripe';

const stripe = new Stripe(
  'sk_test_51LlLtyEfyNytugCpnIDHiwS2r6tfF1DVNk8yZmcjEjUaABSSS9Ig0mGkleQFghIIWzHeurQsRHDb2eCj9rPLenYA002yUheLRj',
  {
    apiVersion: '2022-08-01',
  },
);

const app = express();
app.use(express.json());
app.post('/create-payment-intent', async (req, res) => {
  const paymentIntent = await stripe.paymentIntents.create({
    amount: 5000,
    currency: 'usd',
  });

  res.send({
    clientSecret: paymentIntent.client_secret,
  });
});

app.listen(3000, () => console.log('running'));
