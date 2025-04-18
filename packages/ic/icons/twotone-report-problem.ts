import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[icTwotoneReportProblemIcon],svg[ic-twotone-report-problem-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 5.99L4.47 19h15.06zM13 18h-2v-2h2zm-2-4v-4h2v4z" opacity=".3"></svg:path><svg:path fill="currentColor" d="M12 2L1 21h22zm0 3.99L19.53 19H4.47zM11 16h2v2h-2zm0-6h2v4h-2z"></svg:path>`,
})
export class IcTwotoneReportProblemIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
