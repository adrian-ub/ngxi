import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[icSharpPanoramaHorizontalSelectIcon],svg[ic-sharp-panorama-horizontal-select-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 5.5c-5.25 0-9.01-1.54-10-1.92V20.4c2.16-.76 5.21-1.9 10-1.9c4.78 0 7.91 1.17 10 1.9V3.6c-2.09.73-5.23 1.9-10 1.9"></svg:path>`,
})
export class IcSharpPanoramaHorizontalSelectIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
