import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsEarIcon],svg[hugeicons-ear-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M6.077 18c0 2.21 1.149 4 3.23 4s3.77-1.5 4.308-4c.259-1.199.788-1.923 1.616-2.5C17.385 14 19 11.692 19 9A7 7 0 1 0 5 9"></svg:path><svg:path d="M9 15c1.385 0 2.508-1.007 2.508-2.25S10.385 10.5 9 10.5C9 8.483 9.464 6 12.01 6C13.8 6 14.85 7.374 15 9.15"></svg:path></svg:g>`,
})
export class HugeiconsEarIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
