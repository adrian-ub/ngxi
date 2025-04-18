import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[icSharpCropSquareIcon],svg[ic-sharp-crop-square-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20 4H4v16h16zm-2 14H6V6h12z"></svg:path>`,
})
export class IcSharpCropSquareIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
