import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucideBotOff],svg[lucide-bot-off]',
  host: {
    class: 'lucide lucide-bot-off',
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    linecap: 'round',
    linejoin: 'round',
  },
  template: `
    <svg:path d="M13.67 8H18a2 2 0 0 1 2 2v4.33" />
    <svg:path d="M2 14h2" />
    <svg:path d="M20 14h2" />
    <svg:path d="M22 22 2 2" />
    <svg:path
      d="M8 8H6a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h12a2 2 0 0 0 1.414-.586"
    />
    <svg:path d="M9 13v2" />
    <svg:path d="M9.67 4H12v2.33" />
  `,
})
export class LucideBotOff {}
