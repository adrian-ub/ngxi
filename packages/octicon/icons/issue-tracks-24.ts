import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[octiconIssueTracks24Icon],svg[octicon-issue-tracks-24-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2.5 12a9.5 9.5 0 1 1 19 0a.75.75 0 0 0 1.5 0c0-6.075-4.925-11-11-11S1 5.925 1 12s4.925 11 11 11a.75.75 0 0 0 0-1.5A9.5 9.5 0 0 1 2.5 12"></svg:path><svg:path fill="currentColor" d="M12 14a2 2 0 1 0 0-4a2 2 0 0 0 0 4m2.5 2.75a.75.75 0 0 1 .75-.75h7a.75.75 0 0 1 0 1.5h-7a.75.75 0 0 1-.75-.75m3.75 2.75a.75.75 0 0 0 0 1.5h4a.75.75 0 0 0 0-1.5z"></svg:path>`,
})
export class OcticonIssueTracks24Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
