import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[bxMaleSignIcon],svg[bx-male-sign-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20 11V4h-7l2.793 2.793l-4.322 4.322A5.96 5.96 0 0 0 8 10c-3.309 0-6 2.691-6 6s2.691 6 6 6s6-2.691 6-6c0-1.294-.416-2.49-1.115-3.471l4.322-4.322zM8 20c-2.206 0-4-1.794-4-4s1.794-4 4-4s4 1.794 4 4s-1.794 4-4 4"></svg:path>`,
})
export class BxMaleSignIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
