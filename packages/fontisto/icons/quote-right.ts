import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fontistoQuoteRightIcon],svg[fontisto-quote-right-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2.4 24h7.2l4.8-9.6V0H0v14.4h7.2zm19.2 0h7.2l4.8-9.6V0H19.2v14.4h7.2z"></svg:path>`,
})
export class FontistoQuoteRightIcon {
  readonly viewBox = input("0 0 34 24")
  readonly width = input("1.42em")
  readonly height = input("1em")
}
