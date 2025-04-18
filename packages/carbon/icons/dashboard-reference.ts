import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[carbonDashboardReferenceIcon],svg[carbon-dashboard-reference-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 20v2h4.586L2 28.586L3.414 30L10 23.414V28h2v-8zm20 1h2v5h-2zm-4-5h2v10h-2zm-4 2h2v8h-2z"></svg:path><svg:path fill="currentColor" d="M28 2H4a2 2 0 0 0-2 2v12h2v-3h24.001l.001 15H16v2h12a2.003 2.003 0 0 0 2-2V4a2 2 0 0 0-2-2m-16 9H4V4h8Zm2 0V4h14v7Z"></svg:path>`,
})
export class CarbonDashboardReferenceIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
