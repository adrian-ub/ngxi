import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightCardMembershipOutlineSharpIcon],svg[material-symbols-light-card-membership-outline-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 15h16v-2.423H4zm5.077 5.27V16H3V3h18v13h-6.077v4.27L12 18.807zM4 10.422h16V4H4zM4 15V4z"></svg:path>`,
})
export class MaterialSymbolsLightCardMembershipOutlineSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
