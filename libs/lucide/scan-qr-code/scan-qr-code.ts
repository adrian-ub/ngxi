import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucideScanQrCode],svg[lucide-scan-qr-code]',
  host: {
    class: 'lucide lucide-scan-qr-code',
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    linecap: 'round',
    linejoin: 'round',
  },
  template: `
    <svg:path d="M17 12v4a1 1 0 0 1-1 1h-4" />
    <svg:path d="M17 3h2a2 2 0 0 1 2 2v2" />
    <svg:path d="M17 8V7" />
    <svg:path d="M21 17v2a2 2 0 0 1-2 2h-2" />
    <svg:path d="M3 7V5a2 2 0 0 1 2-2h2" />
    <svg:path d="M7 17h.01" />
    <svg:path d="M7 21H5a2 2 0 0 1-2-2v-2" />
    <svg:rect x="7" y="7" width="5" height="5" rx="1" />
  `,
})
export class LucideScanQrCode {}
