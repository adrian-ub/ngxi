import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightResponsiveLayoutOutlineIcon],svg[material-symbols-light-responsive-layout-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 20V9h5V4h11v16zm11-1h4V5h-9v4h5zm-5 0h4v-9h-4zm-5 0h4v-9H5zM15 9v1zm0 0"></svg:path>`,
})
export class MaterialSymbolsLightResponsiveLayoutOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
