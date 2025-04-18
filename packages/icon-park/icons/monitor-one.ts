import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkMonitorOneIcon],svg[icon-park-monitor-one-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M5 8C5 6.89543 5.89543 6 7 6H41C42.1046 6 43 6.89543 43 8V32C43 33.1046 42.1046 34 41 34H7C5.89543 34 5 33.1046 5 32V8Z"></svg:path><svg:path fill="#2F88FF" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M5 26C5 24.8954 5.89543 24 7 24H41C42.1046 24 43 24.8954 43 26V32C43 33.1046 42.1046 34 41 34H7C5.89543 34 5 33.1046 5 32V26Z"></svg:path><svg:path stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M22 12L18 17"></svg:path><svg:path stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M28 14L25 18"></svg:path><svg:circle cx="24" cy="29" r="2" fill="#fff"></svg:circle><svg:path stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M17 34L14 42H34L31 34"></svg:path></svg:g>`,
})
export class IconParkMonitorOneIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
