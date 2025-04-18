import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[carbonBatteryHalfIcon],svg[carbon-battery-half-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M24 24H6a2 2 0 0 1-2-2V10a2 2 0 0 1 2-2h18a2 2 0 0 1 2 2v1h1a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2h-1v1a2 2 0 0 1-2 2M6 10v12h18v-3h3v-6h-3v-3Z"></svg:path><svg:path fill="currentColor" d="M16 12v8H8v-8z"></svg:path>`,
})
export class CarbonBatteryHalfIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
