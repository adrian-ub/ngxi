import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineBagRupeeIcon],svg[streamline-bag-rupee-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M4.958 6h4.084M4.958 7.604h4.084M6.708 6c.389.097 1.167.438 1.167 1.458c0 1.75-2.334 1.75-2.334 1.75s1.167 1.021 2.917 1.459"></svg:path><svg:path d="M7 13.5c3.5 0 6-1.238 6-3.994c0-2.995-1.5-4.992-4.5-6.49l1.18-1.518A.658.658 0 0 0 9.12.5H4.88a.66.66 0 0 0-.56.998L5.5 3.026C2.5 4.534 1 6.531 1 9.526C1 12.262 3.5 13.5 7 13.5"></svg:path></svg:g>`,
})
export class StreamlineBagRupeeIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
