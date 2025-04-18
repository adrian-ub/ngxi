import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightMarkChatReadOutlineSharpIcon],svg[material-symbols-light-mark-chat-read-outline-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m17.35 19.289l-2.813-2.839l.688-.688l2.125 2.125l4.25-4.25l.688.713zM3 20.077V3h18v8.5h-1V4H4v13.644L5.65 16h6.85v1H6.077zM4 16v1.385V4z"></svg:path>`,
})
export class MaterialSymbolsLightMarkChatReadOutlineSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
