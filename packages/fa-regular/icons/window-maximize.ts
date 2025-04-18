import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[faRegularWindowMaximizeIcon],svg[fa-regular-window-maximize-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M464 32H48C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48 48h416c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48m0 394c0 3.3-2.7 6-6 6H54c-3.3 0-6-2.7-6-6V192h416z"></svg:path>`,
})
export class FaRegularWindowMaximizeIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
