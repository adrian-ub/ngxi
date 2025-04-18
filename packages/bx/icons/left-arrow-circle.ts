import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[bxLeftArrowCircleIcon],svg[bx-left-arrow-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11.999 1.993C6.486 1.994 2 6.48 1.999 11.994s4.486 10 10.001 10c5.514-.001 10-4.487 10-10c0-5.514-4.486-10-10.001-10.001M12 19.994c-4.412 0-8.001-3.589-8.001-8c.001-4.411 3.59-8 8-8.001C16.411 3.994 20 7.583 20 11.994s-3.589 7.999-8 8"></svg:path><svg:path fill="currentColor" d="m12.012 7.989l-4.005 4.005l4.005 4.004v-3.004h3.994v-2h-3.994z"></svg:path>`,
})
export class BxLeftArrowCircleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
