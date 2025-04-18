import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[faEllipsisVIcon],svg[fa-ellipsis-v-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M384 1120v192q0 40-28 68t-68 28H96q-40 0-68-28t-28-68v-192q0-40 28-68t68-28h192q40 0 68 28t28 68m0-512v192q0 40-28 68t-68 28H96q-40 0-68-28T0 800V608q0-40 28-68t68-28h192q40 0 68 28t28 68m0-512v192q0 40-28 68t-68 28H96q-40 0-68-28T0 288V96q0-40 28-68T96 0h192q40 0 68 28t28 68"></svg:path>`,
})
export class FaEllipsisVIcon {
  readonly viewBox = input("0 0 384 1408")
  readonly width = input("0.28em")
  readonly height = input("1em")
}
