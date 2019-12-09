import { Common } from './WoosimPrinter.common';
export declare class WoosimPrinter extends Common {
  cPCLPrinter: any;
  ptrConn: any;
  bluetoothAdapter: android.bluetooth.BluetoothAdapter;
  bluetoothPermissions: BluetoothPermissions;
  bluetoothDevice: android.bluetooth.BluetoothDevice;
  hThread: any;
  address: string;
  constructor();
  Toast(text: any, duration: any): any;
  isConnected(): any;
  connect(address: string): void;
  disconnect(): void;
  printTextFile(file: any): void;
  printImg(bitmap: any, setExtraPaddingAfterPrint?: boolean, XResol?: number, YResol?: number, startX?: number, startY?: number): void;
  print(text: string): void;
}
