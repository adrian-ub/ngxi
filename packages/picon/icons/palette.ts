import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[piconPaletteIcon],svg[picon-palette-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8 3C8-2-6 2 3 7c9 0-2-3 3-4M2 2h1v1H2M1 4h1v1H1m3-4h1v1H4"></svg:path>`,
})
export class PiconPaletteIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}
