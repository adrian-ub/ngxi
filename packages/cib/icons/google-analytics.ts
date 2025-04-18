import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[cibGoogleAnalyticsIcon],svg[cib-google-analytics-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M29.432 32H2.527A2.533 2.533 0 0 1 0 29.473v-5.895a2.533 2.533 0 0 1 2.527-2.527h7.577V12.63a2.54 2.54 0 0 1 2.527-2.527h8.443V2.567a2.58 2.58 0 0 1 2.567-2.568h5.792a2.583 2.583 0 0 1 2.568 2.568v26.864a2.583 2.583 0 0 1-2.568 2.568z"></svg:path>`,
})
export class CibGoogleAnalyticsIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
