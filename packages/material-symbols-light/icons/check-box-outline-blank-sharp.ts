import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightCheckBoxOutlineBlankSharpIcon],svg[material-symbols-light-check-box-outline-blank-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 20V4h16v16zm1-1h14V5H5z"></svg:path>`,
})
export class MaterialSymbolsLightCheckBoxOutlineBlankSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
