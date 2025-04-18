import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[cilMapIcon],svg[cil-map-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M478.465 89.022L329.6 47.382L180.3 89.438L41.459 50.052A20 20 0 0 0 16 69.293v340.6a24.09 24.09 0 0 0 17.449 23.089l146.817 41.65l149.365-42.074l140.983 39.436A20 20 0 0 0 496 452.728V112.135a24.08 24.08 0 0 0-17.535-23.113M163 436.466L48 403.842V85.17l115 32.624Zm150.615-32.647L195 437.231V118.542L313.615 85.13ZM464 436.91L345.615 403.8V85.089L464 118.2Z"></svg:path>`,
})
export class CilMapIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
