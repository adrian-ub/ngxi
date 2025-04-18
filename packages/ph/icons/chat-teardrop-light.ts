import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phChatTeardropLightIcon],svg[ph-chat-teardrop-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M132 26a98.11 98.11 0 0 0-98 98v84a14 14 0 0 0 14 14h84a98 98 0 0 0 0-196m0 184H48a2 2 0 0 1-2-2v-84a86 86 0 1 1 86 86"></svg:path>`,
})
export class PhChatTeardropLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
