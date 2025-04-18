import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[octiconTabExternal24Icon],svg[octicon-tab-external-24-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 5.75C3 4.784 3.784 4 4.75 4h14.5c.966 0 1.75.784 1.75 1.75V18.5h2a.75.75 0 0 1 0 1.5h-2.65a.85.85 0 0 1-.85-.85V5.75a.25.25 0 0 0-.25-.25H4.75a.25.25 0 0 0-.25.25v13.4c0 .47-.38.85-.85.85H1a.75.75 0 0 1 0-1.5h2z"></svg:path><svg:path fill="currentColor" d="M16.404 13.7a.75.75 0 0 1-1.29.547a690 690 0 0 0-1.92-1.976l-4.141 4.14a.75.75 0 0 1-1.061-1.06l4.14-4.14l-1.94-1.94A.75.75 0 0 1 10.703 8h4.95a.75.75 0 0 1 .75.75v4.95Z"></svg:path>`,
})
export class OcticonTabExternal24Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
