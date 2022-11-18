import User from '../../models/user';
import data from '../../outils/data';
import db from '../../outils/db';

const Handler = async (req, res) => {
  await db.connect();
  await User.deleteMany();
  await User.insertMany(data.users);
  await db.disconnect();
  res.send({ message: 'Vous avez réussi avec succés' });
};
export default Handler;
