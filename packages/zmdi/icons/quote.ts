import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[zmdiQuoteIcon],svg[zmdi-quote-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m21 299l43-86H0V85h128v128l-43 86zm171 0l43-86h-64V85h128v128l-43 86z"></svg:path>`,
})
export class ZmdiQuoteIcon {
  readonly viewBox = input("0 0 304 384")
  readonly width = input("0.8em")
  readonly height = input("1em")
}
