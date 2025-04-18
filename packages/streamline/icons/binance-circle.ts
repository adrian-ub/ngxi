import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineBinanceCircleIcon],svg[streamline-binance-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M7 7.25a.25.25 0 0 1 0-.5m0 .5a.25.25 0 0 0 0-.5m-3.2.5a.25.25 0 0 1 0-.5m0 .5a.25.25 0 0 0 0-.5m6.4.5a.25.25 0 1 1 0-.5m0 .5a.25.25 0 0 0 0-.5"></svg:path><svg:path d="M7 13.5a6.5 6.5 0 1 0 0-13a6.5 6.5 0 0 0 0 13"></svg:path><svg:path d="M4.5 5L7 3l2.5 2m-5 4L7 11l2.5-2"></svg:path></svg:g>`,
})
export class StreamlineBinanceCircleIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
