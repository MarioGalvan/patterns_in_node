import { AppSetup } from "./config/config";

console.log("::hellow world");
//instance of the class singleton
const app = AppSetup.getInstance();
const app2 = AppSetup.getInstance();
console.log(app === app2);

app.createApp({
    apiEndpoint: "http://localhost",
    port: 6000,
    appName: "My App",
    appVersion: "1.0.0"
});
app.printAppInfo();
app2.printAppInfo();