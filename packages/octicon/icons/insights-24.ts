import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[octiconInsights24Icon],svg[octicon-insights-24-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill-rule="evenodd" d="M11.75 3.5a.75.75 0 0 1 .75.75v15.5a.75.75 0 0 1-1.5 0V4.25a.75.75 0 0 1 .75-.75zm6.5 3.625a.75.75 0 0 1 .75.75V19.75a.75.75 0 0 1-1.5 0V7.875a.75.75 0 0 1 .75-.75zM5.25 11a.75.75 0 0 1 .75.75v8a.75.75 0 0 1-1.5 0v-8a.75.75 0 0 1 .75-.75z" fill="currentColor"></svg:path>`,
})
export class OcticonInsights24Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
