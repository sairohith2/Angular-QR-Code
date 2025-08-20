import { Component, ViewChild } from '@angular/core';

@Component({
  selector: 'app-qrcode',
  templateUrl: './qrcode.component.html',
  styleUrls: ['./qrcode.component.css']
})
export class QrcodeComponent {

  qrData: string = ''; // user input text
  @ViewChild('qrCodeElement', {static: false}) qrCodeElement: any;

  downloadQRCode(){
    const canvas = this.qrCodeElement.nativeElement.querySelector('canvas')
    const link = document.createElement('a')
    link.href = canvas.toDataURL('image/png');
    link.download = 'qrcode.png';
    link.click();
  }
}
