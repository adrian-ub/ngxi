import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[guidanceChatIcon],svg[guidance-chat-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" d="M6 8.5h12M6 13h6M23.5 2H23c-3 .5-8 .75-11 .75S4 2.5 1 2H.5v21.5h.25l.154-.154A15.7 15.7 0 0 1 12 18.75c3 0 8 .25 11 .75h.5z"></svg:path>`,
})
export class GuidanceChatIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
