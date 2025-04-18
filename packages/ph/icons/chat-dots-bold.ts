import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phChatDotsBoldIcon],svg[ph-chat-dots-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M88 128a16 16 0 1 1 16 16a16 16 0 0 1-16-16m64 16a16 16 0 1 0-16-16a16 16 0 0 0 16 16m84-80v128a20 20 0 0 1-20 20H84.47L53 239.17l-.12.11A19.9 19.9 0 0 1 40.05 244a20.1 20.1 0 0 1-8.49-1.9A19.82 19.82 0 0 1 20 224V64a20 20 0 0 1 20-20h176a20 20 0 0 1 20 20m-24 4H44v147.23l28.16-24.32A11.93 11.93 0 0 1 80 188h132Z"></svg:path>`,
})
export class PhChatDotsBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
