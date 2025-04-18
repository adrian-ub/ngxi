import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[carbonRegionAnalysisAreaIcon],svg[carbon-region-analysis-area-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs></svg:defs><svg:path d="M30 23v-2h-2v-2h-2v2h-3v-2h-2v2h-2v2h2v3h-2v2h2v2h2v-2h3v2h2v-2h2v-2h-2v-3zm-4 3h-3v-3h3z" fill="currentColor"></svg:path><svg:path d="M16 30a14 14 0 1 1 14-14h-2a12 12 0 1 0-12 12z" fill="currentColor"></svg:path>`,
})
export class CarbonRegionAnalysisAreaIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
