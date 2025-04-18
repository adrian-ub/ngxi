import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[riDoorLockBoxLineIcon],svg[ri-door-lock-box-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 3h16a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1m1 2v14h14V5zm6 7.792a2.5 2.5 0 1 1 2 0V16h-2z"></svg:path>`,
})
export class RiDoorLockBoxLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
