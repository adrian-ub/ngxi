import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[teenyiconsChatTypingAltOutlineIcon],svg[teenyicons-chat-typing-alt-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" d="M7 7.5h1m-4 0h1m5 0h1m3.5 7h-7a7 7 0 1 1 7-7z"></svg:path>`,
})
export class TeenyiconsChatTypingAltOutlineIcon {
  readonly viewBox = input("0 0 15 15")
  readonly width = input("1em")
  readonly height = input("1em")
}
