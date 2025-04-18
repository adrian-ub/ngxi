import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[riDoorLockBoxFillIcon],svg[ri-door-lock-box-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 3h16a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1m7 9.792V16h2v-3.208a2.5 2.5 0 1 0-2 0"></svg:path>`,
})
export class RiDoorLockBoxFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
