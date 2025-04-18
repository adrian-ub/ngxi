import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phRectanglesTwoBoldIcon],svg[ph-rectangles-two-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M208 132H48a20.023 20.023 0 0 0-20 20v48a20.023 20.023 0 0 0 20 20h160a20.023 20.023 0 0 0 20-20v-48a20.023 20.023 0 0 0-20-20zm-4 64H52v-40h152zm4-160H48a20.023 20.023 0 0 0-20 20v48a20.023 20.023 0 0 0 20 20h160a20.023 20.023 0 0 0 20-20V56a20.023 20.023 0 0 0-20-20zm-4 64H52V60h152z" fill="currentColor"></svg:path>`,
})
export class PhRectanglesTwoBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
