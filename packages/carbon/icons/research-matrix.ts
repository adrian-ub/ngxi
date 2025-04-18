import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[carbonResearchMatrixIcon],svg[carbon-research-matrix-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18 13V4h-2v2h-3v2h3v5h-3v2h8v-2h-3zm-1.5 7a3.5 3.5 0 1 1-3.5 3.5a3.5 3.5 0 0 1 3.5-3.5m0-2a5.5 5.5 0 1 0 5.5 5.5a5.5 5.5 0 0 0-5.5-5.5zM8 30H2V2h6v2H4v24h4v2zm22 0h-6v-2h4V4h-4V2h6v28z"></svg:path>`,
})
export class CarbonResearchMatrixIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
