import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[icSharpFormatQuoteIcon],svg[ic-sharp-format-quote-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 17h3l2-4V7H4v6h3zm10 0h3l2-4V7h-6v6h3z"></svg:path>`,
})
export class IcSharpFormatQuoteIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
