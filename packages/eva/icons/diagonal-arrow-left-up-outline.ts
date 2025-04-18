import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[evaDiagonalArrowLeftUpOutlineIcon],svg[eva-diagonal-arrow-left-up-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17.71 16.29L9.42 8H15a1 1 0 0 0 0-2H7.05a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1H7a1 1 0 0 0 1-1V9.45l8.26 8.26a1 1 0 0 0 1.42 0a1 1 0 0 0 .03-1.42"></svg:path>`,
})
export class EvaDiagonalArrowLeftUpOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
