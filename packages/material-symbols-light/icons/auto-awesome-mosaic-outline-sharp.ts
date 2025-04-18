import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightAutoAwesomeMosaicOutlineSharpIcon],svg[material-symbols-light-auto-awesome-mosaic-outline-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11 20H4V4h7zm-1-1V5H5v14zm3-8V4h7v7zm1-1h5V5h-5zm-1 10v-7h7v7zm1-1h5v-5h-5zm0-5"></svg:path>`,
})
export class MaterialSymbolsLightAutoAwesomeMosaicOutlineSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
