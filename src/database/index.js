const { default: mongoose } = require("mongoose");

const connectToDB = async () => {
  const connectionURL = process.env.MONGODB_URL;

  mongoose
    .connect(connectionURL)
    .then(() => console.log("job portal database connection is successfull"))
    .catch((error) => console.log(error));
};

export default connectToDB;
