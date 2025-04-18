import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightFormatQuoteIcon],svg[material-symbols-light-format-quote-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m6.585 17.308l2.396-4.174q-.173.097-.404.135t-.461.039q-1.4 0-2.354-.973q-.954-.974-.954-2.335q0-1.4.954-2.354t2.354-.954q1.361 0 2.334.954T11.423 10q0 .479-.118.899t-.336.793l-3.238 5.616zm8.769 0l2.396-4.173q-.173.096-.404.134t-.461.039q-1.4 0-2.354-.973T13.577 10q0-1.42.954-2.363t2.354-.945q1.361 0 2.334.954T20.192 10q0 .479-.118.899t-.335.793L16.5 17.308z"></svg:path>`,
})
export class MaterialSymbolsLightFormatQuoteIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
