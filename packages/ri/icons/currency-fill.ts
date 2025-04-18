import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[riCurrencyFillIcon],svg[ri-currency-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17.005 16.003h2v-12h-10v2h8zm0 2v2.999c0 .553-.45 1-1.007 1H4.012a1 1 0 0 1-1.007-1l.002-13.998c0-.553.45-1.001 1.007-1.001h2.99v-3a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1zm-10-2v2h2v1h2v-1h.5a2.5 2.5 0 0 0 0-5h-3a.5.5 0 0 1 0-1h4.5v-2h-2v-1h-2v1h-.5a2.5 2.5 0 0 0 0 5h3a.5.5 0 0 1 0 1z"></svg:path>`,
})
export class RiCurrencyFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
