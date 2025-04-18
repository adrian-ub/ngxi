import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[whhDieoneIcon],svg[whh-dieone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M832 959H128q-53 0-90.5-37.5T0 831V127q0-53 37.5-90T128 0h704q53 0 90.5 37.5T960 127v704q0 53-37.5 90.5T832 959M480 383q-40 0-68 28.5t-28 68t28 67.5t68 28t68-28t28-67.5t-28-68t-68-28.5"></svg:path>`,
})
export class WhhDieoneIcon {
  readonly viewBox = input("0 0 960 959")
  readonly width = input("1.01em")
  readonly height = input("1em")
}
