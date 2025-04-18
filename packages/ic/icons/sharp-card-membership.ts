import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[icSharpCardMembershipIcon],svg[ic-sharp-card-membership-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22 2H2v15h6v5l4-2l4 2v-5h6zm-2 13H4v-2h16zm0-5H4V4h16z"></svg:path>`,
})
export class IcSharpCardMembershipIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
