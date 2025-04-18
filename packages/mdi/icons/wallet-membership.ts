import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiWalletMembershipIcon],svg[mdi-wallet-membership-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20 10H4V4h16m0 11H4v-2h16m0-11H4c-1.11 0-2 .89-2 2v11c0 1.11.89 2 2 2h4v5l4-2l4 2v-5h4c1.11 0 2-.89 2-2V4c0-1.11-.89-2-2-2"></svg:path>`,
})
export class MdiWalletMembershipIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
