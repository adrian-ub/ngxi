import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ixElectricalEnergyFilledIcon],svg[ix-electrical-energy-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M362.667 42.667L325.51 192h106.667L171.17 469.334l58.389-234.667h-85.333l47.773-192z"></svg:path>`,
})
export class IxElectricalEnergyFilledIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
