import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucideChurch],svg[lucide-church]',
  host: {
    class: 'lucide lucide-church',
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    linecap: 'round',
    linejoin: 'round',
  },
  template: `
    <svg:path d="M10 9h4" />
    <svg:path d="M12 7v5" />
    <svg:path d="M14 22v-4a2 2 0 0 0-4 0v4" />
    <svg:path
      d="M18 22V5.618a1 1 0 0 0-.553-.894l-4.553-2.277a2 2 0 0 0-1.788 0L6.553 4.724A1 1 0 0 0 6 5.618V22"
    />
    <svg:path
      d="m18 7 3.447 1.724a1 1 0 0 1 .553.894V20a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V9.618a1 1 0 0 1 .553-.894L6 7"
    />
  `,
})
export class LucideChurch {}
