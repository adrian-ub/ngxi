import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[bubblesPluginAlertsOutlineIcon],svg[bubbles-plugin-alerts-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M7.314 4.766a6.35 6.35 0 0 0-2.47 2.471M6.475 2A6.5 6.5 0 0 0 2 6.476M5 18.5h15m0 0s-1.5-1.306-1.5-6c0-3.75-2.562-7.068-6-7.068s-6 3.318-6 7.068c0 4.72-1.5 6-1.5 6m9 1a1.5 1.5 0 1 1-3 0m1.5-14.068V3.5m5.186 1.266a6.33 6.33 0 0 1 2.47 2.472M18.525 2A6.5 6.5 0 0 1 23 6.476"></svg:path>`,
})
export class BubblesPluginAlertsOutlineIcon {
  readonly viewBox = input("0 0 25 25")
  readonly width = input("1em")
  readonly height = input("1em")
}
