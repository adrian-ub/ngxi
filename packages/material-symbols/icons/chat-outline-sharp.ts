import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsChatOutlineSharpIcon],svg[material-symbols-chat-outline-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 22V2h20v16H6zm3.15-6H20V4H4v13.125zM4 16V4zm2-2h8v-2H6zm0-3h12V9H6zm0-3h12V6H6z"></svg:path>`,
})
export class MaterialSymbolsChatOutlineSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
