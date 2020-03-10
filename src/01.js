class Hash {
	static md5(message) {
		const md5 = require('crypto-js/md5');
		return md5(message).toString();
    }
    
    static sha1(message){
        const sha1 = require('crypto-js/sha1')
        return sha1(message).toString()
    }

    static sha256(message){
        const sha256 = require('crypto-js/sha256')
        return sha256(message).toString()
    }

    static sha512(message){
        const sha512 = require('crypto-js/sha512')
        return sha512(message).toString()
    }

}

console.log(Hash.md5('secret'));
console.log(Hash.sha1('secret'));
console.log(Hash.sha256('secret'));
console.log(Hash.sha512('secret'));
