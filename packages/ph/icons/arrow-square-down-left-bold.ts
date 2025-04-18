import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phArrowSquareDownLeftBoldIcon],svg[ph-arrow-square-down-left-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M208 28H48a20 20 0 0 0-20 20v160a20 20 0 0 0 20 20h160a20 20 0 0 0 20-20V48a20 20 0 0 0-20-20m-4 176H52V52h152ZM84 160v-48a12 12 0 0 1 24 0v19l43.51-43.52a12 12 0 0 1 17 17L125 148h19a12 12 0 0 1 0 24H96a12 12 0 0 1-12-12"></svg:path>`,
})
export class PhArrowSquareDownLeftBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
