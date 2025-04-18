import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsDeveloperModeOutlineSharpIcon],svg[material-symbols-developer-mode-outline-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8.6 16.6L4 12l4.6-4.6L10 8.85L6.85 12L10 15.15zM5 17h2v1h10v-1h2v6H5zM7 7H5V1h14v6h-2V6H7zm0 13v1h10v-1zM7 4h10V3H7zm8.4 12.6L14 15.15L17.15 12L14 8.85l1.4-1.45L20 12zM7 4V3zm0 16v1z"></svg:path>`,
})
export class MaterialSymbolsDeveloperModeOutlineSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
