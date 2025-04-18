import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[icSharpCropPortraitIcon],svg[ic-sharp-crop-portrait-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19 3H5v18h14zm-2 16H7V5h10z"></svg:path>`,
})
export class IcSharpCropPortraitIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
