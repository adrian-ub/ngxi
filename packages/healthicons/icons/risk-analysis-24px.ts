import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[healthiconsRiskAnalysis24pxIcon],svg[healthicons-risk-analysis-24px-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"><svg:path d="M11.445 4.265a.5.5 0 0 0-.87 0L2.06 19.253a.5.5 0 0 0 .434.747h17.032a.5.5 0 0 0 .435-.747l-2.27-3.995a4.216 4.216 0 0 1-3.83-6.742zM10.25 11.25a.75.75 0 0 1 1.5 0v2.5a.75.75 0 0 1-1.5 0zm1.5 4.25V17h-1.5v-1.5z"></svg:path><svg:path d="M14.414 9.49A3.2 3.2 0 0 0 14 11.07a3.212 3.212 0 0 0 4.746 2.83l1.955 1.954l1.3-1.3l-1.956-1.955a3.216 3.216 0 0 0-5.631-3.109m4.18 1.58a1.378 1.378 0 1 1-2.756 0a1.378 1.378 0 0 1 2.756 0"></svg:path></svg:g>`,
})
export class HealthiconsRiskAnalysis24pxIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
