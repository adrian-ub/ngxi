import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucideSquareDashedKanban],svg[lucide-square-dashed-kanban]',
  host: {
    class: 'lucide lucide-square-dashed-kanban',
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    linecap: 'round',
    linejoin: 'round',
  },
  template: `
    <svg:path d="M8 7v7" />
    <svg:path d="M12 7v4" />
    <svg:path d="M16 7v9" />
    <svg:path d="M5 3a2 2 0 0 0-2 2" />
    <svg:path d="M9 3h1" />
    <svg:path d="M14 3h1" />
    <svg:path d="M19 3a2 2 0 0 1 2 2" />
    <svg:path d="M21 9v1" />
    <svg:path d="M21 14v1" />
    <svg:path d="M21 19a2 2 0 0 1-2 2" />
    <svg:path d="M14 21h1" />
    <svg:path d="M9 21h1" />
    <svg:path d="M5 21a2 2 0 0 1-2-2" />
    <svg:path d="M3 14v1" />
    <svg:path d="M3 9v1" />
  `,
})
export class LucideSquareDashedKanban {}
