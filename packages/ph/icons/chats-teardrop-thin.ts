import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phChatsTeardropThinIcon],svg[ph-chats-teardrop-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M166.76 76.32A76 76 0 0 0 20 104v64a12 12 0 0 0 12 12h57.33A76.13 76.13 0 0 0 160 228h64a12 12 0 0 0 12-12v-64a76 76 0 0 0-69.24-75.68M28 168v-64a68 68 0 1 1 68 68H32a4 4 0 0 1-4-4m200 48a4 4 0 0 1-4 4h-64a68.16 68.16 0 0 1-62-40a76 76 0 0 0 71.5-95.33A68 68 0 0 1 228 152Z"></svg:path>`,
})
export class PhChatsTeardropThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
