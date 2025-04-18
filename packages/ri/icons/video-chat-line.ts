import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[riVideoChatLineIcon],svg[ri-video-chat-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14 10.25L17 8v6l-3-2.25V14H7V8h7zM5.763 17H20V5H4v13.385zm.692 2L2 22.5V4a1 1 0 0 1 1-1h18a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1z"></svg:path>`,
})
export class RiVideoChatLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
