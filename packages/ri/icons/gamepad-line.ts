import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[riGamepadLineIcon],svg[ri-gamepad-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17 4a6 6 0 0 1 6 6v4a6 6 0 0 1-6 6H7a6 6 0 0 1-6-6v-4a6 6 0 0 1 6-6zm0 2H7a4 4 0 0 0-3.995 3.8L3 10v4a4 4 0 0 0 3.8 3.995L7 18h10a4 4 0 0 0 3.995-3.8L21 14v-4a4 4 0 0 0-3.8-3.995zm-7 3v2h2v2H9.999L10 15H8l-.001-2H6v-2h2V9zm8 4v2h-2v-2zm-2-4v2h-2V9z"></svg:path>`,
})
export class RiGamepadLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
