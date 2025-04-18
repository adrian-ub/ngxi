import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[oiChatIcon],svg[oi-chat-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M0 0v5l1-1h1V1h3V0zm3 2v4h4l1 1V2z"></svg:path>`,
})
export class OiChatIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}
