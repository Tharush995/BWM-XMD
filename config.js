const fs = require('fs-extra');
const { Sequelize } = require('sequelize');
if (fs.existsSync('config.env'))
    require('dotenv').config({ path: __dirname + '/config.env' });
const path = require("path");
const databasePath = path.join(__dirname, './database.db');
const DATABASE_URL = process.env.DATABASE_URL === undefined
    ? databasePath
    : process.env.DATABASE_URL;
module.exports = { session: process.env.SESSION_ID || 'BWM-XMD;;;H4sIAAAAAAAAA5VU25KqOBT9lam8ah+5yM2qrhpAxQteUVqdOjUVQoAIAoYgaJf/PkXbXd0Pc8708JRKwtora+21X0GakQJP8RX0XkFOyQUy3CzZNcegB4wyCDAFbeBDBkEPqPblwi309OYMIqeSY9fbTMLhhrjmEotctxO4Cle64vQoVM/g3gZ56SUE/QZwGuZ9ppM5PzoP9THXLetanHBFetNG42GHu0lDRca3iN3c8BncG0RIKEnDQR7hE6YwmeLrEhL6PfpIZ8jjckudntStvZ90byhXWueD7KyMmVmO4/UxXuW2N4y336NP/XourKZdeoxcUbjBwtho6Fi7Vtal4+NcIC35uC0zf9SPH/QLEqbYH/s4ZYRdv637y8g42rdFGrRM0bdng4kYzg7F4pRdTBELB4omWbqDyvIsct8jfh134HowVRJ3lQxhRS9KNzSiCE/DS9yS9aU52c/Xelh5ofqV+JJ+9Er8f3QvptmwtVNP6ZlMVwdFm6340C+0+CDvjGK2ZuS2GFkvfAtx8ffoRyfBjaNUS1i/tqXWGsmdYbKnHW9SprKtO61UsbYrM5646JM+ZCX9Hcubs1zLQ5fsBO8qJd16U1S6ygb2xJjNO3HcOaonax86h0sSGyukvGB+aweZmQr7EadzYTU8S/V15L7sr3U/t3S3M+nvo/D57UUxvo590OPvbUBxSApGISNZ+ranyW0A/YuDEcXsTV5ALo6kH9dcsB5Gy820SsoEhaNZjrzqlKATHlZs6EZRPyTdZ9AGOc0QLgrsj0jBMnqd4aKAIS5A76+fbZDimj2Ma8qJfBsEhBZsm5Z5kkH/w9WPQ4hQVqbMuabIbBaYgh73uY0ZI2lYNDqWKaQoIhdsRpAVoBfApMD3NvDxhSDc4IFoPz0h8++tY1izJDY18ViG+qqhHGXp4wqUIeJlRXoSlUB76gaS8ARFT3rSJFWUhSDgZRWCNiDvmWn++aWF503FuH0V7Kw0NXjhoCjbbB7AljRDbzY8tMcU+6DHaInbwIMoLvNNFuP0N7hYV/lzkAZUGwh0JbXoYnOLYama2fgL7sNT0Hv9nFNm5jd4mtRdjvpTGbTB6a0FSfNyrat0OU1SOanb06Q/ix9VoyPM8x8pZqANUthcBpsI0rKI/jAyBv9YBAFBBCZN1XdLGjwfM0iSAvSAOSuxRJE1sIOjTAvL0lehboY6+LTwIwuPXsvDIY19vrZhyB2tXSmZa146W6IzCBlPxZk3rRhFUez0q+d/AWneEVeH1TreVu5ZHW80y9P1eCcMdtM47Si0NhYwPnfCq41kwanx0tssx2hLRO2qehsRqZZil55Wvrj7vCKrwPU6EZ+Y+nNT7dFKX4sp+90AzaBFjEuii8yIvGqkBZuzUXvhsDxvZ/V6F4lCR+nO3aqY41IJSYVSZTyoa1c1khba9StFUGGE/WU1EStp4YT6I6VvUyJ5n87kLT+v740XEPw27N49+S/rPiPA3dtfIN6n5y/azIB7A0ojHzlCNh/XiVKuYh/DiHHR2PahdrOuhQ3F8WEQquB+/9kGeQJZkNFTM2RPXpOTBBZM/4zwhpxwweApBz1eEWVO6/Ky1Aanq57nDoPsI/lAbz5bscD9H1ncjG8VCAAA',
    PREFIXE: process.env.PREFIX || ".",
    OWNER_NAME: process.env.OWNER_NAME || "Ibrahim Adams",
    NUMERO_OWNER : process.env.NUMERO_OWNER || " Ibrahim Adams",              
    AUTO_READ_STATUS: process.env.AUTO_READ_STATUS || "yes",
    AUTO_DOWNLOAD_STATUS: process.env.AUTO_DOWNLOAD_STATUS || 'no',
    BOT : process.env.BOT_NAME || 'BMW_MD',
    URL : process.env.BOT_MENU_LINKS || 'https://files.catbox.moe/h2ydge.jpg',
    MODE: process.env.PUBLIC_MODE || "yes",
    PM_PERMIT: process.env.PM_PERMIT || 'yes',
    HEROKU_APP_NAME : process.env.HEROKU_APP_NAME,
    HEROKU_APY_KEY : process.env.HEROKU_APY_KEY ,
    WARN_COUNT : process.env.WARN_COUNT || '3' ,
    ETAT : process.env.PRESENCE || '',
    CHATBOT : process.env.PM_CHATBOT || 'no',
    DP : process.env.STARTING_BOT_MESSAGE || "yes",
    ANTIDELETE1 : process.env.ANTIDELETE1 || 'yes',
    ANTIDELETE2 : process.env.ANTIDELETE2 || 'yes',
    MENUTYPE : process.env.MENUTYPE || '',
    ANTICALL : process.env.ANTICALL || 'yes',
                  AUTO_REACT : process.env.AUTO_REACT || 'yes',
                  AUTO_REACT_STATUS : process.env.AUTO_REACT_STATUS || 'yes',
                  AUTO_REPLY : process.env.AUTO_REPLY || 'yes',
                  AUTO_READ : process.env.AUTO_READ || 'yes',
                  AUTO_SAVE_CONTACTS : process.env.AUTO_SAVE_CONTACTS || 'yes',
                  AUTO_REJECT_CALL : process.env.AUTO_REJECT_CALL || 'yes',
                  AUTO_BIO : process.env.AUTO_BIO || 'yes',
                  AUDIO_REPLY : process.env.AUDIO_REPLY || 'yes',
    DATABASE_URL,
    DATABASE: DATABASE_URL === databasePath
        ? "postgresql://postgres:bKlIqoOUWFIHOAhKxRWQtGfKfhGKgmRX@viaduct.proxy.rlwy.net:47738/railway" : "postgresql://postgres:bKlIqoOUWFIHOAhKxRWQtGfKfhGKgmRX@viaduct.proxy.rlwy.net:47738/railway",
   
};
let fichier = require.resolve(__filename);
fs.watchFile(fichier, () => {
    fs.unwatchFile(fichier);
    console.log(`mise à jour ${__filename}`);
    delete require.cache[fichier];
    require(fichier);
});

