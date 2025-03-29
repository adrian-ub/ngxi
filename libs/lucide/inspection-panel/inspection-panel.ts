import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucideInspectionPanel],svg[lucide-inspection-panel]',
  host: {
    class: 'lucide lucide-inspection-panel',
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    linecap: 'round',
    linejoin: 'round',
  },
  template: `
    <svg:rect width="18" height="18" x="3" y="3" rx="2" />
    <svg:path d="M7 7h.01" />
    <svg:path d="M17 7h.01" />
    <svg:path d="M7 17h.01" />
    <svg:path d="M17 17h.01" />
  `,
})
export class LucideInspectionPanel {}
