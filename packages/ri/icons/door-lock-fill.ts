import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[riDoorLockFillIcon],svg[ri-door-lock-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10s-4.477 10-10 10m-1-9.208V16h2v-3.208a2.5 2.5 0 1 0-2 0"></svg:path>`,
})
export class RiDoorLockFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
