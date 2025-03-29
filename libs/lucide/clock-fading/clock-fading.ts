import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucideClockFading],svg[lucide-clock-fading]',
  host: {
    class: 'lucide lucide-clock-fading',
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    linecap: 'round',
    linejoin: 'round',
  },
  template: `
    <svg:path d="M12 2a10 10 0 0 1 7.38 16.75" />
    <svg:path d="M12 6v6l4 2" />
    <svg:path d="M2.5 8.875a10 10 0 0 0-.5 3" />
    <svg:path d="M2.83 16a10 10 0 0 0 2.43 3.4" />
    <svg:path d="M4.636 5.235a10 10 0 0 1 .891-.857" />
    <svg:path d="M8.644 21.42a10 10 0 0 0 7.631-.38" />
  `,
})
export class LucideClockFading {}
