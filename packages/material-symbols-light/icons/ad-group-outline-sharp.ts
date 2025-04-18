import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightAdGroupOutlineSharpIcon],svg[material-symbols-light-ad-group-outline-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7.5 16h12V6h-12zm-1 1V3h14v14zm-3 3V6.616h1V19h12.385v1zm4-4V4z"></svg:path>`,
})
export class MaterialSymbolsLightAdGroupOutlineSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
