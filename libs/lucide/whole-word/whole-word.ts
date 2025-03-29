import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucideWholeWord],svg[lucide-whole-word]',
  host: {
    class: 'lucide lucide-whole-word',
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    linecap: 'round',
    linejoin: 'round',
  },
  template: `
    <svg:circle cx="7" cy="12" r="3" />
    <svg:path d="M10 9v6" />
    <svg:circle cx="17" cy="12" r="3" />
    <svg:path d="M14 7v8" />
    <svg:path d="M22 17v1c0 .5-.5 1-1 1H3c-.5 0-1-.5-1-1v-1" />
  `,
})
export class LucideWholeWord {}
