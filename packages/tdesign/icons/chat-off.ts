import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tdesignChatOffIcon],svg[tdesign-chat-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M23.414 22.001L2 .587L.586 2l.914.914v19.79L6.876 18h9.71L22 23.415zm-8.828-6H6.124L3.5 18.297V4.915zM22.503 18L22.5 2H9.655l-3.418-.003L8.24 4H20.5v11.995z"></svg:path>`,
})
export class TdesignChatOffIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
