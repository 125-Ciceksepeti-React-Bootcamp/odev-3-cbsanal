const mongoose = require("mongoose");
const dotenv = require("dotenv");
const app = require("./app");

dotenv.config({ path: "./config.env" });

// MongoDB password and special connection string
const DB = process.env.DATABASE.replace(
  "<password>",
  process.env.DATABASE_PASSWORD
);

mongoose
  .connect(DB, {})
  .then(() => console.log("Veritabanı bağlantısı başarılı!"))
  .catch((err) => console.log(err));

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Uygulama port ${port}'da çalışıyor.`));
