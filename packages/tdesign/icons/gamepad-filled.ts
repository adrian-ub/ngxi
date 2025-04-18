import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tdesignGamepadFilledIcon],svg[tdesign-gamepad-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21.94 3H2.06L.937 21H7.72l1-3h6.558l1 3h6.785zM11 9.5v2H9v2H7v-2H5v-2h2v-2h2v2zm5-2h2.004v2.004H16zm2.004 3.996V13.5H16v-2.004z"></svg:path>`,
})
export class TdesignGamepadFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
