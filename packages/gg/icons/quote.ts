import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ggQuoteIcon],svg[gg-quote-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9.135 9h3L10 14.608H7zm5 0h3L15 14.608h-3z"></svg:path>`,
})
export class GgQuoteIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
