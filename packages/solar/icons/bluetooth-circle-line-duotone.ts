import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[solarBluetoothCircleLineDuotoneIcon],svg[solar-bluetooth-circle-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path stroke-linecap="round" d="m11 12l3.2-2.407c.533-.401.8-.602.8-.875c0-.274-.267-.475-.8-.876l-1.454-1.094c-.762-.573-1.143-.86-1.444-.708C11 6.191 11 6.669 11 7.623zm0 0v4.377c0 .954 0 1.432.302 1.583c.301.151.682-.135 1.444-.708l1.454-1.094c.533-.402.8-.602.8-.876c0-.273-.267-.474-.8-.875zm0 0L8 9.5m3 2.5l-3 2.5" opacity=".5"></svg:path><svg:circle cx="12" cy="12" r="10"></svg:circle></svg:g>`,
})
export class SolarBluetoothCircleLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
