import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phNumberSquareThreeBoldIcon],svg[ph-number-square-three-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M208 28H48a20 20 0 0 0-20 20v160a20 20 0 0 0 20 20h160a20 20 0 0 0 20-20V48a20 20 0 0 0-20-20m-4 176H52V52h152ZM92 80a12 12 0 0 1 12-12h48a12 12 0 0 1 9.83 18.88l-18.34 26.2A40 40 0 1 1 95.43 176a12 12 0 1 1 17.14-16.79A16 16 0 1 0 124 132a12 12 0 0 1-9.83-18.88L129 92h-25a12 12 0 0 1-12-12"></svg:path>`,
})
export class PhNumberSquareThreeBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
