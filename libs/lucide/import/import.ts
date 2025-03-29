import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucideImport],svg[lucide-import]',
  host: {
    class: 'lucide lucide-import',
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    linecap: 'round',
    linejoin: 'round',
  },
  template: `
    <svg:path d="M12 3v12" />
    <svg:path d="m8 11 4 4 4-4" />
    <svg:path
      d="M8 5H4a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-4"
    />
  `,
})
export class LucideImport {}
