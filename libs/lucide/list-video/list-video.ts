import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucideListVideo],svg[lucide-list-video]',
  host: {
    class: 'lucide lucide-list-video',
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    linecap: 'round',
    linejoin: 'round',
  },
  template: `
    <svg:path d="M12 12H3" />
    <svg:path d="M16 6H3" />
    <svg:path d="M12 18H3" />
    <svg:path d="m16 12 5 3-5 3v-6Z" />
  `,
})
export class LucideListVideo {}
