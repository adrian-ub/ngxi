import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[solarCropMinimalisticLineDuotoneIcon],svg[solar-crop-minimalistic-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5"><svg:path d="M22 19h-9c-3.771 0-5.657 0-6.828-1.172S5 14.771 5 11V2"></svg:path><svg:path d="M2 5h9c3.771 0 5.657 0 6.828 1.172S19 9.229 19 13v9" opacity=".5"></svg:path></svg:g>`,
})
export class SolarCropMinimalisticLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
