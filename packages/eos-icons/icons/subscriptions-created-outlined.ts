import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[eosIconsSubscriptionsCreatedOutlinedIcon],svg[eos-icons-subscriptions-created-outlined-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20 8H4V6h16Zm-2-6H6v2h12Zm-7.688 19.1l-3.3-3.3l1.4-1.4l1.9 1.9l5.3-5.3l1.4 1.4Z"></svg:path><svg:path fill="currentColor" d="M22 10H2a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h20a2 2 0 0 0 2-2V12a2 2 0 0 0-2-2m0 12H2V12h20Z"></svg:path>`,
})
export class EosIconsSubscriptionsCreatedOutlinedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
