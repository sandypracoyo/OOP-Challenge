class Cipher {
	static encrypt(message, password) {
		const aes = require('crypto-js/aes');
		const messageEncrypt = aes.encrypt(message, password);
		return messageEncrypt.toString();
    }
    
    static decrypt(message,password){
        const CryptoJS = require('crypto-js')
        const aes = require('crypto-js/aes')
        const messageDecrypt = aes.decrypt(message,password)
        return messageDecrypt.toString(CryptoJS.enc.Utf8)
    }
}

const message = Cipher.encrypt('Ini teks Rahasia','123')
const messageDecrypt = Cipher.decrypt(message,'123')
console.log(messageDecrypt);

