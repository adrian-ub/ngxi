import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucideBarcode],svg[lucide-barcode]',
  host: {
    class: 'lucide lucide-barcode',
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    linecap: 'round',
    linejoin: 'round',
  },
  template: `
    <svg:path d="M3 5v14" />
    <svg:path d="M8 5v14" />
    <svg:path d="M12 5v14" />
    <svg:path d="M17 5v14" />
    <svg:path d="M21 5v14" />
  `,
})
export class LucideBarcode {}
