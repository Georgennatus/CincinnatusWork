import fs from "fs";
import path from "path";
import cron from "node-cron";

const carpetaOrigen = "./data";
const carpetaBackup = "./bp";

if (!fs.existsSync(carpetaBackup)) {
  fs.mkdirSync(carpetaBackup);
}

cron.schedule("* * * * *", () => {

  const fecha = new Date().toISOString().replace(/:/g, "-");
  const destino = path.join(carpetaBackup, `backup-${fecha}`);

  fs.cpSync(carpetaOrigen, destino, { recursive: true });
  console.log("Backup alojado en: ",destino);
});
