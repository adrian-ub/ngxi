import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightPanoramaOutlineSharpIcon],svg[material-symbols-light-panorama-outline-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 19V5h18v14zm1-1h16V6H4zm3.5-2h9.154l-2.827-3.77l-2.615 3.308l-1.75-2.115zM4 18V6z"></svg:path>`,
})
export class MaterialSymbolsLightPanoramaOutlineSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
