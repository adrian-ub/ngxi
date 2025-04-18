import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[icSharpPanoramaIcon],svg[ic-sharp-panorama-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M23 20V4H1v16zM8.5 12.5l2.5 3.01L14.5 11l4.5 6H5z"></svg:path>`,
})
export class IcSharpPanoramaIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
