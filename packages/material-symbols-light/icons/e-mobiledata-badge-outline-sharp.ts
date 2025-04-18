import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightEMobiledataBadgeOutlineSharpIcon],svg[material-symbols-light-e-mobiledata-badge-outline-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8.885 16.5h6.23v-1h-5.23v-3h4.23v-1h-4.23v-3h5.23v-1h-6.23zM4 20V4h16v16zm1-1h14V5H5zM5 5v14z"></svg:path>`,
})
export class MaterialSymbolsLightEMobiledataBadgeOutlineSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
