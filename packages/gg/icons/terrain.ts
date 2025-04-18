import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ggTerrainIcon],svg[gg-terrain-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m8 10l-5 8h10zm2.529.754L13.5 6L21 18h-5.943z"></svg:path>`,
})
export class GgTerrainIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
