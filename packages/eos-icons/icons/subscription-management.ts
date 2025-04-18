import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[eosIconsSubscriptionManagementIcon],svg[eos-icons-subscription-management-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6 19h5v4l-2.5-1.5L6 23zM20 1h-8v22l2.5-1.5L17 23v-2h3a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2m-6 4h2v2h-2Zm0 5h2v2h-2Zm0 5h2v2h-2ZM4 1a2.006 2.006 0 0 0-2 2v16a2.006 2.006 0 0 0 2 2V3h7V1Z"></svg:path><svg:path fill="currentColor" d="M6 5h2v2H6zm0 5h2v2H6zm0 5h2v2H6z"></svg:path>`,
})
export class EosIconsSubscriptionManagementIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
