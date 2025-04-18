import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[riDoorLineIcon],svg[ri-door-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17.998 3a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1h-12a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1zm-1 2h-10v14h10zm-2 6v2h-2v-2z"></svg:path>`,
})
export class RiDoorLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
