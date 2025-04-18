import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[cilScreenSmartphoneIcon],svg[cil-screen-smartphone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M104 48v416a32.036 32.036 0 0 0 32 32h248a32.036 32.036 0 0 0 32-32V48a32.036 32.036 0 0 0-32-32H136a32.036 32.036 0 0 0-32 32m280.021 416H136V48h248Z"></svg:path><svg:path fill="currentColor" d="M216 80h96v32h-96zm32 312h32v32h-32z"></svg:path>`,
})
export class CilScreenSmartphoneIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
