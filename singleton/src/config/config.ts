import { AppConfigI } from "../interfaces/app.config";

export class AppSetup {
  private port: number;
  private appName: string;
  private appVersion: string;
  private static instance: AppSetup | null = null;
  
  private constructor() {
    this.port = 0;
    this.appName = "";
    this.appVersion = "";
  }

  public static getInstance(): AppSetup {
    if (this.instance === null) {
      this.instance = new AppSetup();
    }
    return this.instance;
  }

  public getPort(): number {
    return this.port;
  }

  public getAppName(): string {
    return this.appName;
  }

  public getAppVersion(): string {
    return this.appVersion;
  }

  public createApp(appSetup: AppConfigI): void {
    this.port = appSetup.port;
    this.appName = appSetup.appName;
    this.appVersion = appSetup.appVersion;
  }

  public printAppInfo(): void {
   console.log(`App running on port ${this.port} with name ${this.appName} and version ${this.appVersion}`)
  }

  
}
