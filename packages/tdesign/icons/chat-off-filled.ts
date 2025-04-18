import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tdesignChatOffFilledIcon],svg[tdesign-chat-off-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m22.234 18l-16-16H22.5v16zm1.176 4.005L22 23.415L16.586 18h-9.71L1.5 22.704V2.914L.586 2L2 .586l.004.004L2 .594z"></svg:path>`,
})
export class TdesignChatOffFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
