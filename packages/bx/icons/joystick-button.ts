import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[bxJoystickButtonIcon],svg[bx-joystick-button-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20 7h-3V4c0-1.103-.897-2-2-2H9c-1.103 0-2 .897-2 2v3H4c-1.103 0-2 .897-2 2v6c0 1.103.897 2 2 2h3v3c0 1.103.897 2 2 2h6c1.103 0 2-.897 2-2v-3h3c1.103 0 2-.897 2-2V9c0-1.103-.897-2-2-2m0 8h-5v4h.001v1H9v-5H4V9h5V4h6v5h5z"></svg:path><svg:path fill="currentColor" d="M8 14v-4l-3 2zm8 0l3-2l-3-2zm-6-6h4l-2-3zm2 11l2-3h-4z"></svg:path><svg:circle cx="12" cy="12" r="2" fill="currentColor"></svg:circle>`,
})
export class BxJoystickButtonIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
