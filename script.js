function encrypt() {
    // filter out incorrect data
    if (!verifyKey()) {
        alert("Incorrect Key Value!")
        return
    }
    generateKeyPreview()

    // prep vars
    let toEncrypt = document.getElementById("before-encryption").value.toLowerCase().split('')
    let encryptionKey = document.getElementById("key-setting").value
    if (encryptionKey == undefined || encryptionKey.length == 0) encryptionKey = alphabet


    // encrypt
    for (let i = 0; i < toEncrypt.length;) {
        // remove invalid chars
        if (!alphabet.includes(toEncrypt[i])) {
            console.log("Invalid char to encrypt: '" + toEncrypt.splice(i, 1)[0] + "'")
            continue
        }

        // encrypt
        let alphabetNum = alphabet.indexOf(encryptionKey[i % encryptionKey.length])
        toEncrypt[i] = alphabet[(alphabetNum + alphabet.indexOf(toEncrypt[i])) % alphabet.length]

        // go to next char
        i++
    }

    // write results
    document.getElementById("after-encryption").value = toEncrypt.join('')
}

function decrypt() {
    // filter out incorrect data
    if (!verifyKey()) {
        alert("Incorrect Key Value!")
        return
    }
    generateKeyPreview()

    // prep vars
    let toDecrypt = document.getElementById("before-encryption").value.toLowerCase().split('')
    let encryptionKey = document.getElementById("key-setting").value
    if (encryptionKey == undefined || encryptionKey.length == 0) encryptionKey = alphabet


    // encrypt
    for (let i = 0; i < toDecrypt.length;) {
        // remove invalid chars
        if (!alphabet.includes(toDecrypt[i])) {
            console.log("Invalid char to encrypt: '" + toDecrypt.splice(i, 1)[0] + "'")
            continue
        }

        // decrypt
        let alphabetStep = alphabet.indexOf(encryptionKey[i % encryptionKey.length])
        let letterPosition = alphabet.indexOf(toDecrypt[i])
        toDecrypt[i] = alphabet[(letterPosition - alphabetStep + alphabet.length) % alphabet.length]

        // go to next char
        i++
    }

    // write results
    document.getElementById("after-encryption").value = toDecrypt.join('')
}

function verifyKey() {
    let keyToVerify = document.getElementById("key-setting").value

    for (let i = 0; i < keyToVerify.length; i++) {
        if (!alphabet.includes(keyToVerify[i])) return false
    }
    return true
}

function generateKeyPreview() {
    // validate key
    if (!verifyKey()) {
        alert("Incorrect Key Value!")
        return
    }

    // prepare key value (default is alphabet)
    let keyValue = document.getElementById("key-setting").value.toLowerCase()
    if (keyValue == undefined || keyValue.length == 0) keyValue = alphabet

    // prepare preview
    let preview = ""
    for (let i = 0; i < keyValue.length; i++) {
        for (let ii = 0; ii < alphabet.length; ii++) {
            preview += alphabet[(alphabet.indexOf(keyValue[i]) + ii) % alphabet.length]
        }
    }

    // show preview
    document.getElementById("key-preview").value = preview
}

const alphabet = "aąbcćdeęfghijklłmnńoópqrsśtuvwxyzźż"