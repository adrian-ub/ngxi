import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucideNonBinary],svg[lucide-non-binary]',
  host: {
    class: 'lucide lucide-non-binary',
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    linecap: 'round',
    linejoin: 'round',
  },
  template: `
    <svg:path d="M12 2v10" />
    <svg:path d="m9 4 6 4" />
    <svg:path d="m9 8 6-4" />
    <svg:circle cx="12" cy="17" r="5" />
  `,
})
export class LucideNonBinary {}
