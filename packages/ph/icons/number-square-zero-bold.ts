import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phNumberSquareZeroBoldIcon],svg[ph-number-square-zero-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M128 188c28.26 0 48-24.67 48-60s-19.74-60-48-60s-48 24.67-48 60s19.74 60 48 60m0-96c23.33 0 24 32.32 24 36s-.67 36-24 36s-24-32.32-24-36s.67-36 24-36m80-64H48a20 20 0 0 0-20 20v160a20 20 0 0 0 20 20h160a20 20 0 0 0 20-20V48a20 20 0 0 0-20-20m-4 176H52V52h152Z"></svg:path>`,
})
export class PhNumberSquareZeroBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
