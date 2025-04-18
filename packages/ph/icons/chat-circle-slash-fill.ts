import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phChatCircleSlashFillIcon],svg[ph-chat-circle-slash-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M213.92 210.62a8 8 0 1 1-11.84 10.76l-10.26-11.29a104 104 0 0 1-112.7 9.73l-34.05 11.35a16 16 0 0 1-20.24-20.24l11.35-34.05A104.06 104.06 0 0 1 52.33 56.66L42.08 45.38a8 8 0 1 1 11.84-10.76ZM128 24a103.4 103.4 0 0 0-40.33 8.11a8 8 0 0 0-2.81 12.75l121.8 134a8 8 0 0 0 13-1.59A104 104 0 0 0 128 24"></svg:path>`,
})
export class PhChatCircleSlashFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
