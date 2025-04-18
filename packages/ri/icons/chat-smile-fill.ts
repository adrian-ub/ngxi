import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[riChatSmileFillIcon],svg[ri-chat-smile-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6.455 19L2 22.5V4a1 1 0 0 1 1-1h18a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1zM7 10a5 5 0 0 0 10 0h-2a3 3 0 1 1-6 0z"></svg:path>`,
})
export class RiChatSmileFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
