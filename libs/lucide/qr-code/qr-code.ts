import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucideQrCode],svg[lucide-qr-code]',
  host: {
    class: 'lucide lucide-qr-code',
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    linecap: 'round',
    linejoin: 'round',
  },
  template: `
    <svg:rect width="5" height="5" x="3" y="3" rx="1" />
    <svg:rect width="5" height="5" x="16" y="3" rx="1" />
    <svg:rect width="5" height="5" x="3" y="16" rx="1" />
    <svg:path d="M21 16h-3a2 2 0 0 0-2 2v3" />
    <svg:path d="M21 21v.01" />
    <svg:path d="M12 7v3a2 2 0 0 1-2 2H7" />
    <svg:path d="M3 12h.01" />
    <svg:path d="M12 3h.01" />
    <svg:path d="M12 16v.01" />
    <svg:path d="M16 12h1" />
    <svg:path d="M21 12v.01" />
    <svg:path d="M12 21v-1" />
  `,
})
export class LucideQrCode {}
