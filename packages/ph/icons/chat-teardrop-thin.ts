import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phChatTeardropThinIcon],svg[ph-chat-teardrop-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M132 28a96.11 96.11 0 0 0-96 96v84a12 12 0 0 0 12 12h84a96 96 0 0 0 0-192m0 184H48a4 4 0 0 1-4-4v-84a88 88 0 1 1 88 88"></svg:path>`,
})
export class PhChatTeardropThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
