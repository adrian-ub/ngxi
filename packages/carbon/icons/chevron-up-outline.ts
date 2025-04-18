import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[carbonChevronUpOutlineIcon],svg[carbon-chevron-up-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9.414 19.414L16 12.83l6.586 6.585L24 18l-8-8l-8 8z"></svg:path><svg:path fill="currentColor" d="M30 16c0 7.72-6.28 14-14 14S2 23.72 2 16S8.28 2 16 2s14 6.28 14 14M4 16c0 6.617 5.383 12 12 12s12-5.383 12-12S22.617 4 16 4S4 9.383 4 16"></svg:path>`,
})
export class CarbonChevronUpOutlineIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
