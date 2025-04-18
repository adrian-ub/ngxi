import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightMarkChatReadOutlineIcon],svg[material-symbols-light-mark-chat-read-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m17.35 19.289l-2.813-2.839l.688-.688l2.125 2.125l4.25-4.25l.688.713zM3 20.077V4.616q0-.691.463-1.153T4.615 3h14.77q.69 0 1.152.463T21 4.616V11.5h-1V4.616q0-.231-.192-.424T19.385 4H4.615q-.23 0-.423.192T4 4.615v13.03L5.65 16h6.85v1H6.077zM4 16v1.385V4z"></svg:path>`,
})
export class MaterialSymbolsLightMarkChatReadOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
