import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[carbonResearchHintonPlotIcon],svg[carbon-research-hinton-plot-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 2h4v4H2zm8 0h4v4h-4zm8 0h4v4h-4zm8 0h4v4h-4zM2 10h4v4H2zm8 0h4v4h-4zm8 0h4v4h-4zm8 0h4v4h-4zM2 18h4v4H2zm8 0h4v4h-4zm8 0h4v4h-4zm8 0h4v4h-4zM2 26h4v4H2zm8 0h4v4h-4zm8 0h4v4h-4zm8 0h4v4h-4z"></svg:path>`,
})
export class CarbonResearchHintonPlotIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
