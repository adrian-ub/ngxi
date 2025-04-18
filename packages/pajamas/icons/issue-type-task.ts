import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[pajamasIssueTypeTaskIcon],svg[pajamas-issue-type-task-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M13.78 3.43a.75.75 0 0 0-1.06-1.06L7.162 7.927L5.289 5.991a.75.75 0 1 0-1.078 1.043l2.403 2.484a.75.75 0 0 0 1.07.01zM2.5 9.75a.75.75 0 0 0-1.5 0V12a3 3 0 0 0 3 3h8a3 3 0 0 0 3-3V9.75a.75.75 0 0 0-1.5 0V12a1.5 1.5 0 0 1-1.5 1.5H4A1.5 1.5 0 0 1 2.5 12z" clip-rule="evenodd"></svg:path>`,
})
export class PajamasIssueTypeTaskIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
