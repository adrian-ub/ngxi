import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightMetroIcon],svg[material-symbols-light-metro-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 20V4h2.954L12 17.339L17.015 4H20v16h-1.846V6.366L12.89 20h-1.8L5.846 6.46V20z"></svg:path>`,
})
export class MaterialSymbolsLightMetroIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
