import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightChatOutlineSharpIcon],svg[material-symbols-light-chat-outline-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 20.077V3h18v14H6.077zM5.65 16H20V4H4v13.644zM4 16V4zm2.5-2.5h7v-1h-7zm0-3h11v-1h-11zm0-3h11v-1h-11z"></svg:path>`,
})
export class MaterialSymbolsLightChatOutlineSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
