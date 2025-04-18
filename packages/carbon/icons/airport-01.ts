import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[carbonAirport01Icon],svg[carbon-airport-01-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="m17 14.5l6 2.5v-2l-6-3V9a1 1 0 0 0-2 0v3l-6 3v2l6-2.5V20l-3 2v1l4-1l4 1v-1l-3-2Z"></svg:path><svg:path fill="currentColor" d="M16 30a14 14 0 1 1 14-14a14.016 14.016 0 0 1-14 14m0-26a12 12 0 1 0 12 12A12.014 12.014 0 0 0 16 4"></svg:path>`,
})
export class CarbonAirport01Icon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
