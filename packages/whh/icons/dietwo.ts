import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[whhDietwoIcon],svg[whh-dietwo-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M832 959H128q-53 0-90.5-37.5T0 831V128q0-53 37.5-90.5T128 0h704q53 0 90.5 37.5T960 128v703q0 53-37.5 90.5T832 959M224 128q-40 0-68 28t-28 67.5t28 67.5t68 28t68-28t28-67.5t-28-67.5t-68-28m512 511q-40 0-68 28t-28 68t28 68t68 28t68-28t28-68t-28-68t-68-28"></svg:path>`,
})
export class WhhDietwoIcon {
  readonly viewBox = input("0 0 960 959")
  readonly width = input("1.01em")
  readonly height = input("1em")
}
