import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightTileLargeIcon],svg[material-symbols-light-tile-large-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 20v-4.75h6.616V20zm9.366 0v-4.75H20V20zM4 12.5V4h16v8.5z"></svg:path>`,
})
export class MaterialSymbolsLightTileLargeIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
