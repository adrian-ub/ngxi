import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[cilKeyboardIcon],svg[cil-keyboard-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M472 80H40a24.03 24.03 0 0 0-24 24v240a24.03 24.03 0 0 0 24 24h432a24.03 24.03 0 0 0 24-24V104a24.03 24.03 0 0 0-24-24m-8 256H48V112h416Z"></svg:path><svg:path fill="currentColor" d="M144 272h160v32H144zm-64 0h32v32H80zm320 0h32v32h-32zm-64 0h32v32h-32zm32-64h32v32h-32zm-64 0h32v32h-32zm-64 0h32v32h-32zm-64 0h32v32h-32zm-64 0h32v32h-32zm224-64h32v32h-32zm64 0h32v32h-32zm-128 0h32v32h-32zm-64 0h32v32h-32zm-64 0h32v32h-32zm-64 0h32v32H80z"></svg:path>`,
})
export class CilKeyboardIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
