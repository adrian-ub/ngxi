import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightPageHeaderOutlineSharpIcon],svg[material-symbols-light-page-header-outline-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 5V4h16v1zm0 15V7.385h16V20zm1-1h14V8.385H5zm0 0V8.385z"></svg:path>`,
})
export class MaterialSymbolsLightPageHeaderOutlineSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
