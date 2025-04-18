import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[codiconIssueReopenedIcon],svg[codicon-issue-reopened-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path fill-rule="evenodd" d="M5.28 5.656L2 7.006l-.66-.26L0 3.506l.92-.38l.81 1.95a6.48 6.48 0 0 1 12.48 1.93h-1a5.48 5.48 0 0 0-10.64-1.28l2.32-1zm8.86 2.68l1.34 3.23l-.92.44l-.82-2a6.49 6.49 0 0 1-12.5-2h1v-.5a5.49 5.49 0 0 0 10.64 1.89l-2.25.93l-.39-.92l3.25-1.35z" clip-rule="evenodd"></svg:path><svg:circle cx="7.74" cy="7.54" r="1"></svg:circle></svg:g>`,
})
export class CodiconIssueReopenedIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
