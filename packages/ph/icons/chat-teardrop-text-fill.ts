import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phChatTeardropTextFillIcon],svg[ph-chat-teardrop-text-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M132 24A100.11 100.11 0 0 0 32 124v84a16 16 0 0 0 16 16h84a100 100 0 0 0 0-200m32 128H96a8 8 0 0 1 0-16h68a8 8 0 0 1 0 16m0-32H96a8 8 0 0 1 0-16h68a8 8 0 0 1 0 16"></svg:path>`,
})
export class PhChatTeardropTextFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
