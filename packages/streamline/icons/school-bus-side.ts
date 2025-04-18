import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineSchoolBusSideIcon],svg[streamline-school-bus-side-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M11.625 11.492h.802a1 1 0 0 0 1-1V7.957a1 1 0 0 0-1-1h-.552V3.375a1 1 0 0 0-1-1h-9.19a1 1 0 0 0-1 1v7.26c0 .473.384.857.857.857H2m9.875-7.284H.685m11.19 2.749H.685m3.779-2.749v2.745m3.567-2.745v2.745"></svg:path><svg:path d="M1.994 11.478a1.396 1.396 0 1 0 2.792 0a1.396 1.396 0 1 0-2.792 0m6.84 0a1.396 1.396 0 1 0 2.792 0a1.396 1.396 0 1 0-2.792 0m-4.048 0h4.048"></svg:path></svg:g>`,
})
export class StreamlineSchoolBusSideIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
