import QRCode from 'qrcode';

// Generates the QR code for the shortened url
export function generateQRCode(url: string, width: number) {
  QRCode.toCanvas(document.querySelector('#qrcode canvas'), url, { width }, (error: any) => {
    if (error) console.error(error);
  });
  var splitUrl = url.split('/');
  document
    .querySelector('#qrcode canvas')
    ?.setAttribute('data-location', splitUrl[splitUrl.length - 1]);
}

// Downloads the QR code
export function downloadQRCode() {
  const canvas = document.querySelector('#qrcode canvas') as HTMLCanvasElement;
  const a = document.createElement('a');
  a.href = canvas.toDataURL('image/png');
  a.download = 'qrcode-' + canvas.getAttribute('data-location') + '.png';
  a.click();
}
