import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[riUser2LineIcon],svg[ri-user-2-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 22a8 8 0 1 1 16 0zm9-5.917V20h4.659A6.01 6.01 0 0 0 13 16.083M11 20v-3.917A6.01 6.01 0 0 0 6.341 20zm1-7c-3.315 0-6-2.685-6-6s2.685-6 6-6s6 2.685 6 6s-2.685 6-6 6m0-2c2.21 0 4-1.79 4-4s-1.79-4-4-4s-4 1.79-4 4s1.79 4 4 4"></svg:path>`,
})
export class RiUser2LineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
