import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[riChatCheckLineIcon],svg[ri-chat-check-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6.455 19L2 22.5V4a1 1 0 0 1 1-1h18a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1zm-.692-2H20V5H4v13.385zm5.53-4.879l4.243-4.242l1.414 1.414l-5.657 5.657l-3.89-3.89l1.415-1.414z"></svg:path>`,
})
export class RiChatCheckLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
