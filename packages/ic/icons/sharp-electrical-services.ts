import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[icSharpElectricalServicesIcon],svg[ic-sharp-electrical-services-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18 13h3v2h-3zm-6-1v2h-2v4h2v2h5v-8z"></svg:path><svg:path fill="currentColor" d="M5 11h7V4H4v2h6v3H3v8h6v-2H5zm13 6h3v2h-3z"></svg:path>`,
})
export class IcSharpElectricalServicesIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
