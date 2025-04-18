import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[eosIconsSubscriptionsCreatedIcon],svg[eos-icons-subscriptions-created-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4.01 6.01h16v2h-16zm2-4h12v2h-12zM20 10H4a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-8a2 2 0 0 0-2-2m-9.7 10L7 16.76l1.4-1.4l1.9 1.9l5.3-5.3l1.4 1.4Z"></svg:path>`,
})
export class EosIconsSubscriptionsCreatedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
