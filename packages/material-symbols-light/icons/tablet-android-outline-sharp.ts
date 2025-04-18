import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightTabletAndroidOutlineSharpIcon],svg[material-symbols-light-tablet-android-outline-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 22V2h16v20zm1-4.461V21h14v-3.462zm5.23 2.115h3.54v-.77h-3.54zM5 16.538h14V5.5H5zM5 4.5h14V3H5zm0 0V3zm0 13.039V21z"></svg:path>`,
})
export class MaterialSymbolsLightTabletAndroidOutlineSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
