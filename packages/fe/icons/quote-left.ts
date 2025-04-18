import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[feQuoteLeftIcon],svg[fe-quote-left-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M7 21a4 4 0 0 1-4-4q0-2.21 4-14h2L7 13a4 4 0 1 1 0 8m10 0a4 4 0 0 1-4-4q0-2.21 4-14h2l-2 10a4 4 0 1 1 0 8"></svg:path>`,
})
export class FeQuoteLeftIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
