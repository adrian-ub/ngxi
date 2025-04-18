import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[icBaselineReportProblemIcon],svg[ic-baseline-report-problem-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1 21h22L12 2zm12-3h-2v-2h2zm0-4h-2v-4h2z"></svg:path>`,
})
export class IcBaselineReportProblemIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
