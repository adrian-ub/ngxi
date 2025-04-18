import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phGreaterThanThinIcon],svg[ph-greater-than-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M220 128a4 4 0 0 1-2.29 3.62l-152 72A3.85 3.85 0 0 1 64 204a4 4 0 0 1-1.71-7.62L206.66 128L62.29 59.62a4 4 0 0 1 3.42-7.23l152 72A4 4 0 0 1 220 128"></svg:path>`,
})
export class PhGreaterThanThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
