import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkClockTowerIcon],svg[icon-park-clock-tower-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M4 44H44"></svg:path><svg:rect width="12" height="12" x="27" y="32" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"></svg:rect><svg:path stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M38 10V16"></svg:path><svg:path stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M28 10V16"></svg:path><svg:path stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M28 10L33 4L38 10H28Z"></svg:path><svg:path stroke="#000" stroke-linejoin="round" stroke-width="4" d="M25 20H11C9.89543 20 9 20.8954 9 22V44"></svg:path><svg:path stroke="#000" stroke-linecap="round" stroke-width="4" d="M15 29L19 29"></svg:path><svg:path stroke="#000" stroke-linecap="round" stroke-width="4" d="M15 36L19 36"></svg:path><svg:rect width="16" height="16" x="25" y="16" fill="#2F88FF" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" rx="1"></svg:rect><svg:circle cx="33" cy="24" r="3" fill="#fff"></svg:circle><svg:path stroke="#000" stroke-linecap="round" stroke-width="4" d="M33 32V42"></svg:path></svg:g>`,
})
export class IconParkClockTowerIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
