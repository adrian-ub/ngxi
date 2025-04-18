import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[teenyiconsChatTypingAltSolidIcon],svg[teenyicons-chat-typing-alt-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M0 7.5a7.5 7.5 0 1 1 15 0V15H7.5A7.5 7.5 0 0 1 0 7.5M4 8h1V7H4zm7 0h-1V7h1zM7 8h1V7H7z" clip-rule="evenodd"></svg:path>`,
})
export class TeenyiconsChatTypingAltSolidIcon {
  readonly viewBox = input("0 0 15 15")
  readonly width = input("1em")
  readonly height = input("1em")
}
