import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[eosIconsActivateSubscriptionsIcon],svg[eos-icons-activate-subscriptions-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 6h16v2H4zm2-4h12v2H6zm14 8H4a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-8a2 2 0 0 0-2-2m-5 7h-2v2h-2v-2H9v-2h2v-2h2v2h2Z"></svg:path>`,
})
export class EosIconsActivateSubscriptionsIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
