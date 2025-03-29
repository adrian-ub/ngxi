import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucideMousePointer],svg[lucide-mouse-pointer]',
  host: {
    class: 'lucide lucide-mouse-pointer',
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    linecap: 'round',
    linejoin: 'round',
  },
  template: `
    <svg:path d="M12.586 12.586 19 19" />
    <svg:path
      d="M3.688 3.037a.497.497 0 0 0-.651.651l6.5 15.999a.501.501 0 0 0 .947-.062l1.569-6.083a2 2 0 0 1 1.448-1.479l6.124-1.579a.5.5 0 0 0 .063-.947z"
    />
  `,
})
export class LucideMousePointer {}
