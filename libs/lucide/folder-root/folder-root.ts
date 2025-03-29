import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucideFolderRoot],svg[lucide-folder-root]',
  host: {
    class: 'lucide lucide-folder-root',
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    linecap: 'round',
    linejoin: 'round',
  },
  template: `
    <svg:path
      d="M4 20h16a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.93a2 2 0 0 1-1.66-.9l-.82-1.2A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13c0 1.1.9 2 2 2Z"
    />
    <svg:circle cx="12" cy="13" r="2" />
    <svg:path d="M12 15v5" />
  `,
})
export class LucideFolderRoot {}
