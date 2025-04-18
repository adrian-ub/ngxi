import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phChatTeardropDotsThinIcon],svg[ph-chat-teardrop-dots-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M140 128a8 8 0 1 1-8-8a8 8 0 0 1 8 8m-52-8a8 8 0 1 0 8 8a8 8 0 0 0-8-8m88 0a8 8 0 1 0 8 8a8 8 0 0 0-8-8m52 4a96.11 96.11 0 0 1-96 96H48a12 12 0 0 1-12-12v-84a96 96 0 0 1 192 0m-8 0a88 88 0 0 0-176 0v84a4 4 0 0 0 4 4h84a88.1 88.1 0 0 0 88-88"></svg:path>`,
})
export class PhChatTeardropDotsThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
