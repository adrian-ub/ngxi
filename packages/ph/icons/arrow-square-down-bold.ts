import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phArrowSquareDownBoldIcon],svg[ph-arrow-square-down-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M208 28H48a20 20 0 0 0-20 20v160a20 20 0 0 0 20 20h160a20 20 0 0 0 20-20V48a20 20 0 0 0-20-20m-4 176H52V52h152ZM87.51 144.49a12 12 0 1 1 17-17L116 139V88a12 12 0 0 1 24 0v51l11.51-11.52a12 12 0 1 1 17 17l-32 32a12 12 0 0 1-17 0Z"></svg:path>`,
})
export class PhArrowSquareDownBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
