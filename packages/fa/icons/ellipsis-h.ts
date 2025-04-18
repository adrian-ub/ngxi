import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[faEllipsisHIcon],svg[fa-ellipsis-h-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M384 480v192q0 40-28 68t-68 28H96q-40 0-68-28T0 672V480q0-40 28-68t68-28h192q40 0 68 28t28 68m512 0v192q0 40-28 68t-68 28H608q-40 0-68-28t-28-68V480q0-40 28-68t68-28h192q40 0 68 28t28 68m512 0v192q0 40-28 68t-68 28h-192q-40 0-68-28t-28-68V480q0-40 28-68t68-28h192q40 0 68 28t28 68"></svg:path>`,
})
export class FaEllipsisHIcon {
  readonly viewBox = input("0 0 1408 1280")
  readonly width = input("1.11em")
  readonly height = input("1em")
}
