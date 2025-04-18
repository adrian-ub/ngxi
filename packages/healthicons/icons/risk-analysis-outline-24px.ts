import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[healthiconsRiskAnalysisOutline24pxIcon],svg[healthicons-risk-analysis-outline-24px-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M2.06 19.253a.5.5 0 0 0 .434.747h17.032a.5.5 0 0 0 .434-.747l-2.27-3.995a4.24 4.24 0 0 1-2.616-.557l1.874 3.3H5.072L11.01 7.548L13 11.05c.004-.953.324-1.83.86-2.534l-2.415-4.252a.5.5 0 0 0-.87 0z"></svg:path><svg:path fill-rule="evenodd" d="M14.414 9.49a3.216 3.216 0 0 1 5.631 3.109L22 14.554l-1.3 1.3l-1.954-1.955a3.2 3.2 0 0 1-1.609.385A3.21 3.21 0 0 1 14 11.07m3.216 1.378a1.378 1.378 0 1 0 0-2.756a1.378 1.378 0 0 0 0 2.756" clip-rule="evenodd"></svg:path><svg:path d="M14 11.07a3.2 3.2 0 0 1 .414-1.58zM10.25 17v-1.5h1.5V17zm.75-6a.75.75 0 0 0-.75.75v2.5a.75.75 0 0 0 1.5 0v-2.5A.75.75 0 0 0 11 11"></svg:path></svg:g>`,
})
export class HealthiconsRiskAnalysisOutline24pxIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
