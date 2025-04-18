import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightTileSmallIcon],svg[material-symbols-light-tile-small-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 18v-4.808h6.808V18zm9.192 0v-4.808H20V18zM4 10.808V6h6.808v4.808zm9.192 0V6H20v4.808z"></svg:path>`,
})
export class MaterialSymbolsLightTileSmallIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
