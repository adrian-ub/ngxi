import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[solarSmartHomeAngleLineDuotoneIcon],svg[solar-smart-home-angle-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5"><svg:path d="M2.011 10c-.044-.875.038-1.527.324-2.125c.54-1.127 1.691-1.813 3.992-3.183l1.385-.825C9.8 2.622 10.846 2 12 2s2.199.622 4.288 1.867l1.385.825c2.3 1.37 3.451 2.056 3.992 3.183s.35 2.446-.03 5.083l-.278 1.937c-.487 3.388-.731 5.081-1.906 6.093c-1.069.92-2.591 1.004-5.451 1.011" opacity=".5"></svg:path><svg:path d="M11 22a9 9 0 0 0-9-9"></svg:path><svg:path d="M8 22a6 6 0 0 0-6-6m3 6a3 3 0 0 0-3-3"></svg:path></svg:g>`,
})
export class SolarSmartHomeAngleLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
