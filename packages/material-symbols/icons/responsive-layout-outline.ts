import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsResponsiveLayoutOutlineIcon],svg[material-symbols-responsive-layout-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 21V8h5V3h13v18zm13-2h3V5h-9v3h6zm-6 0h4v-9h-4zm-5 0h3v-9H5zM16 8v2zm0 0"></svg:path>`,
})
export class MaterialSymbolsResponsiveLayoutOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
