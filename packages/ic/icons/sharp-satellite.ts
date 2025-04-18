import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[icSharpSatelliteIcon],svg[ic-sharp-satellite-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21 3H3v18h18zM5 4.99h3C8 6.65 6.66 8 5 8zM5 12v-2c2.76 0 5-2.25 5-5.01h2C12 8.86 8.87 12 5 12m0 6l3.5-4.5l2.5 3.01L14.5 12l4.5 6z"></svg:path>`,
})
export class IcSharpSatelliteIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
