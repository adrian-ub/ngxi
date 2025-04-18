import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phCurrencyJpyBoldIcon],svg[ph-currency-jpy-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m209.29 55.6l-56 68.4H176a12 12 0 0 1 0 24h-36v16h36a12 12 0 0 1 0 24h-36v28a12 12 0 0 1-24 0v-28H80a12 12 0 0 1 0-24h36v-16H80a12 12 0 0 1 0-24h22.68l-56-68.4a12 12 0 1 1 18.61-15.2L128 117.05l62.71-76.65a12 12 0 1 1 18.58 15.2"></svg:path>`,
})
export class PhCurrencyJpyBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
