import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[riChatSearchLineIcon],svg[ri-chat-search-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5.763 17h7.32a6 6 0 0 0 0 2H6.455L2 22.5V4a1 1 0 0 1 1-1h18a1 1 0 0 1 1 1v8.803a6 6 0 0 0-2-.72V5H4v13.385zm18.187 4.535l-1.504-1.503a4 4 0 1 0-1.414 1.414l1.503 1.504zM21 18a2 2 0 1 1-4 0a2 2 0 0 1 4 0"></svg:path>`,
})
export class RiChatSearchLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
