import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phChatsTeardropBoldIcon],svg[ph-chats-teardrop-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M172.29 68.9A84 84 0 0 0 12 104v64a20 20 0 0 0 20 20h52.1a84.18 84.18 0 0 0 75.9 48h64a20 20 0 0 0 20-20v-64a84 84 0 0 0-71.71-83.1M36 104a60 60 0 1 1 60 60H36Zm184 108h-60a60.14 60.14 0 0 1-49-25.37a83.93 83.93 0 0 0 68.55-91.37A60 60 0 0 1 220 152Z"></svg:path>`,
})
export class PhChatsTeardropBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
