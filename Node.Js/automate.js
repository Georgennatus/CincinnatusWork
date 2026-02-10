import fs from "fs";
import path from "path";
import cron from "node-cron";

const carpetaOrigen = "./data";
const carpetaBackup = "./bp";

if (!fs.existsSync(carpetaBackup)) {
  fs.mkdirSync(carpetaBackup);
}
console.log("Bienvenido al sistema de backups automaticos");

cron.schedule("55 10 * * 2", () => {
  //1: MIN ; 2: HOUR; 3: ALL; 4: ALL; 5: DAY:
  const fecha = new Date().toISOString().replace(/:/g, "-");
  const destino = path.join(carpetaBackup, `backup-${fecha}`);

  fs.cpSync(carpetaOrigen, destino, { recursive: true });
  console.log("Backup alojado en: ",destino);
  console.log("Nos vemos el prox martes");
});

