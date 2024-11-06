import fs from "fs";
import { config } from "dotenv";

config();
const fileName = process.env.FILENAME;
fs.writeFileSync(fileName, "-=Sample text=-");

const fileContent = fs.readFileSync(fileName, "utf8");
console.log("File contains: ", fileContent);
