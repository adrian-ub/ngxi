import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tdesignChatDoubleIcon],svg[tdesign-chat-double-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1 2h19v14H5.82L1 19.443zm2 2v11.557L5.18 14H18V4zm20.5.5v18.443L18.68 19.5H7.5v-2h11.82l2.18 1.557V4.5z"></svg:path>`,
})
export class TdesignChatDoubleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
