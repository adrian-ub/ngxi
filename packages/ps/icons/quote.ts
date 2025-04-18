import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[psQuoteIcon],svg[ps-quote-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M112 171q-37 0-64 21v-21q0-53 37.5-90.5T176 43q21 0 21-22q0-21-21-21q-70 0-120.5 50T5 171v106q0 45 31 76t76 31t76-31t31-76q0-44-31-75t-76-31m256 0q-37 0-64 21v-21q0-53 37.5-90.5T432 43q21 0 21-22q0-21-21-21q-70 0-120.5 50T261 171v106q0 45 31 76t76 31t76-31t31-76q0-44-31-75t-76-31"></svg:path>`,
})
export class PsQuoteIcon {
  readonly viewBox = input("0 0 480 448")
  readonly width = input("1.08em")
  readonly height = input("1em")
}
