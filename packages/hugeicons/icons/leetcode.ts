import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsLeetcodeIcon],svg[hugeicons-leetcode-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M13.851 3L4.63 12a2.06 2.06 0 0 0 0 2.965l5.555 5.421c.84.819 2.2.819 3.038 0L16 17.676"></svg:path><svg:path d="m6.332 10.338l3.852-3.76a2.186 2.186 0 0 1 3.038 0l2.777 2.711M11 13h9"></svg:path></svg:g>`,
})
export class HugeiconsLeetcodeIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
