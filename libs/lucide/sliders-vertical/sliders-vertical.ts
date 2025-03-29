import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucideSlidersVertical],svg[lucide-sliders-vertical]',
  host: {
    class: 'lucide lucide-sliders-vertical',
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    linecap: 'round',
    linejoin: 'round',
  },
  template: `
    <svg:line x1="4" x2="4" y1="21" y2="14" />
    <svg:line x1="4" x2="4" y1="10" y2="3" />
    <svg:line x1="12" x2="12" y1="21" y2="12" />
    <svg:line x1="12" x2="12" y1="8" y2="3" />
    <svg:line x1="20" x2="20" y1="21" y2="16" />
    <svg:line x1="20" x2="20" y1="12" y2="3" />
    <svg:line x1="2" x2="6" y1="14" y2="14" />
    <svg:line x1="10" x2="14" y1="8" y2="8" />
    <svg:line x1="18" x2="22" y1="16" y2="16" />
  `,
})
export class LucideSlidersVertical {}
