import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucidePaperclip],svg[lucide-paperclip]',
  host: {
    class: 'lucide lucide-paperclip',
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    linecap: 'round',
    linejoin: 'round',
  },
  template: `
    <svg:path d="M13.234 20.252 21 12.3" />
    <svg:path
      d="m16 6-8.414 8.586a2 2 0 0 0 0 2.828 2 2 0 0 0 2.828 0l8.414-8.586a4 4 0 0 0 0-5.656 4 4 0 0 0-5.656 0l-8.415 8.585a6 6 0 1 0 8.486 8.486"
    />
  `,
})
export class LucidePaperclip {}
