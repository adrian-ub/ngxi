import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phSeatbeltFillIcon],svg[ph-seatbelt-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M128 112a44 44 0 1 1 44-44a44.05 44.05 0 0 1-44 44m72 104H77.16l120.13-106a8 8 0 0 0 1.1-1.19a8.07 8.07 0 0 0 1.61-5.08A8 8 0 0 0 186.71 98l-24.54 21.65A80 80 0 0 0 49 179.25a8 8 0 0 0-.1 1.1l-.9 43.48a8 8 0 0 0 8 8.17h144a8 8 0 0 0 0-16m-11.88-73a8 8 0 0 0-6.25 1.94L119.47 200H200a8 8 0 0 0 8-8a79.6 79.6 0 0 0-14.27-45.62a8 8 0 0 0-5.61-3.38"></svg:path>`,
})
export class PhSeatbeltFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
