import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucideChartScatter],svg[lucide-chart-scatter]',
  host: {
    class: 'lucide lucide-chart-scatter',
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    linecap: 'round',
    linejoin: 'round',
  },
  template: `
    <svg:circle cx="7.5" cy="7.5" r=".5" fill="currentColor" />
    <svg:circle cx="18.5" cy="5.5" r=".5" fill="currentColor" />
    <svg:circle cx="11.5" cy="11.5" r=".5" fill="currentColor" />
    <svg:circle cx="7.5" cy="16.5" r=".5" fill="currentColor" />
    <svg:circle cx="17.5" cy="14.5" r=".5" fill="currentColor" />
    <svg:path d="M3 3v16a2 2 0 0 0 2 2h16" />
  `,
})
export class LucideChartScatter {}
