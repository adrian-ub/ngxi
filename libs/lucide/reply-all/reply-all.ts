import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucideReplyAll],svg[lucide-reply-all]',
  host: {
    class: 'lucide lucide-reply-all',
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    linecap: 'round',
    linejoin: 'round',
  },
  template: `
    <svg:polyline points="7 17 2 12 7 7" />
    <svg:polyline points="12 17 7 12 12 7" />
    <svg:path d="M22 18v-2a4 4 0 0 0-4-4H7" />
  `,
})
export class LucideReplyAll {}
