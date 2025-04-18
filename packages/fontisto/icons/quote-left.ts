import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fontistoQuoteLeftIcon],svg[fontisto-quote-left-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M31.2 0H24l-4.8 9.6V24h14.4V9.6h-7.2zM12 0H4.8L0 9.6V24h14.4V9.6H7.2z"></svg:path>`,
})
export class FontistoQuoteLeftIcon {
  readonly viewBox = input("0 0 34 24")
  readonly width = input("1.42em")
  readonly height = input("1em")
}
