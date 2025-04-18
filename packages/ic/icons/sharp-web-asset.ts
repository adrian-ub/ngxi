import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[icSharpWebAssetIcon],svg[ic-sharp-web-asset-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 4v16h18V4zm16 14H5V8h14z"></svg:path>`,
})
export class IcSharpWebAssetIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
