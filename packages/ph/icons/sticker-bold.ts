import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phStickerBoldIcon],svg[ph-sticker-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M168 28H88a60.07 60.07 0 0 0-60 60v80a60.07 60.07 0 0 0 60 60h48a11.9 11.9 0 0 0 3.79-.62c27.63-9.21 78.38-60 87.59-87.59A11.9 11.9 0 0 0 228 136V88a60.07 60.07 0 0 0-60-60M52 168V88a36 36 0 0 1 36-36h80a36 36 0 0 1 36 36v36h-20a60.07 60.07 0 0 0-60 60v20H88a36 36 0 0 1-36-36m96 27.63V184a36 36 0 0 1 36-36h11.63C184 164.11 164.11 184 148 195.63"></svg:path>`,
})
export class PhStickerBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
