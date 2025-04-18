import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[riChatSmileLineIcon],svg[ri-chat-smile-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6.455 19L2 22.5V4a1 1 0 0 1 1-1h18a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1zm-.692-2H20V5H4v13.385zM7 10h2a3 3 0 1 0 6 0h2a5 5 0 0 1-10 0"></svg:path>`,
})
export class RiChatSmileLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
