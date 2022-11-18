import mongoose from 'mongoose';

const connection = {};

async function connect() {
  if (connection.isConnected) {
    console.log('Vous êtes déjà connectés');
    return;
  }
  if (mongoose.connections.length > 0) {
    connection.isConnected = mongoose.connections[0].readyState;
    if (connection.isConnected === 1) {
      console.log('utiliser la connexion précédente');
      return;
    }
    await mongoose.disconnect();
  }
  const db = await mongoose.connect(process.env.MONGODB_URI);
  console.log('nouvelle connexion');
  connection.isConnected = db.connections[0].readyState;
}
async function disconnect() {
  if (connection.isConnected) {
    if (process.env.NODE_ENV !== 'production') {
      await mongoose.disconnect();
      connection.isConnected = false;
    } else {
      console.log('Pas déconnecter');
    }
  }
}
const db = { connect, disconnect };
export default db;
