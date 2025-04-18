import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightViewCozyOutlineSharpIcon],svg[material-symbols-light-view-cozy-outline-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 10.5V4h6.5v6.5zm1-1h4.5V5H5zM4 20v-6.5h6.5V20zm1-1h4.5v-4.5H5zm8.5-8.5V4H20v6.5zm1-1H19V5h-4.5zm-1 10.5v-6.5H20V20zm1-1H19v-4.5h-4.5zm0-4.5"></svg:path>`,
})
export class MaterialSymbolsLightViewCozyOutlineSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
