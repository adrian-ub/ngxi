import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucideHourglass],svg[lucide-hourglass]',
  host: {
    class: 'lucide lucide-hourglass',
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    linecap: 'round',
    linejoin: 'round',
  },
  template: `
    <svg:path d="M5 22h14" />
    <svg:path d="M5 2h14" />
    <svg:path
      d="M17 22v-4.172a2 2 0 0 0-.586-1.414L12 12l-4.414 4.414A2 2 0 0 0 7 17.828V22"
    />
    <svg:path
      d="M7 2v4.172a2 2 0 0 0 .586 1.414L12 12l4.414-4.414A2 2 0 0 0 17 6.172V2"
    />
  `,
})
export class LucideHourglass {}
