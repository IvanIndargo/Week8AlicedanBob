const crypto = require("crypto");

// Kunci Private Alice dan Public Bob (Anda bisa menggunakan kunci apa saja)
const alicePrivateKeyPem = `-----BEGIN PRIVATE KEY-----
MIIEuwIBADANBgkqhkiG9w0BAQEFAASCBKUwggShAgEAAoIBAQC7iFemqKL2KiNL
33Konb8Zow83Wa/VDj7WRjv3CEP/37ry//Xu3qQKixQb0HIOSirKaRPKNr2eaUui
SYGIJE9tDTAF8jG4145reJ6GhTVoP+4/Q0ASz4jRu7oqAgcRjbZIzGgaFSJruazK
k1zSHzDchjTySEq6bl0Tdc6TYs/AW5VQVxedkXBdjEnh+jhX9WGhzAuIuWB2KTY0
RUeLVxH4/NBv8QWZ4D6KIqJklrJvYkfvKP1uaZmIGUYslck5k1HORACs0db5B/ew
ehZWQbnC0KbyEtCVdeCxFcIQ34bWnP670MwaskH/KXlUM54niUUXd2KNgmbfj0cy
ASXjcfjVAgMBAAECgf9i1e1nhQHVmRt4oAoJseacgshz//tqRf4nwrSToovZE4AK
2/4OpVmcQEoixQX27h/d3XJU6sNlvKcuRIPx+zEUVp2J2g1PLaF+aSe3XVtOJ13S
tXQuxXDQ1JoNVozD3kRp/UWhztFYKGQ7fCq8OFkZNdspQjTK9iamGB4wyFe17x0B
LKDXysJ+9ed3SxCMEoOumOcEPNNftzGr9uacTbBju1FRLvWkCdOn7gAsUgmbTiwA
npHIbhZJK0C+vayphwqwrWgdVsrPRNbxS0C79DMb08UaBUpfEwoq5se7l4b4CX4P
JhQOqrUbTBBUV51PUbnUma5o5I6juBYGpEWoccECgYEA+2izTm/4YFDUr4AJVllt
ZfLqOjuia5rJiw/UPtVxc5ORqQX7XYtC9wgoytTtOto8rRBRS7qg/m4ND+SIRjEc
IkZ9niEyw67gzc9DlljaJLUZKbddKFY4DzaOs9ZSQGbS1Lw4qr3jdQPYNE/mYWWu
UfS2oW2vGsr45qkslIUyUSECgYEAvvUHgUwrqZ0MhYYvoNZSG2SWdSAA40Ct4XlQ
Ah34nVAmST4LJCnmCDAR+p2JO8Ns0aCE7950azG419liKV1sNyZReDZB6/FCn9rC
5PY+s/0dxybTcKXEYqebdOr6SELIrWkIN0bGj67i2wH4osJRfWc9ulZ/jv82iA/0
yPZYjTUCgYEAvx3MkOgVjEJmLDPM5VN+Em4jGLmUsvAsHgaedlWTtSSNKkxd1bKz
6U7Ok8JhxMd6MKWi50qscD4AuAAmiBV1KakkfT0HdjJOuqXA314UFquEwW2e57cD
Tq1Ote9K/6Iqy4V6HnHTo3SUus+ydn/xkGPTIcxbvKZnqBEazpyir4ECgYBJOlXC
c59az+r5WVfyab3a21wHVlqAy1Di4k6YQT4Rtaa49532JEseYLDEVp1F2c9lJBVW
lww1/z9PJwHJsxXIoF0lqEjnXgGao52RiAzLoQlGUdFLpYYF/xhSYbnQ9CtYtKp9
6BpFB1/fdIYQhEwTtv+o8XrBL4WN7/CDEFUs8QKBgG0ZY52U6boVLdhvimRCs5Vy
PnN0QaW+8lL2d6zyoflhoDZuSHfMecTaOnp/P4ZnZmU4xk5I8iQQjFK+yTR+N4NH
maf+7Ya7NG2YPeuGsXbhQs6o45dIu8b3odbg4O/zvm6WiItBhL1HeBqXi37xyiGg
YRf+A/bdozzM9CsD1vh9
-----END PRIVATE KEY-----`;

const bobPublicKeyPem = `-----BEGIN PUBLIC KEY-----
MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAhKpPZSrdp3/OMWgd6ucV
pFr/OOu88ebxM3Jq+HPggnBn+Glm2SUcmXtj57lsa4HEbyvuIvqKNlDFnP4SK/CS
TimiiLr/RFXk+m6uN3M44WXFPJFxRwLPnkxRccAB5cURzs3Id9CSB+Dn+gTwf2G3
ySVp9xhICW9S6zX+3w0t9CEAdIVlDq85Sh5Mc4kt+u/2RfnPTm8N8qWyh39QPy1S
m4tXTTUiJYlxUbL8v8ng1K44S9bAqTp91I9pal/yficO07OLxjDgD4kSydB8tGMa
9HpTYTztuPPogYw8t/En/2ghkErv8GRXf/IRHaOcUE5nYVvqRucGe1p4nBQeJyoK
OwIDAQAB
-----END PUBLIC KEY-----`;

// Pesan yang ingin dikirim
const message = "I want some apples";

// Generate signature dari Alice
const signer = crypto.createSign("sha256");
signer.update(message);
signer.end();
const signature = signer.sign(alicePrivateKeyPem, "hex");

// Enkripsi pesan menggunakan Public Key Bob
const encryptedMessage = crypto.publicEncrypt(
    bobPublicKeyPem,
    Buffer.from(message)
);

console.log("Signature:", signature);
console.log("Message:", encryptedMessage.toString("hex"));