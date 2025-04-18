import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tdesignMapChatFilledIcon],svg[tdesign-map-chat-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7.5 2.717L2 5.926V21.5l5.5-2.267zm2 16.193l2 1.18V11.5h3V5.09l-5-2.952zM22 2.5v9h-5.5V4.767z"></svg:path><svg:path fill="currentColor" d="M23 13.5h-9.5v9.017l4.208-2.02H23z"></svg:path>`,
})
export class TdesignMapChatFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
