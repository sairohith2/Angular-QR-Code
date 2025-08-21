import { Component } from '@angular/core';
import { NgxScannerQrcodeModule } from "ngx-scanner-qrcode";

@Component({
  selector: 'app-scanner',
  templateUrl: './scanner.component.html',
  styleUrls: ['./scanner.component.css'],
})
export class ScannerComponent {
  qrResult: string | null = null;
  isUrl: boolean = false;

 onScanSuccess(event: any): void {
    if (event?.data) {
      this.qrResult = event.data;
      this.isUrl = this.checkIfUrl(event.data);
      console.log('Scanned:', event.data);
    }
  }

  private checkIfUrl(text: string): boolean {
    return /^https?:\/\/.+/i.test(text);
  }
}
