import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[oiDoubleQuoteSansRightIcon],svg[oi-double-quote-sans-right-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 1L0 4v3h3zm5 0L5 4v3h3z"></svg:path>`,
})
export class OiDoubleQuoteSansRightIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}
