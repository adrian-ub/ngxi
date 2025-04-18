import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[icSharpBrandingWatermarkIcon],svg[ic-sharp-branding-watermark-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M23 3H1v18h22zm-2 16h-9v-6h9z"></svg:path>`,
})
export class IcSharpBrandingWatermarkIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
