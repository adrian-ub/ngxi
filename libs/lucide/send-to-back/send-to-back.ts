import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucideSendToBack],svg[lucide-send-to-back]',
  host: {
    class: 'lucide lucide-send-to-back',
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    linecap: 'round',
    linejoin: 'round',
  },
  template: `
    <svg:rect x="14" y="14" width="8" height="8" rx="2" />
    <svg:rect x="2" y="2" width="8" height="8" rx="2" />
    <svg:path d="M7 14v1a2 2 0 0 0 2 2h1" />
    <svg:path d="M14 7h1a2 2 0 0 1 2 2v1" />
  `,
})
export class LucideSendToBack {}
