import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucideArchiveRestore],svg[lucide-archive-restore]',
  host: {
    class: 'lucide lucide-archive-restore',
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    linecap: 'round',
    linejoin: 'round',
  },
  template: `
    <svg:rect width="20" height="5" x="2" y="3" rx="1" />
    <svg:path d="M4 8v11a2 2 0 0 0 2 2h2" />
    <svg:path d="M20 8v11a2 2 0 0 1-2 2h-2" />
    <svg:path d="m9 15 3-3 3 3" />
    <svg:path d="M12 12v9" />
  `,
})
export class LucideArchiveRestore {}
