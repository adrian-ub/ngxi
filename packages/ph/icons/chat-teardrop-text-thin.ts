import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phChatTeardropTextThinIcon],svg[ph-chat-teardrop-text-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M168 112a4 4 0 0 1-4 4H96a4 4 0 0 1 0-8h68a4 4 0 0 1 4 4m-4 28H96a4 4 0 0 0 0 8h68a4 4 0 0 0 0-8m64-16a96.11 96.11 0 0 1-96 96H48a12 12 0 0 1-12-12v-84a96 96 0 0 1 192 0m-8 0a88 88 0 0 0-176 0v84a4 4 0 0 0 4 4h84a88.1 88.1 0 0 0 88-88"></svg:path>`,
})
export class PhChatTeardropTextThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
