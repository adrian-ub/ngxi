import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[guidanceCurrencyExchangeIcon],svg[guidance-currency-exchange-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" d="M12 9h-1a1 1 0 0 0-1 1v.375a1 1 0 0 0 .72.96l2.56.747a1 1 0 0 1 .72.96V14a1 1 0 0 1-1 1h-1m0-6h1a1 1 0 0 1 1 1v.5M12 9V7.5m0 7.5h-1a1 1 0 0 1-1-1v-.5m2 1.5v1.5M1 3h12a8 8 0 0 1 8 8M1 3c.41 0 .99-.247 1.41-.503a5.6 5.6 0 0 0 1.458-1.305C4.186.792 4.5.318 4.5 0M1 3c.41 0 .99.247 1.41.503a5.6 5.6 0 0 1 1.458 1.305c.318.4.632.874.632 1.192M23 21H11a8 8 0 0 1-8-8m20 8c-.41 0-.99.247-1.41.503a5.6 5.6 0 0 0-1.458 1.305c-.318.4-.632.874-.632 1.192m3.5-3c-.41 0-.99-.247-1.41-.503a5.6 5.6 0 0 1-1.458-1.305c-.318-.4-.632-.874-.632-1.192M18 12a6 6 0 1 0-12 0a6 6 0 0 0 12 0Z"></svg:path>`,
})
export class GuidanceCurrencyExchangeIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
