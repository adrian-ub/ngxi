import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsAutoAwesomeMosaicOutlineSharpIcon],svg[material-symbols-auto-awesome-mosaic-outline-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11 21H3V3h8zm-2-2V5H5v14zm4-8V3h8v8zm2-2h4V5h-4zm-2 12v-8h8v8zm2-2h4v-4h-4zm0-4"></svg:path>`,
})
export class MaterialSymbolsAutoAwesomeMosaicOutlineSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
