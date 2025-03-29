import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucideUtilityPole],svg[lucide-utility-pole]',
  host: {
    class: 'lucide lucide-utility-pole',
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    linecap: 'round',
    linejoin: 'round',
  },
  template: `
    <svg:path d="M12 2v20" />
    <svg:path d="M2 5h20" />
    <svg:path d="M3 3v2" />
    <svg:path d="M7 3v2" />
    <svg:path d="M17 3v2" />
    <svg:path d="M21 3v2" />
    <svg:path d="m19 5-7 7-7-7" />
  `,
})
export class LucideUtilityPole {}
