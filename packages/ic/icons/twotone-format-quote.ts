import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[icTwotoneFormatQuoteIcon],svg[ic-twotone-format-quote-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16.62 16h.76L19 12.76V8h-4v4h3.62zm-10 0h.76L9 12.76V8H5v4h3.62z" opacity=".3"></svg:path><svg:path fill="currentColor" d="M18.62 18L21 13.24V6h-8v8h2.38l-2 4zM15 12V8h4v4.76L17.38 16h-.76l2-4zM3.38 18h5.24L11 13.24V6H3v8h2.38zM5 12V8h4v4.76L7.38 16h-.76l2-4z"></svg:path>`,
})
export class IcTwotoneFormatQuoteIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
