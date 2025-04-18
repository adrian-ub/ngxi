import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[bxUpArrowCircleIcon],svg[bx-up-arrow-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12.001 1.993C6.486 1.994 2 6.48 2 11.994c.001 5.514 4.487 10 10 10c5.515 0 10.001-4.486 10.001-10s-4.486-10-10-10.001M12 19.994c-4.41 0-7.999-3.589-8-8c0-4.411 3.589-8 8.001-8.001c4.411.001 8 3.59 8 8.001s-3.589 8-8.001 8"></svg:path><svg:path fill="currentColor" d="m12.001 8.001l-4.005 4.005h3.005V16h2v-3.994h3.004z"></svg:path>`,
})
export class BxUpArrowCircleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
