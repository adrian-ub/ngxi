import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucidePaintBucket],svg[lucide-paint-bucket]',
  host: {
    class: 'lucide lucide-paint-bucket',
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    linecap: 'round',
    linejoin: 'round',
  },
  template: `
    <svg:path
      d="m19 11-8-8-8.6 8.6a2 2 0 0 0 0 2.8l5.2 5.2c.8.8 2 .8 2.8 0L19 11Z"
    />
    <svg:path d="m5 2 5 5" />
    <svg:path d="M2 13h15" />
    <svg:path d="M22 20a2 2 0 1 1-4 0c0-1.6 1.7-2.4 2-4 .3 1.6 2 2.4 2 4Z" />
  `,
})
export class LucidePaintBucket {}
