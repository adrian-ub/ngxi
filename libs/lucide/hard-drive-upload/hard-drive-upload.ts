import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucideHardDriveUpload],svg[lucide-hard-drive-upload]',
  host: {
    class: 'lucide lucide-hard-drive-upload',
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    linecap: 'round',
    linejoin: 'round',
  },
  template: `
    <svg:path d="m16 6-4-4-4 4" />
    <svg:path d="M12 2v8" />
    <svg:rect width="20" height="8" x="2" y="14" rx="2" />
    <svg:path d="M6 18h.01" />
    <svg:path d="M10 18h.01" />
  `,
})
export class LucideHardDriveUpload {}
