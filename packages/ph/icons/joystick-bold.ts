import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phJoystickBoldIcon],svg[ph-joystick-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M208 144h-68V98.32a44 44 0 1 0-24 0V144H48a20 20 0 0 0-20 20v44a20 20 0 0 0 20 20h160a20 20 0 0 0 20-20v-44a20 20 0 0 0-20-20M108 56a20 20 0 1 1 20 20a20 20 0 0 1-20-20m96 148H52v-36h152Zm-32-100h32a12 12 0 0 1 0 24h-32a12 12 0 0 1 0-24"></svg:path>`,
})
export class PhJoystickBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
