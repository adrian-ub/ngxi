import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[carbonPendingIcon],svg[carbon-pending-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="9" cy="16" r="2" fill="currentColor"></svg:circle><svg:circle cx="23" cy="16" r="2" fill="currentColor"></svg:circle><svg:circle cx="16" cy="16" r="2" fill="currentColor"></svg:circle><svg:path fill="currentColor" d="M16 30a14 14 0 1 1 14-14a14.016 14.016 0 0 1-14 14m0-26a12 12 0 1 0 12 12A12.014 12.014 0 0 0 16 4"></svg:path>`,
})
export class CarbonPendingIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
