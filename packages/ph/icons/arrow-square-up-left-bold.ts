import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phArrowSquareUpLeftBoldIcon],svg[ph-arrow-square-up-left-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M208 28H48a20 20 0 0 0-20 20v160a20 20 0 0 0 20 20h160a20 20 0 0 0 20-20V48a20 20 0 0 0-20-20m-4 176H52V52h152ZM84 144V96a12 12 0 0 1 12-12h48a12 12 0 0 1 0 24h-19l43.52 43.51a12 12 0 0 1-17 17L108 125v19a12 12 0 0 1-24 0"></svg:path>`,
})
export class PhArrowSquareUpLeftBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
