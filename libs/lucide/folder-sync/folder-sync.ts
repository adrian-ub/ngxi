import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucideFolderSync],svg[lucide-folder-sync]',
  host: {
    class: 'lucide lucide-folder-sync',
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    linecap: 'round',
    linejoin: 'round',
  },
  template: `
    <svg:path
      d="M9 20H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H20a2 2 0 0 1 2 2v.5"
    />
    <svg:path d="M12 10v4h4" />
    <svg:path d="m12 14 1.535-1.605a5 5 0 0 1 8 1.5" />
    <svg:path d="M22 22v-4h-4" />
    <svg:path d="m22 18-1.535 1.605a5 5 0 0 1-8-1.5" />
  `,
})
export class LucideFolderSync {}
