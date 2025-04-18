import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightFloatLandscape2OutlineSharpIcon],svg[material-symbols-light-float-landscape-2-outline-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12.616 14.385h5v-6h-5zM3 19V5h18v14zm1-1h16V6H4zm0 0V6z"></svg:path>`,
})
export class MaterialSymbolsLightFloatLandscape2OutlineSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
