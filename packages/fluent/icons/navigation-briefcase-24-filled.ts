import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentNavigationBriefcase24FilledIcon],svg[fluent-navigation-briefcase-24-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 17h9v2H3a1 1 0 0 1-.117-1.993zm13.75-6h.344v-.002L3 11l-.117.007A1 1 0 0 0 3 13l11.104-.001A2.75 2.75 0 0 1 16.75 11M21 5H3l-.117.007A1 1 0 0 0 3 7h18l.117-.007A1 1 0 0 0 21 5m-6 10h-.5a1.5 1.5 0 0 0-1.5 1.5v5a1.5 1.5 0 0 0 1.5 1.5h8a1.5 1.5 0 0 0 1.5-1.5v-5a1.5 1.5 0 0 0-1.5-1.5H22v-1.25A1.75 1.75 0 0 0 20.25 12h-3.5A1.75 1.75 0 0 0 15 13.75zm1.5-1.25a.25.25 0 0 1 .25-.25h3.5a.25.25 0 0 1 .25.25V15h-4z"></svg:path>`,
})
export class FluentNavigationBriefcase24FilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
