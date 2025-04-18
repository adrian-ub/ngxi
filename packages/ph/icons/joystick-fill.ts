import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phJoystickFillIcon],svg[ph-joystick-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M224 160v48a16 16 0 0 1-16 16H48a16 16 0 0 1-16-16v-48a16 16 0 0 1 16-16h72V95.19a40 40 0 1 1 16 0V144h72a16 16 0 0 1 16 16m-64-40a8 8 0 0 0 8 8h32a8 8 0 0 0 0-16h-32a8 8 0 0 0-8 8"></svg:path>`,
})
export class PhJoystickFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
