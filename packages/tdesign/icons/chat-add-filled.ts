import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tdesignChatAddFilledIcon],svg[tdesign-chat-add-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21 3V0h-2v3h-3v2h3v3h2V5h3V3z"></svg:path><svg:path fill="currentColor" d="M20 9.5c.9 0 1.75-.216 2.5-.6V18H6.876L1.5 22.704V2h13.375A5.5 5.5 0 0 0 20 9.5"></svg:path>`,
})
export class TdesignChatAddFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
