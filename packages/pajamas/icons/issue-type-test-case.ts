import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[pajamasIssueTypeTestCaseIcon],svg[pajamas-issue-type-test-case-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M3.75 0a.75.75 0 0 0 0 1.5H4V12a4 4 0 0 0 8 0V1.5h.25a.75.75 0 0 0 0-1.5zm6.75 1.5h-5V4h5zm0 8.5H8.75a.75.75 0 0 0 0 1.5h1.75v.5a2.5 2.5 0 0 1-5 0V5.5h5V7H8.75a.75.75 0 0 0 0 1.5h1.75z" clip-rule="evenodd"></svg:path>`,
})
export class PajamasIssueTypeTestCaseIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
