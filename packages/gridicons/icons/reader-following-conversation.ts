import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[gridiconsReaderFollowingConversationIcon],svg[gridicons-reader-following-conversation-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m16.8 14.5l3.2-3.2V5c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v9c0 1.1.9 2 2 2h2v5l8.7-8.7z"></svg:path><svg:path fill="currentColor" d="m22.6 11.1l-6.1 6.1l-2.1-2.2l-1.4 1.4l3.5 3.6l7.5-7.6z"></svg:path>`,
})
export class GridiconsReaderFollowingConversationIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
