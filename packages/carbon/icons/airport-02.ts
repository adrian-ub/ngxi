import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[carbonAirport02Icon],svg[carbon-airport-02-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M23 17h-3.586L16 13h-2l2.586 4H10.72L9.5 15H8l1.057 3.305a1 1 0 0 0 .952.695H23a1 1 0 0 0 0-2"></svg:path><svg:path fill="currentColor" d="M16 30a14 14 0 1 1 14-14a14.016 14.016 0 0 1-14 14m0-26a12 12 0 1 0 12 12A12.014 12.014 0 0 0 16 4"></svg:path>`,
})
export class CarbonAirport02Icon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
