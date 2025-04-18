import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[bxJoystickAltIcon],svg[bx-joystick-alt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="15" cy="13" r="1" fill="currentColor"></svg:circle><svg:circle cx="17" cy="11" r="1" fill="currentColor"></svg:circle><svg:path fill="currentColor" d="M10 9H8v2H6v2h2v2h2v-2h2v-2h-2z"></svg:path><svg:path fill="currentColor" d="M15 5H9a7 7 0 0 0-7 7a7 7 0 0 0 7 7h6a7 7 0 0 0 7-7a7 7 0 0 0-7-7m0 12H9A5 5 0 1 1 9 7h6a5 5 0 1 1 0 10"></svg:path>`,
})
export class BxJoystickAltIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
