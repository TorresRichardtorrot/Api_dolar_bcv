import puppeteer from "puppeteer";
import fetch from 'node-fetch';
import { config } from "dotenv";
config()

const time = 86400000;
const ruta = process.env.RUTA;


//www.bcv.org.ve/
//!extraer html del DOM de www.bcv.org.ve/
async function getdataHTML() {

    try {
        const browser = await puppeteer.launch({
            headless: true,
            timeout: 900000,
        });
    
        const page = await browser.newPage();
    
        await page.goto('https://www.bcv.org.ve/');
    
        const result = await page.evaluate(() => {
            const nodeList = document.querySelector('#dolar');
            
            return nodeList.querySelector('strong').textContent
        });
        console.log(result);
    
         await actualizar(result)
    
        
        await browser.close();
    } catch (error) {
        console.log(error)
    }
};

setInterval(getdataHTML,60000);

async function  actualizar(result){

   try {
    await fetch(`https://dolar-bcv.onrender.com/api/dollarBcv/64e3c0e8d926c209317996b1`,{
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ "dolar":result }),
        
    })
    console.log('LISTO 👌')
   } catch (error) {
    console.log(error)
   }
}

