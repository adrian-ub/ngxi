import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[oiDoubleQuoteSerifRightIcon],svg[oi-double-quote-serif-right-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M0 1v3h2c0 1.11-.89 2-2 2v1c1.65 0 3-1.35 3-3V1zm5 0v3h2c0 1.11-.89 2-2 2v1c1.65 0 3-1.35 3-3V1z"></svg:path>`,
})
export class OiDoubleQuoteSerifRightIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}
