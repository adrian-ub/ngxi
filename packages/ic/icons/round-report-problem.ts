import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[icRoundReportProblemIcon],svg[ic-round-report-problem-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2.73 21h18.53c.77 0 1.25-.83.87-1.5l-9.27-16a.996.996 0 0 0-1.73 0l-9.27 16c-.38.67.1 1.5.87 1.5M13 18h-2v-2h2zm-1-4c-.55 0-1-.45-1-1v-2c0-.55.45-1 1-1s1 .45 1 1v2c0 .55-.45 1-1 1"></svg:path>`,
})
export class IcRoundReportProblemIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
