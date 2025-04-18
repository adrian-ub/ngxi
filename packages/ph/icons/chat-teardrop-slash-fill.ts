import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phChatTeardropSlashFillIcon],svg[ph-chat-teardrop-slash-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M213.92 210.62a8 8 0 1 1-11.84 10.76l-13.57-14.92A99.4 99.4 0 0 1 132 224H48a16 16 0 0 1-16-16v-84a99.54 99.54 0 0 1 23.29-64.08L42.08 45.38a8 8 0 0 1 .72-11.46a8.22 8.22 0 0 1 11.34.95Zm-5.57-29.91a4 4 0 0 0 6.24-.4A100 100 0 0 0 83.78 36.42a4 4 0 0 0-1 6.18Z"></svg:path>`,
})
export class PhChatTeardropSlashFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
