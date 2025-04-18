import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[faCheckIcon],svg[fa-check-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1575 310q0 40-28 68l-724 724l-136 136q-28 28-68 28t-68-28l-136-136L53 740q-28-28-28-68t28-68l136-136q28-28 68-28t68 28l294 295l656-657q28-28 68-28t68 28l136 136q28 28 28 68"></svg:path>`,
})
export class FaCheckIcon {
  readonly viewBox = input("0 0 1600 1280")
  readonly width = input("1.25em")
  readonly height = input("1em")
}
