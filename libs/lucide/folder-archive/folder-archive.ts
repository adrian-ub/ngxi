import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucideFolderArchive],svg[lucide-folder-archive]',
  host: {
    class: 'lucide lucide-folder-archive',
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    linecap: 'round',
    linejoin: 'round',
  },
  template: `
    <svg:circle cx="15" cy="19" r="2" />
    <svg:path
      d="M20.9 19.8A2 2 0 0 0 22 18V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2h5.1"
    />
    <svg:path d="M15 11v-1" />
    <svg:path d="M15 17v-2" />
  `,
})
export class LucideFolderArchive {}
