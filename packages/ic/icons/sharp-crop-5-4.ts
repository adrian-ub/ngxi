import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[icSharpCrop54Icon],svg[ic-sharp-crop-5-4-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21 4H3v16h18zm-2 14H5V6h14z"></svg:path>`,
})
export class IcSharpCrop54Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
