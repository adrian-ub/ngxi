import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[carbonCurrencyLiraIcon],svg[carbon-currency-lira-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M23 19a6.007 6.007 0 0 1-6 6h-4v-6.892L21.214 15v-2L13 16.108v-3L21.214 10V8L13 11.108V5h-2v6.865L8 13v2l3-1.135v3L8 18v2l3-1.135V27h6a8.01 8.01 0 0 0 8-8Z"></svg:path>`,
})
export class CarbonCurrencyLiraIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
