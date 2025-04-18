import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mageDashboardCircleBarIcon],svg[mage-dashboard-circle-bar-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor"><svg:rect width="19" height="19" x="2.5" y="2.5" stroke-width="1.5" rx="9.5"></svg:rect><svg:path stroke-linecap="round" stroke-width="1.6" d="M7.55 14.621V9.38m4.5 6.961V7.66m4.5 6.961V9.38"></svg:path></svg:g>`,
})
export class MageDashboardCircleBarIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
