import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[grommetIconsAnalyticsIcon],svg[grommet-icons-analytics-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-width="2" d="M20 7c1.25 1.67 2 3.75 2 6c0 5.52-4.48 10-10 10S2 18.52 2 13S6.48 3 12 3m0-2v12l9.6-7.2C19.41 2.89 15.92 1 12 1Z"></svg:path>`,
})
export class GrommetIconsAnalyticsIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
