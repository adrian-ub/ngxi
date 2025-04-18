import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ixElectricalEnergyIcon],svg[ix-electrical-energy-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="m341.333 42.667l-31.96 128h106.676L149.497 469.334L202.727 256h-85.312l53.251-213.333zm-20.569 170.667h-63.416l-13.224 52.996l-11.402 45.649zm-34.069-128h-82.71l-31.957 128h82.714l13.235-53.003z"></svg:path>`,
})
export class IxElectricalEnergyIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
