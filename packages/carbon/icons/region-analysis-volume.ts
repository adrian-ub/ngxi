import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[carbonRegionAnalysisVolumeIcon],svg[carbon-region-analysis-volume-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M30 23v-2h-2v-2h-2v2h-3v-2h-2v2h-2v2h2v3h-2v2h2v2h2v-2h3v2h2v-2h2v-2h-2v-3zm-4 3h-3v-3h3z" fill="currentColor"></svg:path><svg:path d="M4.83 20.355A24.953 24.953 0 0 0 15 22.965v-2a22.901 22.901 0 0 1-10.867-3.273A11.979 11.979 0 0 1 4 16a11.985 11.985 0 0 1 .133-1.69a22.928 22.928 0 0 1 23.734 0A11.985 11.985 0 0 1 28 16h2a14 14 0 1 0-14 14v-2a12.01 12.01 0 0 1-11.17-7.645zM16 4a12.01 12.01 0 0 1 11.17 7.646a24.898 24.898 0 0 0-22.34 0A12.01 12.01 0 0 1 16 4z" fill="currentColor"></svg:path>`,
})
export class CarbonRegionAnalysisVolumeIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
