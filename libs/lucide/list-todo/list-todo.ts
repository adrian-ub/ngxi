import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucideListTodo],svg[lucide-list-todo]',
  host: {
    class: 'lucide lucide-list-todo',
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    linecap: 'round',
    linejoin: 'round',
  },
  template: `
    <svg:rect x="3" y="5" width="6" height="6" rx="1" />
    <svg:path d="m3 17 2 2 4-4" />
    <svg:path d="M13 6h8" />
    <svg:path d="M13 12h8" />
    <svg:path d="M13 18h8" />
  `,
})
export class LucideListTodo {}
