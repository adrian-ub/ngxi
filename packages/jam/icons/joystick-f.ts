import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[jamJoystickFIcon],svg[jam-joystick-f-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7.915 13H9V7.874A4.002 4.002 0 0 1 10 0a4 4 0 0 1 1 7.874V13h2a3 3 0 0 1 3 3v4H0v-4a3 3 0 0 1 3-3h.085A1.5 1.5 0 0 1 4.5 12h2a1.5 1.5 0 0 1 1.415 1"></svg:path>`,
})
export class JamJoystickFIcon {
  readonly viewBox = input("-4 -2 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
