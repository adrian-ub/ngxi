import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucideLayoutDashboard],svg[lucide-layout-dashboard]',
  host: {
    class: 'lucide lucide-layout-dashboard',
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    linecap: 'round',
    linejoin: 'round',
  },
  template: `
    <svg:rect width="7" height="9" x="3" y="3" rx="1" />
    <svg:rect width="7" height="5" x="14" y="3" rx="1" />
    <svg:rect width="7" height="9" x="14" y="12" rx="1" />
    <svg:rect width="7" height="5" x="3" y="16" rx="1" />
  `,
})
export class LucideLayoutDashboard {}
