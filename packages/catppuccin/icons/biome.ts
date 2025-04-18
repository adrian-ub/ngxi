import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[catppuccinBiomeIcon],svg[catppuccin-biome-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="#8aadf4" stroke-linecap="round" stroke-linejoin="round" d="M3.538 12.543C4.37 11.165 5.328 10.297 8 11l.5-2.5c-1.897-.447-4.05-.218-5.58.991a6.38 6.38 0 0 0-2.42 5h15L8 1.51L5 6.5"></svg:path>`,
})
export class CatppuccinBiomeIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
