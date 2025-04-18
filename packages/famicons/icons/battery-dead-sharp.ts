import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[famiconsBatteryDeadSharpIcon],svg[famicons-battery-dead-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="square" stroke-miterlimit="10" stroke-width="32" d="M32 144h400v224H32zm448 74.67v74.66"></svg:path>`,
})
export class FamiconsBatteryDeadSharpIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
