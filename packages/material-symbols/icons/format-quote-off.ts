import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsFormatQuoteOffIcon],svg[material-symbols-format-quote-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m19.775 22.6l-9.15-9.15L8 18H5.7L8 14q-1.65 0-2.825-1.175T4 10q0-.675.213-1.275t.587-1.1l-3.4-3.4L2.8 2.8l18.4 18.4zM18.4 15.575l-5.4-5.4V10q0-1.65 1.175-2.825T17 6t2.825 1.175T21 10q0 .575-.137 1.063T20.45 12z"></svg:path>`,
})
export class MaterialSymbolsFormatQuoteOffIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
