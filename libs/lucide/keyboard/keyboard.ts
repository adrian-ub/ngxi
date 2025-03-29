import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucideKeyboard],svg[lucide-keyboard]',
  host: {
    class: 'lucide lucide-keyboard',
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    linecap: 'round',
    linejoin: 'round',
  },
  template: `
    <svg:path d="M10 8h.01" />
    <svg:path d="M12 12h.01" />
    <svg:path d="M14 8h.01" />
    <svg:path d="M16 12h.01" />
    <svg:path d="M18 8h.01" />
    <svg:path d="M6 8h.01" />
    <svg:path d="M7 16h10" />
    <svg:path d="M8 12h.01" />
    <svg:rect width="20" height="16" x="2" y="4" rx="2" />
  `,
})
export class LucideKeyboard {}
