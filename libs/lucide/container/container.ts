import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucideContainer],svg[lucide-container]',
  host: {
    class: 'lucide lucide-container',
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    linecap: 'round',
    linejoin: 'round',
  },
  template: `
    <svg:path
      d="M22 7.7c0-.6-.4-1.2-.8-1.5l-6.3-3.9a1.72 1.72 0 0 0-1.7 0l-10.3 6c-.5.2-.9.8-.9 1.4v6.6c0 .5.4 1.2.8 1.5l6.3 3.9a1.72 1.72 0 0 0 1.7 0l10.3-6c.5-.3.9-1 .9-1.5Z"
    />
    <svg:path d="M10 21.9V14L2.1 9.1" />
    <svg:path d="m10 14 11.9-6.9" />
    <svg:path d="M14 19.8v-8.1" />
    <svg:path d="M18 17.5V9.4" />
  `,
})
export class LucideContainer {}
