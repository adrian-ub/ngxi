import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightTabletMacSharpIcon],svg[material-symbols-light-tablet-mac-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 22V2h16v20zm1-5.462h14V5.5H5zm7 3.5q.31 0 .54-.23t.23-.539t-.23-.54T12 18.5t-.54.23t-.23.54t.23.539t.54.23"></svg:path>`,
})
export class MaterialSymbolsLightTabletMacSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
