import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightFormatQuoteOffIcon],svg[material-symbols-light-format-quote-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m19.371 20.792l-8.65-8.65l-2.99 5.166H6.585l2.396-4.173q-.173.096-.404.134t-.461.039q-1.4 0-2.354-.973T4.808 10q0-.79.328-1.448t.895-1.1L3.208 4.629l.708-.713l16.169 16.169zm-1.548-5.794l-4.092-4.092q-.077-.223-.115-.443T13.577 10q0-1.42.954-2.363t2.353-.945q1.362 0 2.335.954T20.192 10q0 .479-.118.899t-.335.793z"></svg:path>`,
})
export class MaterialSymbolsLightFormatQuoteOffIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
