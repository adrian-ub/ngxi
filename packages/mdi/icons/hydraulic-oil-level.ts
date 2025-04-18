import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiHydraulicOilLevelIcon],svg[mdi-hydraulic-oil-level-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15 18c-1.66 0-3-1.34-3-3c0-2 3-5.37 3-5.37S18 13 18 15c0 1.66-1.34 3-3 3m5-14v16H10V4H8v16c0 1.11.89 2 2 2h10c1.11 0 2-.89 2-2V4zM2 19l5-5l-5-5zM16 6V2h-2v4h-3v2h8V6z"></svg:path>`,
})
export class MdiHydraulicOilLevelIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
