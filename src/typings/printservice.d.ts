/// <reference path="android-declarations.d.ts"/>

declare module com {
	export module woosim {
		export module btprint {
			export class BluetoothPrintService {
				public static class: java.lang.Class<com.woosim.btprint.BluetoothPrintService>;
				public static MESSAGE_DEVICE_NAME: number;
				public static MESSAGE_TOAST: number;
				public static MESSAGE_READ: number;
				public static DEVICE_NAME: string;
				public static TOAST: string;
				public start(): void;
				public getState(): number;
			}
			export module BluetoothPrintService {
				export class ConnectThread {
					public static class: java.lang.Class<com.woosim.btprint.BluetoothPrintService.ConnectThread>;
					public run(): void;
				}
				export class ConnectedThread {
					public static class: java.lang.Class<com.woosim.btprint.BluetoothPrintService.ConnectedThread>;
					public run(): void;
				}
			}
		}
	}
}

declare module com {
	export module woosim {
		export module btprint {
			export class BuildConfig {
				public static class: java.lang.Class<com.woosim.btprint.BuildConfig>;
				public static DEBUG: boolean;
				public static LIBRARY_PACKAGE_NAME: string;
				public static APPLICATION_ID: string;
				public static BUILD_TYPE: string;
				public static FLAVOR: string;
				public static VERSION_CODE: number;
				public static VERSION_NAME: string;
				public constructor();
			}
		}
	}
}

//Generics information:

