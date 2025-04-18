import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phJoystickLightIcon],svg[ph-joystick-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M208 146h-74V93.52a38 38 0 1 0-12 0V146H48a14 14 0 0 0-14 14v48a14 14 0 0 0 14 14h160a14 14 0 0 0 14-14v-48a14 14 0 0 0-14-14M102 56a26 26 0 1 1 26 26a26 26 0 0 1-26-26m108 152a2 2 0 0 1-2 2H48a2 2 0 0 1-2-2v-48a2 2 0 0 1 2-2h160a2 2 0 0 1 2 2Zm-42-94h32a6 6 0 0 1 0 12h-32a6 6 0 0 1 0-12"></svg:path>`,
})
export class PhJoystickLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
