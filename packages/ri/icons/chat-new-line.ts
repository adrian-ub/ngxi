import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[riChatNewLineIcon],svg[ri-chat-new-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14 3v2H4v13.385L5.763 17H20v-7h2v8a1 1 0 0 1-1 1H6.455L2 22.5V4a1 1 0 0 1 1-1zm5 0V0h2v3h3v2h-3v3h-2V5h-3V3z"></svg:path>`,
})
export class RiChatNewLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
