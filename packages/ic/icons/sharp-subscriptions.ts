import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[icSharpSubscriptionsIcon],svg[ic-sharp-subscriptions-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20 8H4V6h16zm-2-6H6v2h12zm4 8v12H2V10zm-6 6l-6-3.27v6.53z"></svg:path>`,
})
export class IcSharpSubscriptionsIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
