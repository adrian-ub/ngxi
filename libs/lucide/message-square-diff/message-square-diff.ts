import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucideMessageSquareDiff],svg[lucide-message-square-diff]',
  host: {
    class: 'lucide lucide-message-square-diff',
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    linecap: 'round',
    linejoin: 'round',
  },
  template: `
    <svg:path d="m5 19-2 2V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2" />
    <svg:path d="M9 10h6" />
    <svg:path d="M12 7v6" />
    <svg:path d="M9 17h6" />
  `,
})
export class LucideMessageSquareDiff {}
