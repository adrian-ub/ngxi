import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightViewCozySharpIcon],svg[material-symbols-light-view-cozy-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 10.5V4h6.5v6.5zM4 20v-6.5h6.5V20zm9.5-9.5V4H20v6.5zm0 9.5v-6.5H20V20z"></svg:path>`,
})
export class MaterialSymbolsLightViewCozySharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
