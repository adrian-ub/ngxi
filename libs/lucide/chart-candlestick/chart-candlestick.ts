import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucideChartCandlestick],svg[lucide-chart-candlestick]',
  host: {
    class: 'lucide lucide-chart-candlestick',
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    linecap: 'round',
    linejoin: 'round',
  },
  template: `
    <svg:path d="M9 5v4" />
    <svg:rect width="4" height="6" x="7" y="9" rx="1" />
    <svg:path d="M9 15v2" />
    <svg:path d="M17 3v2" />
    <svg:rect width="4" height="8" x="15" y="5" rx="1" />
    <svg:path d="M17 13v3" />
    <svg:path d="M3 3v16a2 2 0 0 0 2 2h16" />
  `,
})
export class LucideChartCandlestick {}
