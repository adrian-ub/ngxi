import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsCardMembershipOutlineRoundedIcon],svg[material-symbols-card-membership-outline-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 13v2h16v-2zM4 2h16q.825 0 1.413.588T22 4v11q0 .825-.587 1.413T20 17h-4v3.375q0 .575-.475.863t-.975.037l-2.1-1.05q-.2-.125-.45-.125t-.45.125l-2.1 1.05q-.5.25-.975-.037T8 20.375V17H4q-.825 0-1.412-.587T2 15V4q0-.825.588-1.412T4 2m0 8h16V4H4zm0 5V4z"></svg:path>`,
})
export class MaterialSymbolsCardMembershipOutlineRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
