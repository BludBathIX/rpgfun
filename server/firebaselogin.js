var admin = require("firebase-admin");

var serviceAccount = {
     "type": "service_account",
     "project_id": "rpg-fun",
     "private_key_id": "c9d8b933c37fc9b0f29f6bca64bda05f957fbe69",
     "private_key": "-----BEGIN PRIVATE KEY-----\nMIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQCrkr7CJNNS7kF7\nN+XJ9nSJ5UAw2yw1jehWuI+z90CcEGsxoWAyHigvFIKpNlZVRPb8/+J4TwQujmJQ\n4WqrA1pTzCvIdwOnOet1mx4zKRQBBcelFiGR+Y0PBI2j13Ly0FNrAJPi6EGPUnf6\nqkx1E/j4WQ4FtiEO1PYhY9vZPMTiwK4SYTRB+LiWoeTdVSsYQ0xVMbR3u4qXnRWk\nj5YT65N53jMlC6J/5Y/EUw1tJw8NwjJKD+iBbu4n4RgECoX6WpGH9fM1mSNj+Moa\npjkV8VAofQUZO573t2fWP17olH4AqSzoSOtjTH1jlgs0r6JYkC2T/iGiiMaQ9kMT\nSsrFutSfAgMBAAECggEAC5Mq1g4wnjep/etsz+NAmXejN6iRovX1PA8szVyw5IEh\nujIY5fNYN/+PkRA0DYH0PRKbmgzlS1QabeUckneiGw/QebBjHrUESDreyV92v1rp\nzR62b71WNt0nxms9O1mynFVoT2E74F9qmLlEeeGPD7IdBWWeyqazXtf4d6oR3k+P\ntQFMcT+V+Asg8XL7lHNgSrvPEWVj/gtX8+dnPZOB8ZEtATSlTP/TDfxiy8+lOR1N\nNtGUPs7ZfNKBeJt/R6A61NmILGGpG9GmvKygDsM8VipuXCIXBr2MLBCrK8p4x/Q9\nUfiFHdjjV8fgj8ReyGwlzZoxXR31sOTgWJTnTmV4gQKBgQDlTbZk0XR+Lr8tcbZr\nlRyDt8kmwHxclMgVNogrup0WaJQE8yXf76iUYVNkLJ+aqXleCpPTtbSSqzegXten\n828+zR3PuLw9kX0ym2Vs36STdMIUI8CIj/5dqkXbLg/5mlN+XIH0U785fx+FeNPN\ng8aIeWYpPMzFoNaWSBTxVMvZuwKBgQC/jGgGQmz1aL+cIoO+xen7rWIeZhTewgVy\nHSi9IRlm2Tcd/8aAsUrgB5/i1TtttVqupNfGByX1hdluWvO5GSrLfNSa9kWS5j2u\nwSSTqK0POfpLDxXs0p0UHVW8wPwRsTz7FD1x59TW2GMzxDg/jg5NdMPhbmuNM8II\n9xDMlstgbQKBgQDNMlDxQXrE3GJacXL0LRi6SoIoOoJPexjd2tHaiAHBJs6m60vO\nbLHoLnwoncIp7lTcsgx9nRI9WhjKW3UTJ8Y6ZeWymDdjxUlLO0J1PmERT5/J1ACc\ndHcFLLWcoUjMba0f2/qzQSpTco4rq+el9rF4OWMRrgX1KKw/CbwsBlzxtwKBgHZq\nU4jDGd7hAcuBXtbaPVtUhZrrWq2XXox8UEoTo0N8t2E5VTsL35D9xa8SSWn6OnRK\n/gWzN5lARPm/Cnr8fwNLSZf+9WXqJmnZh0Ytecc2/W/XhKNiVK8xr2ZAG9TIMD27\n9nxraJ3lKfa/sFJB/L+PluTPQXgKbkLikiUYd+RFAoGAD/AfxD6qy1j7zyyoXNH+\nAE8wpvfr3kmtK/SXDPltV7x7+TuAeTxuDejfTiv9W2rSMtOXHW8ezZK4tKlfpeOj\nepXqzXPWnh2o7bm55WLV5soIxZMAqPla0F8JkBb7PLbpf5Yzq39dAHv2vsEj4DDB\napnb+OWOynYptjnGXZfqykw=\n-----END PRIVATE KEY-----\n",
     "client_email": "firebase-adminsdk-8o1al@rpg-fun.iam.gserviceaccount.com",
     "client_id": "111454386627966680219",
     "auth_uri": "https://accounts.google.com/o/oauth2/auth",
     "token_uri": "https://accounts.google.com/o/oauth2/token",
     "auth_provider_x509_cert_url": "https://www.googleapis.com/oauth2/v1/certs",
     "client_x509_cert_url": "https://www.googleapis.com/robot/v1/metadata/x509/firebase-adminsdk-8o1al%40rpg-fun.iam.gserviceaccount.com"
    }

var app = admin.initializeApp({
    credential:  admin.credential.cert(serviceAccount),
    databaseURL: "https://rpg-fun.firebaseio.com"
});

module.exports = app;
