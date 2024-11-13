const crypto=require('crypto');
const texto = "2"+"7f14d3b7896d3184d6fb8ef56e821405ccdf3073"+"6832c977ef3b25ff2a1f2506cef38eff";
const md5=crypto.createHash('md5').update(texto).digest("hex");
console.log(md5)