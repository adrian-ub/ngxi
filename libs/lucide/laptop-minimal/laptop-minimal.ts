import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucideLaptopMinimal],svg[lucide-laptop-minimal]',
  host: {
    class: 'lucide lucide-laptop-minimal',
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    linecap: 'round',
    linejoin: 'round',
  },
  template: `
    <svg:rect width="18" height="12" x="3" y="4" rx="2" ry="2" />
    <svg:line x1="2" x2="22" y1="20" y2="20" />
  `,
})
export class LucideLaptopMinimal {}
