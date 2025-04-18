import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[meteorIconsBinanceIcon],svg[meteor-icons-binance-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m12 7l5 5l-5 5l-5-5Zm-9 3l-2 2l2 2m18-4l2 2l-2 2M6 7l6-6l6 6m0 10l-6 6l-6-6"></svg:path>`,
})
export class MeteorIconsBinanceIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
