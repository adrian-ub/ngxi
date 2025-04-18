import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[gridiconsReaderFollowConversationIcon],svg[gridicons-reader-follow-conversation-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20 14v-3h-2v3h-3v2h3v3h2v-3h3v-2z"></svg:path><svg:path fill="currentColor" d="M13 16h-2l-5 5v-5H4c-1.1 0-2-.9-2-2V5c0-1.1.9-2 2-2h14c1.1 0 2 .9 2 2v4h-4v3h-3z"></svg:path>`,
})
export class GridiconsReaderFollowConversationIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
