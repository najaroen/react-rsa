# react-encrypt-rsa



## Getting started



## STEP TO GET PRIMARY KEY && PUBLIC KEY

-```openssl genrsa -out rsa_1024_priv.pem 1024```

-```cat rsa_1024_priv.pem```

-```openssl rsa -pubout -in rsa_1024_priv.pem -out rsa_1024_pub.pem```

-```cat rsa_1024_pub.pem```


openssl genrsa private01.pem 4096

openssl genrsa -out private01.pem 4096

openssl rsa -in private01.pem -pubout -outform PEM -out public01_key.pem

openssl pkcs -topk8 -inform PEM -in private01.pem -out private01_key.pem -nocrypt