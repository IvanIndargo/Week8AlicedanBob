const crypto = require("crypto");

// Kunci Public Alice dan Private Bob (Anda bisa menggunakan kunci apa saja)
const alicePublicKeyPem = `-----BEGIN PUBLIC KEY-----
MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAu4hXpqii9iojS99yqJ2/
GaMPN1mv1Q4+1kY79whD/9+68v/17t6kCosUG9ByDkoqymkTyja9nmlLokmBiCRP
bQ0wBfIxuNeOa3iehoU1aD/uP0NAEs+I0bu6KgIHEY22SMxoGhUia7msypNc0h8w
3IY08khKum5dE3XOk2LPwFuVUFcXnZFwXYxJ4fo4V/VhocwLiLlgdik2NEVHi1cR
+PzQb/EFmeA+iiKiZJayb2JH7yj9bmmZiBlGLJXJOZNRzkQArNHW+Qf3sHoWVkG5
wtCm8hLQlXXgsRXCEN+G1pz+u9DMGrJB/yl5VDOeJ4lFF3dijYJm349HMgEl43H4
1QIDAQAB
-----END PUBLIC KEY-----`;

const bobPrivateKeyPem = `-----BEGIN PRIVATE KEY-----
MIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQCEqk9lKt2nf84x
aB3q5xWkWv8467zx5vEzcmr4c+CCcGf4aWbZJRyZe2PnuWxrgcRvK+4i+oo2UMWc
/hIr8JJOKaKIuv9EVeT6bq43czjhZcU8kXFHAs+eTFFxwAHlxRHOzch30JIH4Of6
BPB/YbfJJWn3GEgJb1LrNf7fDS30IQB0hWUOrzlKHkxziS367/ZF+c9Obw3ypbKH
f1A/LVKbi1dNNSIliXFRsvy/yeDUrjhL1sCpOn3Uj2lqX/J+Jw7Ts4vGMOAPiRLJ
0Hy0Yxr0elNhPO248+iBjDy38Sf/aCGQSu/wZFd/8hEdo5xQTmdhW+pG5wZ7Wnic
FB4nKgo7AgMBAAECggEAApd+4aohh792LtISQCwoQUY+mkoKQiHjFUpCdDL9zdJC
l5QSV5PoOSruwhMPt4f2hPlVxmagj3d5p+9nOY500ZNobJkHQZMXPpwtydT/oITl
bqs4liBy+HY77KLdPMenLjfFqwgHcvAIAz4TYm4BBdO18nNwLmHGbTNA91T6PLy/
bChjciFK8yRBOAoxCs49HbjAvNDVo9Gm8UG1QaMdfc1eJ7xOg09G82CnfE4stfu5
ivj/FS0asciy28gkmFWRlupp3itogpN9j2EkQJ4TPBAg5d9mUQGBOiB6zYT844LV
bPuRseBqUC/46cO06owlByz5TvrpgTcyH8Fjj1tiYQKBgQC63ooOYx/xdk0LEcUx
LDfGCK7Zm3JtlS/ZzfNObIfjPP9E+GreGktiAexnnz31DO8QFues8tKu6UpfLbEM
xz8OIc2ZJdpj5xVh8vmmogSp/3mkrXbqJK06HA6PpL9idzNN52iMuBBbY9CFFsrL
QV9InvEUiYqHQ5WvewG42g4XYQKBgQC1vmC+h9o2rQpz0yE3E7DYM7DbEc7ssM9m
nrtUhhPFk/ILe0uFBLmBT7deLFOkA6S0g5Lx10w0AZ+cLavsOZeOGx99qhZxfLLB
EYtmQ/t3gStHWmBpTSV/WiErQ5uZjUagfrBnb/u5e/qRdHCCOpROeYtaNJPG/veO
zv3Qq01zGwKBgAqggztkObnSn3kErrEoMZfKgJ8RbwV6WXlKdA6+r0+l9WJnujQd
TLIrJ9WQwcZA0QuaMdytBnw5+ifFgm8WmahlFbsi4vORfa7PUZE/X4KHa9SIpN2V
7mACnnVeyh+AZeOFSHXQNeXsnDwlWq0Kb6/CkjU3yS/+EPIkzalEhU6hAoGBAKsP
vtV23yA5bS4pmgjSItDMjnkT4PUNUplfbCkZbcC5CMhfy2wvTz90Pb6I8EzfFQbH
FOdGYzZMFOQWZMyaRJj/1HsePbOh0EpC7jdaY3VPAeJOIZLbhyDAP5oOL4Wu4Lwt
onIpiABEvkpsE32wD2lxo4VLGZDi6TXkhCgFJIfjAoGAP4Wlx4sU+Yw6JVCOG+G/
qGB+AUqFqTLZZoD8TxSsbvcZ2LEEwhMgeu10USC2bUrGXXQj3cQUI7mC/mABUYtK
jfUeQXU5Pl9YGI3rvzv+/0COYlWvvud33O9XYCBjIxfGpn65hZ78OE7uZ1uhcQTS
IS5+OE0lMO1Lcat4TLcEtpo=
-----END PRIVATE KEY-----`;

// Signature dan pesan terenkripsi dari Alice
const signature = "5174604f9d77d81718848cfe47a8284ba9bd852e6ec31d9c5339cd0ba93e6789158eba31158367be6ae44acbd364c1b377cb52591b742a87f6237c2e0f6b0578296e59493e3c70831c6530aee3d0e1c662b588878877c28c971274d99e6252e52d08f5d65170fcb99e2b1f47a6762545441edc63932abc6dcff40fecd427e87d5ad7b5993d5142676b0e8d81e19b0c3f3168d0fdf88f317c8e29c4fc9828eac209344ac8b88fe26cd308f8be458de5ad438075d50a475c44b7c849021dba67492581d7cf3813d324bf3393ccd0e6572bf7c4081b849c732a68e3bf80925fce9bac7af0ff5049822516cf7237f9970532d2a136d71db922328f7d7bd33f8b54ae"; // Gantilah dengan output dari alice.js
const encryptedMessageHex ="562fe9a5d841d262f9398881a0a665097fe52f825b43ad8d0bf374d84e17f593b4577ed04abf90b32fbaca5e585fbe1d42322d6bae2082c1fd666f556e1986d0acf7e1f7e1a9ffaf4c088a1d532268d662182be3625a326cbcf447cb0e199b6b1d05935e7c22402022a4a061787d2386f82cd2f2a8fa64459923d038efe4a23699f19bd8e4c83434887bcaa1ba89317f2c4794a55c7a33ed8a9f87c3564835d4c75856255131660d3639e7ae43d9de46c0f39c942e1fb3b7cf037607e87e945c84e7b79c7502f1932516466558b216f806a8235e3e7f0ef35caf85c76e73e768594620c47466fc55ac95e1e37b243d7a17d28390454b81213143412bcc86e7d1" // Gantilah dengan output dari alice.js
const encryptedMessage = Buffer.from(encryptedMessageHex, "hex");

// Dekripsi pesan menggunakan Private Key Bob
const decryptedMessage = crypto.privateDecrypt(
    bobPrivateKeyPem,
    encryptedMessage
);

// Verifikasi signature menggunakan Public Key Alice
const verifier = crypto.createVerify("sha256");
verifier.update(decryptedMessage.toString());
verifier.end();
const isVerified = verifier.verify(alicePublicKeyPem, signature, "hex");

console.log("Signature Verification:", isVerified);
console.log("Message:", decryptedMessage.toString("utf8"))