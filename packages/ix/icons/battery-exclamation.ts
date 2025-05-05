import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ixBatteryExclamationIcon],svg[ix-battery-exclamation-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M234.667 341.333c17.664 0 32 14.328 32 32s-14.336 32-32 32s-32-14.327-32-32c0-17.672 14.336-32 32-32m-64-213.333v42.667H85.333v170.666h85.334V384h-128V128zm256 0v85.333h42.666v85.334h-42.666V384h-128v-42.667H384V170.667h-85.333V128zM256 106.667v208h-42.667v-208z" clip-rule="evenodd"></svg:path>`,
})
export class IxBatteryExclamationIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
