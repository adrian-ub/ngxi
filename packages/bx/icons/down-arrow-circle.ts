import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[bxDownArrowCircleIcon],svg[bx-down-arrow-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 1.993C6.486 1.994 2 6.48 2 11.994s4.486 9.999 10 10s10-4.486 10-10s-4.485-10-10-10.001m0 18.001c-4.411-.001-8-3.59-8-8s3.589-8 8-8.001c4.411.001 8 3.59 8 8.001s-3.589 8-8 8"></svg:path><svg:path fill="currentColor" d="M13 8h-2v4H7.991l4.005 4.005L16 12h-3z"></svg:path>`,
})
export class BxDownArrowCircleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
