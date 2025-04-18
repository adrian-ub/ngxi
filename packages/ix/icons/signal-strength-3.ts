import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ixSignalStrength3Icon],svg[ix-signal-strength-3-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M469.334 85.333v341.333H42.667zm-42.667 88.747L277.333 293.546v90.453h149.334z"></svg:path>`,
})
export class IxSignalStrength3Icon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
