import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucideTrainTrack],svg[lucide-train-track]',
  host: {
    class: 'lucide lucide-train-track',
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    linecap: 'round',
    linejoin: 'round',
  },
  template: `
    <svg:path d="M2 17 17 2" />
    <svg:path d="m2 14 8 8" />
    <svg:path d="m5 11 8 8" />
    <svg:path d="m8 8 8 8" />
    <svg:path d="m11 5 8 8" />
    <svg:path d="m14 2 8 8" />
    <svg:path d="M7 22 22 7" />
  `,
})
export class LucideTrainTrack {}
