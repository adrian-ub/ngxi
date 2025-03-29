import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucideSquarePilcrow],svg[lucide-square-pilcrow]',
  host: {
    class: 'lucide lucide-square-pilcrow',
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    linecap: 'round',
    linejoin: 'round',
  },
  template: `
    <svg:rect width="18" height="18" x="3" y="3" rx="2" />
    <svg:path d="M12 12H9.5a2.5 2.5 0 0 1 0-5H17" />
    <svg:path d="M12 7v10" />
    <svg:path d="M16 7v10" />
  `,
})
export class LucideSquarePilcrow {}
