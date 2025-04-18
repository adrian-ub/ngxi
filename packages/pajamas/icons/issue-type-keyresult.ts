import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[pajamasIssueTypeKeyresultIcon],svg[pajamas-issue-type-keyresult-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M13.5 5.25a.75.75 0 0 0 1.5 0V1h-4.25a.75.75 0 0 0 0 1.5h1.69L7.94 7H4.75a.75.75 0 0 0-.53.22l-3 3a.75.75 0 0 0 .53 1.28H4.5v2.75a.75.75 0 0 0 1.28.53l3-3a.75.75 0 0 0 .22-.53V8.06l4.5-4.5zM7.47 8.53l-.029-.03h-2.38L3.56 10H6v2.44l1.5-1.5V8.558z" clip-rule="evenodd"></svg:path>`,
})
export class PajamasIssueTypeKeyresultIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
