import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tdesignAnalyticsIcon],svg[tdesign-analytics-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 2h20v20H2zm2 2v16h16V4zm14 4v3h-2V8zm-5 2v3h-2v-3zm-5 2v6H6v-6zm10 1v5h-2v-5zm-5 2v3h-2v-3z"></svg:path>`,
})
export class TdesignAnalyticsIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
