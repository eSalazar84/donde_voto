/* • Iniciar proyecto NPM en carpeta nueva
• Descargar las librerías necesarias
• Cargar un listado de nombres a partir de un 
archivo de texto
• Cargar un listado de colegios a partir de otro 
archivo de texto
• A partir de ambos listados, saber en qué colegio 
va a votar una determinada persona
• Subir a GitHub y avisar por Slack */

import * as fs from "fs";
const readlineSync= require(`readline-sync`)

const nameList=fs.readFileSync(`./nameList.txt`, `utf-8`);
const schoolList=fs.readFileSync(`./schoolList.txt`, `utf-8`);

const arrayName:string[]= nameList.toLowerCase().split(` `)

function askVote():string{
    const ask=readlineSync.question(`Ingrese su nombre y le diremos su lugar de votacion: `);
    
}

console.log(askVote());
