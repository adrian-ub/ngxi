import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[octiconDiffRenamed24Icon],svg[octicon-diff-renamed-24-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13.75 12.75v3.347a.25.25 0 0 0 .436.166l3.672-4.096a.25.25 0 0 0 0-.334l-3.672-4.096a.25.25 0 0 0-.436.166v3.347h-7a.75.75 0 0 0 0 1.5z"></svg:path><svg:path fill="currentColor" d="M2 3.75C2 2.784 2.784 2 3.75 2h16.5c.966 0 1.75.784 1.75 1.75v16.5A1.75 1.75 0 0 1 20.25 22H3.75A1.75 1.75 0 0 1 2 20.25zm1.75-.25a.25.25 0 0 0-.25.25v16.5c0 .138.112.25.25.25h16.5a.25.25 0 0 0 .25-.25V3.75a.25.25 0 0 0-.25-.25z"></svg:path>`,
})
export class OcticonDiffRenamed24Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
