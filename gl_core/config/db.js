import mongoose from "mongoose";

const conectDB = async () => {
  try {
    const db = await mongoose.connect(process.env.MONGO_URI,
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      }
    );
    const url = `${db.connection.host}:${db.connection.port}`;
    console.log(`Mongo DB corriendo en: ${url}`);
  } catch (error) {
    console.log(`error:${error.message}`);
    process.exit(1);
  }
};

export default conectDB;
