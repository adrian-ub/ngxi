import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsCardMembershipOutlineSharpIcon],svg[material-symbols-card-membership-outline-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 15h16v-2H4zm4 7v-5H2V2h20v15h-6v5l-4-2zM4 10h16V4H4zm0 5V4z"></svg:path>`,
})
export class MaterialSymbolsCardMembershipOutlineSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
