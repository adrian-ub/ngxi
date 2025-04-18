import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phNumberSquareOneBoldIcon],svg[ph-number-square-one-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M208 28H48a20 20 0 0 0-20 20v160a20 20 0 0 0 20 20h160a20 20 0 0 0 20-20V48a20 20 0 0 0-20-20m-4 176H52V52h152ZM98 102.66A12 12 0 0 1 101.34 86l24-16A12 12 0 0 1 144 80v96a12 12 0 0 1-24 0v-73.58l-5.34 3.58A12 12 0 0 1 98 102.66"></svg:path>`,
})
export class PhNumberSquareOneBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
