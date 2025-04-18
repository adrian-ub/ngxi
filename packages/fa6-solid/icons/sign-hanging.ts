import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fa6SolidSignHangingIcon],svg[fa6-solid-sign-hanging-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M96 0c17.7 0 32 14.3 32 32v32h352c17.7 0 32 14.3 32 32s-14.3 32-32 32H128v352c0 17.7-14.3 32-32 32s-32-14.3-32-32V128H32c-17.7 0-32-14.3-32-32s14.3-32 32-32h32V32C64 14.3 78.3 0 96 0m96 160h256c17.7 0 32 14.3 32 32v160c0 17.7-14.3 32-32 32H192c-17.7 0-32-14.3-32-32V192c0-17.7 14.3-32 32-32"></svg:path>`,
})
export class Fa6SolidSignHangingIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
