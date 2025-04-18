import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[icSharpCropDinIcon],svg[ic-sharp-crop-din-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21 3H3v18h18zm-2 16H5V5h14z"></svg:path>`,
})
export class IcSharpCropDinIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
