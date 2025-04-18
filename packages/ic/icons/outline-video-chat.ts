import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[icOutlineVideoChatIcon],svg[ic-outline-video-chat-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20 2H4c-1.1 0-1.99.9-1.99 2L2 22l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2m0 14H5.17L4 17.17V4h16z"></svg:path><svg:path fill="currentColor" d="M8 14h6c.55 0 1-.45 1-1v-1.99L17 13V7l-2 1.99V7c0-.55-.45-1-1-1H8c-.55 0-1 .45-1 1v6c0 .55.45 1 1 1"></svg:path>`,
})
export class IcOutlineVideoChatIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
