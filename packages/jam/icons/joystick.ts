import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[jamJoystickIcon],svg[jam-joystick-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10 6a2 2 0 1 0 0-4a2 2 0 0 0 0 4m1 7h2a3 3 0 0 1 3 3v4H0v-4a3 3 0 0 1 3-3h6V7.874A4.002 4.002 0 0 1 10 0a4 4 0 0 1 1 7.874zm-9 5h12v-2a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1zm2.5-6h2a1.5 1.5 0 0 1 0 3h-2a1.5 1.5 0 0 1 0-3"></svg:path>`,
})
export class JamJoystickIcon {
  readonly viewBox = input("-4 -2 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
