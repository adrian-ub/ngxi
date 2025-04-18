import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[octiconIssueOpened24Icon],svg[octicon-issue-opened-24-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 1c6.075 0 11 4.925 11 11s-4.925 11-11 11S1 18.075 1 12S5.925 1 12 1M2.5 12a9.5 9.5 0 0 0 9.5 9.5a9.5 9.5 0 0 0 9.5-9.5A9.5 9.5 0 0 0 12 2.5A9.5 9.5 0 0 0 2.5 12m9.5 2a2 2 0 1 1-.001-3.999A2 2 0 0 1 12 14"></svg:path>`,
})
export class OcticonIssueOpened24Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
