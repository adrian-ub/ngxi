import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsCardiganIcon],svg[hugeicons-cardigan-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M6.5 16L5 21H2l.886-13.285a3 3 0 0 1 1.651-2.484L9 3c1.418 1.595 4.583 1.595 6 0l4.463 2.231a3 3 0 0 1 1.651 2.484L22 21h-3l-1.5-5"></svg:path><svg:path d="m6 9l1 10l1 2h8l1-2l1-10"></svg:path><svg:path d="M8.5 3.5s0 3.873 2.795 5.231c.401.196.705.577.705 1.023V21m3.5-17.5S15.5 8 12 9"></svg:path></svg:g>`,
})
export class HugeiconsCardiganIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
