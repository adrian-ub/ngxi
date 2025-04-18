import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ixSignalStrength8Icon],svg[ix-signal-strength-8-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M469.334 85.333v341.333H42.667z"></svg:path>`,
})
export class IxSignalStrength8Icon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
