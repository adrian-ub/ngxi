import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[carbonChartBubblePackedIcon],svg[carbon-chart-bubble-packed-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M27.532 17.172A8.99 8.99 0 1 0 13.607 5.88a5.997 5.997 0 1 0-8.556 7.342a6.997 6.997 0 1 0 7.994 11.484A5.998 5.998 0 0 0 25 24c0-.122-.011-.24-.018-.36a3.487 3.487 0 1 0 2.55-6.468M21 4a7 7 0 1 1-7 7a7.01 7.01 0 0 1 7-7M8 4a4 4 0 1 1-4 4a4.005 4.005 0 0 1 4-4m11 24a4 4 0 1 1 4-4a4.005 4.005 0 0 1-4 4"></svg:path>`,
})
export class CarbonChartBubblePackedIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
