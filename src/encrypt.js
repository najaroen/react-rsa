import {JSEncrypt} from 'jsencrypt';
import sha256 from 'crypto-js/sha256';
import {useState} from "react";


const TestEncrypt = () => {
    const [privateKey, setPrivateKey] = useState(`-----BEGIN PRIVATE KEY-----
MIIJQwIBADANBgkqhkiG9w0BAQEFAASCCS0wggkpAgEAAoICAQC8nD5HPJi9yCiu
0bPB/y4msdwonLiLpkiP83eu35TxEBWa5JRYH9Vs05ZrVpW4Wd/bzNK5iDpr8CZR
c+qBRFK3y1IfGCXJQRIwwfZNP9N9xhiz8IXPSleKXJGFI2MRI7a3N3LgjuMCk2/H
S1EQRU2wjv/rqb/YEFDscJ5d3L//cY/If7FNNUIC3cQ7hbV+of9jsUmZi1rxY954
t6yYLDcnlCzY5wW0x5D5f/njpY64Racxf7R3fNco0tExmcextKxK5yrcCI0sLP9I
2Wrzzb3f8Lj6vYspCNSf7lkcinxm/H/z3j+MwLkrBqwwPB095hfStLIaUadMk6/Q
vs6D2zR7/5h5GjvAQHNvbwbAbzGUfpL8LSUvPB/2LJsD7/a1rBRJcorytUx+wiLx
sRhSXd1VTSMXvwu2f+y+IVLlsVzkWkLO1xfyRztxD/2d2MK9xRcvTGThv9iSBRtS
T2OKzLVfrOvUtxtxpQXfm3x528y64avybzDo3I/oSUR3adygbOlp4W6YfZFSYcFR
VRuQSeQ2AEq5NK2HpmIINYCo32OLyv07sHgjDgpDNvO8CwH8e5sxYzTI5ecjnYJj
PueQ4jKLoVkqslRvAWgtBDSjkwHtLefW9M7437KV9lTQUBes4Jc10DCwzx4ZShTn
JAtmMTbSr+EFDlgG96gsnNtZwioBuQIDAQABAoICAD/FmG0fuQlaNx88+kmazXD5
7FWy/9cAB0Lc8Fepc0O6y4NOzDWrtc8RD6gFY6QshztbWtiujgpW7a3WwrCoeEt6
rK6kzInqvYrM2kmuTgUVyN52cdfv6/91YyKgH2v5Jlt2nRn+VhVV4pKBDcyxkh4j
i7aT87DLe4EmZvWXoTdun04MltdjLYmokCQMBpzli2Oa2ybWbo511Q/+EpZ1RMTW
Hf/MxSol3AfwVH67SLFXo7th0ZQhGuLLvT3HIDUewK6m0OAK6CjKohpwoPAEXbHt
Q65MDlR2juXwgiLbVErCD0VWnSgrNbCtleTNPpniRaXRwPKTLzz+JpEvIsaEhI7f
FE3fgBfrOBiF3ItSUG/WDKs8C5Q7FgW+jx07M/1bkjnrk3kVMazcpjn5hYdwvu8W
LeYEqpE/JQj2l1O6lnHayN87SCQXr6kX17gvWlPFVo85h7MafKGRdyOPbiJmMbOq
9WzkzrgwuVclLU7Mb53aOTbUw7wsJqIs11SoZ78gFFbIxje3wJis4yZEJ5A3cuSt
H7GnVOowQbhwWvg4fjPKwP2RKs4wXGQUqa3RO6dX7a5T26+cl62WEhH011Es+SvE
6J3rwiEupCOA+lCpop141mirKf68sajgD/624De9k9akM2oaEZzyBw+j58KhJyuY
X+1FEwKNJVDyazuNV3ixAoIBAQD1PhY0IYpEAxH849ja5+Nnc40buvaBmInTVNpD
fQPS648C1j1uNWvinvSVcPbi7IL815hqX1/khfUwmf6z+bFuJubIj5xTVI5djTuG
SuYgnik1cU26xZkTGdG/dWoZVx++idivryHqMT9dA5iHBQ5tc6Hq9otycoI1dC3/
ezMTtLpit6gkAIbTFHdCAPD/BbdYtSwlKHaHhXngvw4oT1Po9pZ/aqaKZQal2Itb
oqnI4Yh8OZEZzw0JzBMsg62BU6MlN2c/D4Xl1I0AlIb2hYJ94IZuxvMkL7uH/uLy
dj8yJmum1/glpR4HS7EOXa00njdJ1G3LJnb5cFmVO5hXGfodAoIBAQDE4jbE5ltV
OPjVGPGkuAUY33xGuNXur/DsN3VaV+5GXJJleiChe4lsxX9wV4zySgAD9xzqugSV
wqzZGtgErOO5iKFc7Q+WEoX00u4BzNLl6npeRKkUG4JmdlAdTmBsJ7XSEMrqQa5v
YlupBODNfbhsssNChTGMsd9XpW5yDv3F2uvbfuPlbrt7UIrsI10MVQmLAnlZ4/2j
8554NRGQ0pJUsNC4kzfgcWTOCe+qoVdND0ljc6azmUI8+imXGztldvtE2NIVWvc3
Z2A6vBXdbto5rq/IKfFYYglZtCessAkjoE3aKZ3mZOcGP7Z+xTn8rebg9zXrAeBm
MgYSyyj1vjNNAoIBAFLbPSkzw8EiwGsOl++ttNj4403hJvO2E6rA2lU+4ZHbYB/3
Ph4EEoUoaz4qQl98xOyj8qzNuFo/IA3hmXo4/EdZAVP1oT1OLiNRWjEPER0oEogp
1bcql4MqkAD9rHEPTHxVmk4Q/4ZeSSgl1NyZSryT+rqlvYtXQMLKk9fjSeh4gRhl
MHupaePa4Ef+hW3EAqQH4fhT6Wf0Iq9aHXBlDNaCqWo3IDlV1J8nwD2fgXmLKU+/
K1Tq7V7IAhpiCrbNCSvDwjA+EGEMJO9zPv3/MY1R1FmNAgzRy6ww44BDjypkbK6b
/QzK8pBIdHOEFsbWRZu+F7IxNrUjzkBrOBcFgckCggEBAJojMBW+8soprEXJHYWD
vBnY/YawtmwDum50jJ+KL7VOTB6+GkXSXaiWhksBgAs/+/sev7jUoTpOCtx9s5kV
ccOTQCFsRsOLBOzDJiqqnIH7rImY33Yqg1CMV/RZpAuIm0Q2eWYkvdfd/Ty54PV/
857F5TBy7nPj3aLUlT8elXcNCZHyKaE5q/XC/MAaf4JkIPB/o1nIsI5m8C3T/kiP
UpiTRRT7zMcef3j/Nm8zmRFvYllF9cCtv7nVcDIo07uABv/Db9XgPaNWf3P8RHHz
k02NgXkHvTcgqYldDaKYvs7xdYHTCxeQ731o7AsbhWZZD2QYplGySmg3yaF1BEBA
BBECggEBAMNMz1uO/hlGFoy75IVMlwNf3qW1XngpJ2PCTpgmcO3rPTmdFhN0oJ8q
8yGvRfzuf0RNoWZqqRdCvUr/YH5Q47JI0PoJmYYzOGE2R3pSD9Vi65f2HMOtrGpg
Z0M63Qdi/aPKyRHzDTNMPdM0xkf8g4H6YhbC21eLHEWyk5srYAmJIHVRA0SAheGh
x1LRn4sqOcQTRx9W0sPdwou/6gjpI/jBDlWoCNB4mS/cfaWuNgOGV1ixU1j+ok+B
fAeoEVQs3MpRhxbm6kFZw1Ck74/I7GgeEeNAagvtPxNOKoVFn6rhQyWlYQbHPIcA
it1va0v9nTnXpVs0JzoyjGo7ODY38MA=
-----END PRIVATE KEY-----`);

    const [publicKey, setPublicKey] = useState(`-----BEGIN PUBLIC KEY-----
MIICIjANBgkqhkiG9w0BAQEFAAOCAg8AMIICCgKCAgEAvJw+RzyYvcgortGzwf8u
JrHcKJy4i6ZIj/N3rt+U8RAVmuSUWB/VbNOWa1aVuFnf28zSuYg6a/AmUXPqgURS
t8tSHxglyUESMMH2TT/TfcYYs/CFz0pXilyRhSNjESO2tzdy4I7jApNvx0tREEVN
sI7/66m/2BBQ7HCeXdy//3GPyH+xTTVCAt3EO4W1fqH/Y7FJmYta8WPeeLesmCw3
J5Qs2OcFtMeQ+X/546WOuEWnMX+0d3zXKNLRMZnHsbSsSucq3AiNLCz/SNlq8829
3/C4+r2LKQjUn+5ZHIp8Zvx/894/jMC5KwasMDwdPeYX0rSyGlGnTJOv0L7Og9s0
e/+YeRo7wEBzb28GwG8xlH6S/C0lLzwf9iybA+/2tawUSXKK8rVMfsIi8bEYUl3d
VU0jF78Ltn/sviFS5bFc5FpCztcX8kc7cQ/9ndjCvcUXL0xk4b/YkgUbUk9jisy1
X6zr1LcbcaUF35t8edvMuuGr8m8w6NyP6ElEd2ncoGzpaeFumH2RUmHBUVUbkEnk
NgBKuTSth6ZiCDWAqN9ji8r9O7B4Iw4KQzbzvAsB/HubMWM0yOXnI52CYz7nkOIy
i6FZKrJUbwFoLQQ0o5MB7S3n1vTO+N+ylfZU0FAXrOCXNdAwsM8eGUoU5yQLZjE2
0q/hBQ5YBveoLJzbWcIqAbkCAwEAAQ==
-----END PUBLIC KEY-----`);

    const [encryptValue, setEncryptValue] = useState(``)

    const [decryptValue, setDecryptValue] = useState(``)


    const [inputValue, setInputValue] = useState(``)

    const handleInput = (val) => {
        setInputValue(val.target.value)
    }

    const encrypted = () => {
        const sign = new JSEncrypt();

        sign.setPrivateKey(privateKey);

        const signature = sign.sign(inputValue, sha256, 'sha256');

        const verify = new JSEncrypt();

        const encrypt = new JSEncrypt();

        encrypt.setPublicKey(publicKey);

        const encryptedVal = encrypt.encrypt(inputValue);

        setEncryptValue(encryptedVal);


        verify.setPublicKey(publicKey)

        const verified = verify.verify(inputValue, signature.toString(), sha256);

        console.log(verified)

    }


    const decrypt = () => {
        const decrypt = new JSEncrypt();

        decrypt.setPrivateKey(privateKey);

        const unEncrypt = decrypt.decrypt(encryptValue);

        setDecryptValue(unEncrypt);
    }
    const data1 = {
        "dealerGroupCode":"dealerGroupCode04",
        "taxId":"taxId04",
        "email":"Wanchai@gmail.com",
        "password":"Wanchai"
    }
    const data2 = {
        "dealerGroupCode":"dealerGroupCode02",
        "taxId":"taxId02",
        "email":"Boonme@gmail.com",
        "password":"Boonme123456789"
    }

    const data3 = {
        "token":"AkNivxneNWOWcxWYPLLShHOVndsiYHAtNMlVwOeA",
        "password":"mypassword",
        "confirmPassword":"mypassword"
    }

    const data4 = {
        "email":"Boonme@gmail.com",
        "password":"mypassword",
        "confirmPassword":"mypassword"
    }
    return (
        <div>
            <p>TEST</p>
            input
            <textarea  value={inputValue} onChange={handleInput}/><br/>

            private
            <textarea value={privateKey} disabled={true}/><br/>

            public
            <textarea value={publicKey} disabled={true}/><br/>

            <button onClick={encrypted}>Click to encrypt</button>
            encrypted
            <textarea value={encryptValue}/>

            <button onClick={decrypt}>Click to decrypt</button>
            decrypted
            <textarea value={decryptValue}/>
        </div>
    );
}

export default TestEncrypt;