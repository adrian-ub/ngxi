import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsScanSharpIcon],svg[material-symbols-scan-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13 9h5l-5-5zM4 22v-5h16v5zm-3-7v-2h22v2zm3-4V2h10l6 6v3z"></svg:path>`,
})
export class MaterialSymbolsScanSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
