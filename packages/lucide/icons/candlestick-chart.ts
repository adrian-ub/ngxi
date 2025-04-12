import { Component, input } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucideCandlestickChartIcon],svg[lucide-candlestick-chart-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M9 5v4"></svg:path><svg:rect width="4" height="6" x="7" y="9" rx="1"></svg:rect><svg:path d="M9 15v2m8-14v2"></svg:path><svg:rect width="4" height="8" x="15" y="5" rx="1"></svg:rect><svg:path d="M17 13v3M3 3v18h18"></svg:path></svg:g>`
})
export class LucideCandlestickChartIcon {

  readonly viewBox = input("0 0 24 24");
  readonly width = input("1em");
  readonly height = input("1em");
}
