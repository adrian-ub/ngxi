import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[riDoorFillIcon],svg[ri-door-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17.998 3a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1h-12a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1zm-4 8a1 1 0 1 0 0 2a1 1 0 0 0 0-2"></svg:path>`,
})
export class RiDoorFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
