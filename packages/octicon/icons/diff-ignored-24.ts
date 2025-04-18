import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[octiconDiffIgnored24Icon],svg[octicon-diff-ignored-24-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3.75 2A1.75 1.75 0 0 0 2 3.75v16.5c0 .966.784 1.75 1.75 1.75h16.5A1.75 1.75 0 0 0 22 20.25V3.75A1.75 1.75 0 0 0 20.25 2zM3.5 3.75a.25.25 0 0 1 .25-.25h16.5a.25.25 0 0 1 .25.25v16.5a.25.25 0 0 1-.25.25H3.75a.25.25 0 0 1-.25-.25zm4.737 11.233a.75.75 0 0 0 1.061 1.06l7.027-7.026a.75.75 0 0 0-1.06-1.06z"></svg:path>`,
})
export class OcticonDiffIgnored24Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
