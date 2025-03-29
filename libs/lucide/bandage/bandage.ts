import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucideBandage],svg[lucide-bandage]',
  host: {
    class: 'lucide lucide-bandage',
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    linecap: 'round',
    linejoin: 'round',
  },
  template: `
    <svg:path d="M10 10.01h.01" />
    <svg:path d="M10 14.01h.01" />
    <svg:path d="M14 10.01h.01" />
    <svg:path d="M14 14.01h.01" />
    <svg:path d="M18 6v11.5" />
    <svg:path d="M6 6v12" />
    <svg:rect x="2" y="6" width="20" height="12" rx="2" />
  `,
})
export class LucideBandage {}
