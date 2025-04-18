import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[faPlusIcon],svg[fa-plus-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1408 608v192q0 40-28 68t-68 28H896v416q0 40-28 68t-68 28H608q-40 0-68-28t-28-68V896H96q-40 0-68-28T0 800V608q0-40 28-68t68-28h416V96q0-40 28-68t68-28h192q40 0 68 28t28 68v416h416q40 0 68 28t28 68"></svg:path>`,
})
export class FaPlusIcon {
  readonly viewBox = input("0 0 1408 1408")
  readonly width = input("1em")
  readonly height = input("1em")
}
