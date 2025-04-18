import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightTileLargeOutlineIcon],svg[material-symbols-light-tile-large-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 20v-4.942h6.789V20zm9.173 0v-4.942H20V20zM5 19h4.789v-2.942H5zm9.173 0H19v-2.942h-4.827zM4 12.673V4h16v8.673zm12.596 4.846"></svg:path>`,
})
export class MaterialSymbolsLightTileLargeOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
