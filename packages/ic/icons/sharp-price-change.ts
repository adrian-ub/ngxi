import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[icSharpPriceChangeIcon],svg[ic-sharp-price-change-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 4v16h20V4zm10 6H8v1h4v5h-2v1H8v-1H6v-2h4v-1H6V8h2V7h2v1h2zm4 6.25l-2-2h4zM14 10l2-2l2 2z"></svg:path>`,
})
export class IcSharpPriceChangeIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
