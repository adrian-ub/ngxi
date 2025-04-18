import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[riDoorClosedFillIcon],svg[ri-door-closed-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2.998 21v-2h2V4a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v15h2v2zm12-10h-2v2h2z"></svg:path>`,
})
export class RiDoorClosedFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
