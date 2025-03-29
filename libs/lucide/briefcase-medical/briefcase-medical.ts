import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucideBriefcaseMedical],svg[lucide-briefcase-medical]',
  host: {
    class: 'lucide lucide-briefcase-medical',
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    linecap: 'round',
    linejoin: 'round',
  },
  template: `
    <svg:path d="M12 11v4" />
    <svg:path d="M14 13h-4" />
    <svg:path d="M16 6V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2" />
    <svg:path d="M18 6v14" />
    <svg:path d="M6 6v14" />
    <svg:rect width="20" height="14" x="2" y="6" rx="2" />
  `,
})
export class LucideBriefcaseMedical {}
